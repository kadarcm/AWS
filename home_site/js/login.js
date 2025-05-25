

function do_login(event)
{
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const clientId = "4hjs7h3v1b18o33u8656ish8iu";
  const userPoolId = "us-east-1_9zf3817is";
  var asfData = AmazonCognitoAdvancedSecurityData.getData(username, userPoolId, clientId);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
    
  };
  console.log(event)
  fetch(`https://authenticate-here.auth.us-east-1.amazoncognito.com/login?client_id=4hjs7h3v1b18o33u8656ish8iu&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fkadarcm.com%2Flogin.html`, {
    method: "get"}).then(response => {
    if (response.ok) {
      const cookies = response.headers.get("Set-Cookie");
      console.log("Cookies:", cookies);
    }
  });

  fetch(`https://authenticate-here.auth.us-east-1.amazoncognito.com/login?client_id=4hjs7h3v1b18o33u8656ish8iu&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fkadarcm.com%2Flogin.html`, {
    method: "POST",
    // redirect: "follow",
    headers: headers, 
    mode:"no-cors",
    cookies: "include",

    body: JSON.stringify(
      {"username":username,
       "password":password,
       "cognitoAsfData": asfData,
           }
    )
    
  }).then(response => {
    if (response.ok) {
      // Handle successful login
      console.log("Login successful");
      // window.location.href = "./index.html";
    } else {
      // Handle failed login
      console.log("Login failed", response.url);
      alert("Invalid username or password");
    }}
  ).catch(error => {
    // Handle network errors
    console.error("Network error:", error);
    alert("Network error. Please try again later.");
  });
}
const form = document.querySelector("#userinfo");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  do_login(event);
});
