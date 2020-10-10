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

// PUB
let pubTextDiv = document.createElement("div");
pubTextDiv.setAttribute("class", "aboutContent");
containerHistory.appendChild(pubTextDiv);
let pubTextDivH3 = document.createElement("h3")
pubTextDivH3.innerHTML = "Pub";
pubTextDiv.appendChild(pubTextDivH3);
let pubTextDivParagrapher = document.createElement("p");
pubTextDivParagrapher.innerHTML = "Charlie Brew Pub is located in front of the Barra da Lagoa, which gives the pub an amazing view with a stunning sunset every day. The pub was carefully built to give comfort to the customer, and at the same time make them feel they're at home and inside a brewery. Everything was thought to make every visit unique and unforgettable. Pop in to share one of these moments with us.";
pubTextDiv.appendChild(pubTextDivParagrapher);

// BEER GARDEN 
let beerGardenTextDiv = document.createElement("div");
beerGardenTextDiv.setAttribute("class", "aboutContent");
containerHistory.appendChild(beerGardenTextDiv);
let beerGardenTextDivH3 = document.createElement("h3")
beerGardenTextDivH3.innerHTML = "Beer Garden";
beerGardenTextDiv.appendChild(beerGardenTextDivH3);
let beerGardenTextDivParagrapher = document.createElement("p");
beerGardenTextDivParagrapher.innerHTML = "The Beer Garden was design thinking about how important is to keep in touch with nature. With simplicity and elegance, while you relish a tasty pint you can enjoy the moon and stars. And don't be afraid of bring your pet with you, we will more than happy to serve than as well.";
beerGardenTextDiv.appendChild(beerGardenTextDivParagrapher);


let beerGardenImageDiv = document.createElement("div");
beerGardenImageDiv.setAttribute("class", "aboutContent");
containerHistory.appendChild(beerGardenImageDiv)
let beerGardenImage = document.createElement("img");
beerGardenImage.src = "assets/images/beer-garden.png";
beerGardenImageDiv.appendChild(beerGardenImage);


//OUR PEOPLE

let ourPeopleImageDiv = document.createElement("div");
ourPeopleImageDiv.setAttribute("class", "aboutContent");
containerHistory.appendChild(ourPeopleImageDiv)
let ourPeopleImage = document.createElement("img");
ourPeopleImage.src = "assets/images/our-people.png";
ourPeopleImageDiv.appendChild(ourPeopleImage);


let ourPeopleTextDiv = document.createElement("div");
ourPeopleTextDiv.setAttribute("class", "aboutContent");
containerHistory.appendChild(ourPeopleTextDiv);
let ourPeopleTextDivH3 = document.createElement("h3")
ourPeopleTextDivH3.innerHTML = "Our People";
ourPeopleTextDiv.appendChild(ourPeopleTextDivH3);
let ourPeopleTextDivParagrapher = document.createElement("p");
ourPeopleTextDivParagrapher.innerHTML = 'At Charlie Brew, we use to say that our people are our big asset. Most of the place says "the customer comes first". Not in here, at Charlie Brew, the people come first, our people. With that in mind we build teams with trust, support and communication every employee knows that someone has their back. So they felling safe, they can deliver the best customer service.';
ourPeopleTextDiv.appendChild(ourPeopleTextDivParagrapher);


// BEERS
//BEERS HEADING
let beerHeadingDiv = document.createElement("div");
beerHeadingDiv.setAttribute("class", "containerHeading")

let beerHeading = document.createElement("h2");
beerHeading.innerHTML = "beers";
beerHeadingDiv.appendChild(beerHeading);

//BEERS CONTAINER
let beerContainer = document.createElement("div");
beerContainer.setAttribute("class", "containerbeer")

//BEERS PARAGRAPHER
let beersParagrapher = document.createElement("p")
beersParagrapher.innerHTML = 'We already talk a lot about how things work at Charlie Brew. Now it is time to talk about what really interests us, BEER. After all, everybody here agrees with the actor Jack Nicholson, "Beer, it’s the best damn drink in the world."'
beerContainer.appendChild(beersParagrapher);

//BEER BUTTOMS CONTAINER

let beerButtonsContainer = document.createElement("div");
beerButtonsContainer.setAttribute("class", "buttonsContainer");
beerContainer.appendChild(beerButtonsContainer);


// LAGER CONTAINER
let lagerDiv = document.createElement("div");
lagerDiv.setAttribute("class", "btnDiv");
lagerDiv.setAttribute("id", "lagerDiv");
beerButtonsContainer.appendChild(lagerDiv);

let btnLager = document.createElement("img");
btnLager.setAttribute("class", "btn");
btnLager.src = "assets/images/lager.png"
lagerDiv.appendChild(btnLager)

let h3lager = document.createElement("h3");
h3lager.innerHTML = "Lager"
lagerDiv.appendChild(h3lager);

// RED ALE CONTAINER
let redAleDiv = document.createElement("div");
redAleDiv.setAttribute("class", "btnDiv");
redAleDiv.setAttribute("id", "redAleDiv");
beerButtonsContainer.appendChild(redAleDiv);

let btnRedAle = document.createElement("img");
btnRedAle.setAttribute("class", "btn redBorder");
btnRedAle.setAttribute("id", "buttomRedAle")
btnRedAle.src = "assets/images/red-ale.png"
redAleDiv.appendChild(btnRedAle)

let h3RedAle = document.createElement("h3");
h3RedAle.innerHTML = "Red Ale"
redAleDiv.appendChild(h3RedAle);

// IPA CONTAINER
let ipaDiv = document.createElement("div");
ipaDiv.setAttribute("class", "btnDiv");
ipaDiv.setAttribute("id", "ipaDiv");
beerButtonsContainer.appendChild(ipaDiv);

let btnIpa = document.createElement("img");
btnIpa.setAttribute("class", "btn");
btnIpa.setAttribute("id", "buttomIpa")
btnIpa.src = "assets/images/ipa.png"
ipaDiv.appendChild(btnIpa)

let h3Ipa = document.createElement("h3");
h3Ipa.innerHTML = "IPA"
ipaDiv.appendChild(h3Ipa);


// SHOW UP BEERS
// GENERAL CONTAINER
let showUpDiv = document.createElement("div");
showUpDiv.setAttribute("class", "showUpDiv");
beerContainer.appendChild(showUpDiv);

// LAGER
let lagerShowUpDiv = document.createElement("div");
lagerShowUpDiv.setAttribute("class", "beersShowUpDiv");
lagerShowUpDiv.setAttribute("id", "lagerShowUpDiv");
showUpDiv.appendChild(lagerShowUpDiv);


// IMAGE
let lagerImageShowUpDiv = document.createElement("div");
lagerImageShowUpDiv.setAttribute("class", "imageShowUpDiv showUpElement");
lagerShowUpDiv.appendChild(lagerImageShowUpDiv);
let lagerImageShowUp = document.createElement("img");
lagerImageShowUp.src = "assets/images/lager.png"
lagerImageShowUpDiv.appendChild(lagerImageShowUp);

// TEXT
let lagerTextShowUpDiv = document.createElement("div");
lagerTextShowUpDiv.setAttribute("class", "textShowUpDiv showUpElement");
let = lagerParagrapherShowup = document.createElement("p");
lagerParagrapherShowup.innerHTML = "Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right."
lagerTextShowUpDiv.appendChild(lagerParagrapherShowup);
lagerShowUpDiv.appendChild(lagerTextShowUpDiv);

// RED ALE
let redAleShowUpDiv = document.createElement("div");
redAleShowUpDiv.setAttribute("class", "beersShowUpDiv");
redAleShowUpDiv.setAttribute("id", "redAleShowUpDiv");
showUpDiv.appendChild(redAleShowUpDiv);


// IMAGE
let redAleImageShowUpDiv = document.createElement("div");
redAleImageShowUpDiv.setAttribute("class", "imageShowUpDiv showUpElement");
redAleShowUpDiv.appendChild(redAleImageShowUpDiv);
let redAleImageShowUp = document.createElement("img");
redAleImageShowUp.setAttribute("class", "redBorder");
redAleImageShowUp.src = "assets/images/red-ale.png"
redAleImageShowUpDiv.appendChild(redAleImageShowUp);

// TEXT
let redAleTextShowUpDiv = document.createElement("div");
redAleTextShowUpDiv.setAttribute("class", "textShowUpDiv showUpElement");
let = redAleParagrapherShowup = document.createElement("p");
redAleParagrapherShowup.innerHTML = "Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right."
redAleTextShowUpDiv.appendChild(redAleParagrapherShowup);
redAleShowUpDiv.appendChild(redAleTextShowUpDiv);

// IPA
let ipaShowUpDiv = document.createElement("div");
ipaShowUpDiv.setAttribute("class", "beersShowUpDiv");
ipaShowUpDiv.setAttribute("id", "lagerShowUpDiv");
showUpDiv.appendChild(ipaShowUpDiv);


// IMAGE
let ipaImageShowUpDiv = document.createElement("div");
ipaImageShowUpDiv.setAttribute("class", "imageShowUpDiv showUpElement");
ipaShowUpDiv.appendChild(ipaImageShowUpDiv);
let ipaImageShowUp = document.createElement("img");
ipaImageShowUp.src = "assets/images/ipa.png"
ipaImageShowUpDiv.appendChild(ipaImageShowUp);

// TEXT
let ipaTextShowUpDiv = document.createElement("div");
ipaTextShowUpDiv.setAttribute("class", "textShowUpDiv showUpElement");
let = ipaParagrapherShowup = document.createElement("p");
ipaParagrapherShowup.innerHTML = "Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right. Lager is one hell of a beer if you make it right."
ipaTextShowUpDiv.appendChild(ipaParagrapherShowup);
ipaShowUpDiv.appendChild(ipaTextShowUpDiv);















// APPEDING DIVS
document.body.appendChild(navBar);
document.body.appendChild(heroDiv);
document.body.appendChild(aboutHeadingDiv);
document.body.appendChild(aboutContainer);
document.body.appendChild(beerHeadingDiv);
document.body.appendChild(beerContainer);