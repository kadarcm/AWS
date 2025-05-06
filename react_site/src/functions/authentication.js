import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; 


export async function LoginService (username, password)  
{
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
    const input = { 
    AuthFlow:  "USER_PASSWORD_AUTH", 
    AuthParameters: {
        "PASSWORD": password,
        "USERNAME": username
    },
    ClientId: "4hjs7h3v1b18o33u8656ish8iu",

    };
    const command = new InitiateAuthCommand(input);
    const response = await client.send(command);
    document.cookie = "AccessToken= " + response["AuthenticationResult"]["AccessToken"] +"; path=/"
    document.cookie = "IdToken= " + response["AuthenticationResult"]["IdToken"] +"; path=/"
    document.cookie = "RefreshToken= " + response["AuthenticationResult"]["RefreshToken"] +"; path=/"
    console.log(response);
    // document.cookie = "authentication = " + response["AuthenticationResult"]
    
}
