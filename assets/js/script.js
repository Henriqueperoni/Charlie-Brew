let navBar = document.createElement("div");
navBar.setAttribute("id", "navbar-container")

let navBarUL = document.createElement("ul");


// HOME BUTTON
let homeItem = document.createElement("li");
let homeAnchor = document.createElement('a');
homeAnchor.setAttribute('href',"http://www.google.com.br");
homeAnchor.innerHTML = "home";
homeItem.appendChild(homeAnchor);
navBarUL.appendChild(homeItem);

// ABOUT BUTTON
let aboutItem = document.createElement("li");
let aboutAnchor = document.createElement('a');
aboutAnchor.setAttribute('href',"http://www.google.com.br");
aboutAnchor.innerHTML = "about";
aboutItem.appendChild(aboutAnchor);
navBarUL.appendChild(aboutItem);

// LOGO
let logoItem = document.createElement("li");
let logoAnchor = document.createElement('a');
aboutAnchor.setAttribute('href',"http://www.google.com.br");
let navBarImg = document.createElement("img");
navBarImg.src = "assets/images/logo.png"
logoAnchor.appendChild(navBarImg);
logoItem.appendChild(logoAnchor);
navBarUL.appendChild(logoItem);


// BEERS BUTTON
let beersItem = document.createElement("li");
let beersAnchor = document.createElement('a');
beersAnchor.setAttribute('href',"http://www.google.com.br");
beersAnchor.innerHTML = "beers";
beersItem.appendChild(beersAnchor);
navBarUL.appendChild(beersItem);

// CONTACT BUTTON
let contactItem = document.createElement("li");
let contactAnchor = document.createElement('a');
contactAnchor.setAttribute('href',"http://www.google.com.br");
contactAnchor.innerHTML = "contact";
contactItem.appendChild(contactAnchor);
navBarUL.appendChild(contactItem);

// UNORDER LIST TO NAVBAR
navBar.appendChild(navBarUL);



// HERO IMAGE
let heroDiv = document.createElement("div");
heroDiv.setAttribute("id", "hero-img")

// H1
let myH1 = document.createElement("H1");
heroDiv.appendChild(myH1);

let H1SpanOne = document.createElement("span");
let H1SpanTwo = document.createElement("span")
let H1SpanThree = document.createElement("span")
myH1.appendChild(H1SpanOne);
myH1.appendChild(H1SpanTwo);
myH1.appendChild(H1SpanThree);
H1SpanOne.innerHTML = "Welcome"
H1SpanTwo.innerHTML = "to the"
H1SpanThree.innerHTML = "Charlie Brew Brewery"


// APPEDING DIVS
document.body.appendChild(navBar);
document.body.appendChild(heroDiv)