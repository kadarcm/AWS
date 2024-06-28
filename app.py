#!/usr/bin/env python3
import os

import aws_cdk as cdk

from aws.auth_stack import AuthStack
from aws.web_site_stack import WebsiteStack


app = cdk.App()
AuthStack(app, "AuthStack",
    env=cdk.Environment(account=os.getenv('CDK_DEFAULT_ACCOUNT'), region='us-east-1')
    #env=cdk.Environment(account='123456789012', region='us-east-1'),

    )
WebsiteStack(app, "WebsiteStack",
        env=cdk.Environment(account=os.getenv('CDK_DEFAULT_ACCOUNT'), region='us-east-1')
)
app.synth()
