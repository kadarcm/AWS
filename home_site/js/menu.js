


const props = document.getElementById("passedProps")
console.log(props.attributes["pageName"].value)

var homeLinkClass ="";
var aboutLinkClassv ="";

switch (props.attributes["pageName"].value)
{
  case "index":
    homeLinkClass = "nav-link active";
    aboutLinkClass = "nav-link";
    break;
  case "about":
    homeLinkClass = "nav-link";
    aboutLinkClass = "nav-link active";
    break;
  default:
    homeLinkClass = "nav-link active";
    aboutLinkClass = "nav-link";
}

var navHtml = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="./index.html"><img class="logo" src="./Logo.jpg" alt="Logo"/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="${homeLinkClass}" aria-current="page" href="./index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class=" ${aboutLinkClass} " href="./about.html">About</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Web-Apps
                    </a>
                    <ul class="dropdown-menu">
                      <h6>ASP.net</h6>
                      <li><a class="dropdown-item" href="http://myserver.kadarcm.com/league">League</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <h6>Python</h6>
                      <li><a class="dropdown-item" href="#">Inflation App Flask based</a></li>
                      <li><a class="dropdown-item" href="#">PizzaMan App Django based</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <h6>React</h6>
                      <li><a class="dropdown-item disabled" href="#">Comming Soon</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Reporting Services
                    </a>
                    <ul class="dropdown-menu">
                      <h6>Reporting Server</h6>
                      <li><a class="dropdown-item" href="#">PowerBi</a></li>
                      <li><a class="dropdown-item" href="#">SSRS</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <h6>Embeded in web page</h6>
                      <li><a class="dropdown-item" href="#">PowerBi Portal</a></li>
                      <li><a class="dropdown-item" href="#">SSRS Portal</a></li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <!-- <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form> -->
              </div>
            </div>
          </nav> `;
document.getElementById("nav-div").innerHTML=navHtml;
