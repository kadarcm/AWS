from aws_cdk import (
    Duration,
    Stack,
    # aws_sqs as sqs,
    aws_s3_deployment as s3d,
    aws_s3, aws_route53 as r53,
    aws_route53_targets as r53t ,
    aws_certificatemanager as certs,
    aws_cloudfront as cfront,
    aws_cloudfront_origins as origins,
    aws_iam as iam
)
from constructs import Construct




class WebsiteStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # get my hosted Zone
        kadarcm_zone = r53.HostedZone.from_lookup(self, "my_zone", domain_name="kadarcm.com")
        
        # create a certificate to serve site with https/ ssl
        kcm_cer =certs.Certificate(self, id="kcmcert", domain_name="kadarcm.com", 
                    subject_alternative_names=['react.kadarcm.com'], 
                    validation=certs.CertificateValidation.from_dns(kadarcm_zone))
        
        # define a bucke to hold the static website
        web_bucket = aws_s3.Bucket(self, "WebBucket",
                    
                    block_public_access=aws_s3.BlockPublicAccess.BLOCK_ACLS,
                    public_read_access= False,
                    bucket_name="kadarcm.com"
                    
                    )
        # fill that bucket
        s3d.BucketDeployment(self, "DeployWebsite",
                    destination_bucket= web_bucket,
                    sources=[s3d.Source.asset("./home_site")]
                    )
              
        # define a cloud front distrobution conected to the bucket we filled with the static site
        web_distrob =cfront.Distribution(self, "distro",
            default_behavior=cfront.BehaviorOptions(
                        origin=origins.S3Origin(web_bucket),
                
            ),default_root_object="index.html",
            certificate=kcm_cer,
            domain_names=['kadarcm.com'],
            price_class=cfront.PriceClass.PRICE_CLASS_100
       
        )
        
        # make a routing record so that the cloud front distrobution is served at kadarcm.com
        r53.ARecord(self, "home_recoord",
                            target= r53.RecordTarget.from_alias(r53t.CloudFrontTarget(web_distrob)),
                            zone= kadarcm_zone)
      