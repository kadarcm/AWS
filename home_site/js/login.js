const initiateAuth = ({ username, password, clientId }) => {
    const client = new CognitoIdentityProviderClient({});
  
    const command = new InitiateAuthCommand({
      AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
      ClientId: clientId,
    });
  
    return client.send(command);
  };