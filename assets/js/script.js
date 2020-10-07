let NavBar = document.createElement("div");
let NavBarUL = document.createElement("ul");
let homeItem = document.createElement("li");
let homeAnchor = document.createElement("A")
homeAnchor.setAttribute("href", "https://www.w3schools.com");




NavBar.appendChild(NavBarUL);
NavBarUL.appendChild(homeItem);
//homeItem.appendChild(homeAnchor);

homeItem.innerText = "home"
homeItem.innerHTML = homeAnchor





























document.body.appendChild(NavBar);

