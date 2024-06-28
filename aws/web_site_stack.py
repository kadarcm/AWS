from aws_cdk import (
    Duration,
    Stack,
    # aws_sqs as sqs,


)
from aws_cdk import (
    aws_s3_deployment as s3d,
    aws_s3, aws_route53 as r53,
    aws_route53_targets as target
)
from constructs import Construct




class WebsiteStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)


        web_bucket = aws_s3.Bucket(self, "WebBucket",
                    website_index_document="index.html",
                    block_public_access=aws_s3.BlockPublicAccess.BLOCK_ACLS,
                    public_read_access= True,
                    bucket_name="kadarcm.com"
                    
                    )
        s3d.BucketDeployment(self, "DeployWebsite",
                    destination_bucket= web_bucket,
                    sources=[s3d.Source.asset("./home_site")]
                    )
        kadarcm_zone = r53.HostedZone.from_lookup(self, "my_zone", domain_name="kadarcm.com")
        record_name = "www"

        r53.ARecord(self, "home_recoord",
                            target= r53.RecordTarget.from_alias(target.BucketWebsiteTarget(web_bucket)),
                            zone= kadarcm_zone)