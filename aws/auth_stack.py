from aws_cdk import (
    Duration,
    Stack,
    # aws_sqs as sqs,


)
from aws_cdk import aws_cognito as cogneto
from constructs import Construct



class AuthStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        userpool=cogneto.UserPool(self, "myuserpool",
        email=cogneto.UserPoolEmail.with_ses(
            from_email="chris@kadarcm.com",
            ses_region="us-east-1",
            ses_verified_domain="kadarcm.com",
            from_name= "Chris"
        ),
        account_recovery= cogneto.AccountRecovery.EMAIL_ONLY,
        sign_in_aliases=cogneto.SignInAliases(username=True, email=True),
        auto_verify=cogneto.AutoVerifiedAttrs(email=True),
        self_sign_up_enabled=True,
        user_verification=cogneto.UserVerificationConfig(
            email_subject="Verify your email for our awesome app!",
            email_body="Thanks for signing up to our awesome app! click the link to verify email {##Verify Email##}",
            email_style=cogneto.VerificationEmailStyle.LINK,

            ),
            standard_attributes=cogneto.StandardAttributes(
                fullname=cogneto.StandardAttribute(mutable=False, required=False),
                email= cogneto.StandardAttribute(mutable=False, required=True),
                gender=cogneto.StandardAttribute(mutable=False,required=False)
            )
            
        )
        kadarcm_client = userpool.add_client("kadarcm_client", 
            auth_flows= cogneto.AuthFlow(user_password=True),
            access_token_validity=Duration.minutes(60),
            id_token_validity=Duration.minutes(60),
            refresh_token_validity=Duration.days(30)
        )
        domain = userpool.add_domain("Domain",
                                     cognito_domain=cogneto.CognitoDomainOptions(
                                         domain_prefix="authenticate-here",
                                     ))


