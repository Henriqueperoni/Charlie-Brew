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

//H1 DIV
let introDiv = document.createElement("div");
introDiv.setAttribute("id", "hero-intro");
heroDiv.appendChild(introDiv);

// H1
let myH1 = document.createElement("H1");
introDiv.appendChild(myH1);



// H1 CONTAINER
let H1SpanOne = document.createElement("span");
let H1SpanTwo = document.createElement("span")
let H1SpanThree = document.createElement("span")
myH1.appendChild(H1SpanOne);
myH1.appendChild(H1SpanTwo);
myH1.appendChild(H1SpanThree);
H1SpanOne.innerHTML = "Welcome"
H1SpanTwo.innerHTML = "to the"
H1SpanThree.innerHTML = "Charlie Brew"
let h1Paragrapher = document.createElement("p");
h1Paragrapher.innerHTML = "Where the beer is served colder than your ex's heart"
introDiv.appendChild(h1Paragrapher);



// ABOUT HEADING
let aboutHeadingDiv = document.createElement("div");
aboutHeadingDiv.setAttribute("class", "containerHeading");

let aboutHeading = document.createElement("h2");
aboutHeading.innerHTML = "about";
aboutHeadingDiv.appendChild(aboutHeading);

// ABOUT CONTAINER
let aboutContainer = document.createElement("div");
aboutContainer.setAttribute("class", "containerAbout")

//ABOUT PARAGRAPHERS
let paragrapherContainer = document.createElement("div")
paragrapherContainer.setAttribute("class", "aboutText")
aboutContainer.appendChild(paragrapherContainer);
let aboutContainerTextOne = document.createElement("p");
aboutContainerTextOne.innerHTML = 'Quoting the best US president in history, Abraham Lincoln "I am a firm believer in the people. If given the truth, they can be depended upon to meet any national crisis. The great point is to bring them the real facts, and beer.” This is one of the main reasons Henrique Peroni created Charlie Brew Brewery in 2032, because as  Mr.s Lincoln, Henrique does believe in people, and in the middle of the chaos, a cold pint of beer can help solve the problems, or at least make you forget then for a while.'
paragrapherContainer.appendChild(aboutContainerTextOne);

let aboutContainerTextTwo = document.createElement("p");
aboutContainerTextTwo.innerHTML = "All Charlie beers are brewed, bottled, canned and kegged at the north of the magic island of Florianopolis. All the ingredients such as barley and hop come from the local community, which helps the people around the Charlie Brew and keep the high quality of these unique beers.  Each beer has its own distinct name, story, and taste experience. Discover our beers. Discover our stories!"
paragrapherContainer.appendChild(aboutContainerTextTwo);


// DIV IMAGES + TEXT
let containerHistory = document.createElement("div");
containerHistory.setAttribute("class", "aboutHistory");
aboutContainer.appendChild(containerHistory);

let pubImageDiv = document.createElement("div");
pubImageDiv.setAttribute("class", "aboutContent");
containerHistory.appendChild(pubImageDiv)
let pubImage = document.createElement("img");
pubImage.src = "assets/images/pub-inside.png";
pubImageDiv.appendChild(pubImage);

let pubTextDiv = document.createElement("div");
pubTextDiv.setAttribute("class", "aboutContent");
containerHistory.appendChild(pubTextDiv);
let pubImageDivH3 = document.createElement("h3");
pubImageDivH3.innerHTML = "pub";
pubTextDiv.appendChild(pubImageDivH3);
let pubImageDivParagrapher = document.createElement("p");
pubImageDivParagrapher.innerHTML = "hfdisjdifodsjfodmsofidj ofj odo ofi doifj oijf dj ojdo jfoid jfoidjoif dsodi osdjfodjofjdoi ojdiojdiosjiodjfo sdoif odijf oisdj ifo";
pubTextDiv.appendChild(pubImageDivParagrapher);






// APPEDING DIVS
document.body.appendChild(navBar);
document.body.appendChild(heroDiv);
document.body.appendChild(aboutHeadingDiv);
document.body.appendChild(aboutContainer);