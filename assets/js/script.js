//NAVBAR

let navBarDiv = document.createElement("div");
navBarDiv.setAttribute("id", "navbar-container");

let navBar = document.createElement("nav")
navBarDiv.appendChild(navBar);

let charlieName = document.createElement("a");
charlieName.setAttribute("class", "charlieName");
charlieName.setAttribute('href',"#");
charlieName.innerHTML = "charlie brew"
navBar.appendChild(charlieName);


let navBarUL = document.createElement("ul");
navBarUL.setAttribute("class", "navLinks")

// HOME BUTTON
let homeItem = document.createElement("li");
homeItem.setAttribute("class", "navBarItem");
let homeAnchor = document.createElement('a');
homeAnchor.setAttribute('href',"#");
homeAnchor.innerHTML = "home";
homeItem.appendChild(homeAnchor);
navBarUL.appendChild(homeItem);

// ABOUT BUTTON
let aboutItem = document.createElement("li");
aboutItem.setAttribute("class", "navBarItem");
let aboutAnchor = document.createElement('a');
aboutAnchor.setAttribute('href',"#about");
aboutAnchor.innerHTML = "about";
aboutItem.appendChild(aboutAnchor);
navBarUL.appendChild(aboutItem);

// LOGO
let logoItem = document.createElement("li");
let logoAnchor = document.createElement('a');
logoAnchor.setAttribute('href',"#");
let navBarImg = document.createElement("img");
navBarImg.setAttribute("id", "logo");
navBarImg.src = "assets/images/logo2.png"
logoAnchor.appendChild(navBarImg);
logoItem.appendChild(logoAnchor);
navBarUL.appendChild(logoItem);

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.width = "80px"
        document.getElementById("logo").style.height = "80px"
    } else {
        document.getElementById("logo").style.width = "140px"
        document.getElementById("logo").style.height = "140px"
    }
}


// BEERS BUTTON
let beersItem = document.createElement("li");
beersItem.setAttribute("class", "navBarItem");
let beersAnchor = document.createElement('a');
beersAnchor.setAttribute('href',"#beers");
beersAnchor.innerHTML = "beers";
beersItem.appendChild(beersAnchor);
navBarUL.appendChild(beersItem);

// CONTACT BUTTON
let contactItem = document.createElement("li");
contactItem.setAttribute("class", "navBarItem");
let contactAnchor = document.createElement('a');
contactAnchor.setAttribute('href',"#contact");
contactAnchor.innerHTML = "contact";
contactItem.appendChild(contactAnchor);
navBarUL.appendChild(contactItem);

// UNORDER LIST TO NAVBAR
navBar.appendChild(navBarUL);



// HERO IMAGE
let heroDiv = document.createElement("div");
heroDiv.setAttribute("id", "hero-img")
let img1 = document.createElement("img");
img1.src = "assets/images/img1.png";
heroDiv.appendChild(img1);
let img2 = document.createElement("img");
img2.src = "assets/images/img2.png";
heroDiv.appendChild(img2);
let img3 = document.createElement("img");
img3.src = "assets/images/img3.png";
heroDiv.appendChild(img3);
let img4 = document.createElement("img");
img4.src = "assets/images/img4.png";
heroDiv.appendChild(img4);
let img5 = document.createElement("img");
img5.src = "assets/images/img5.png";
heroDiv.appendChild(img5);
/*/
  window.addEventListener("DOMContentLoaded", function(e) {

    var heroImg = document.getElementById("hero-img");
    var fadeComplete = function(e) { heroImg.appendChild(arr[0]); };
    var arr = heroImg.getElementsByTagName("img");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);
*/
// BURGUER 

let burguerDiv = document.createElement("div");
burguerDiv.setAttribute("class", "burguer");
navBar.appendChild(burguerDiv);

let line1Div = document.createElement("div");
line1Div.setAttribute("class", "line1");
burguerDiv.appendChild(line1Div);
let line2Div = document.createElement("div");
line2Div.setAttribute("class", "line2");
burguerDiv.appendChild(line2Div);
let line3Div = document.createElement("div");
line3Div.setAttribute("class", "line3");
burguerDiv.appendChild(line3Div);



let introHide = document.createElement("div");
introHide.setAttribute("class", "intro");
let introText = document.createElement("div");
introText.setAttribute("class", "intro-text");
introHide.appendChild(introText);

let hide1 = document.createElement("h1");
hide1.setAttribute("class", "hide");
introText.appendChild(hide1);
let hide2 = document.createElement("h1");
hide2.setAttribute("class", "hide");
introText.appendChild(hide2);
let hide3 = document.createElement("h1");
hide3.setAttribute("class", "hide");
introText.appendChild(hide3);


let textSpan1 = document.createElement("span");
textSpan1.setAttribute("class", "text");
let textSpan2 = document.createElement("span");
textSpan2.setAttribute("class", "text");
let textSpan3 = document.createElement("span");
textSpan3.setAttribute("class", "text");
textSpan1.innerHTML = "Welcome"
textSpan2.innerHTML = "to the"
textSpan3.innerHTML = "Charlie Brew"
hide1.appendChild(textSpan1);
hide2.appendChild(textSpan2);
hide3.appendChild(textSpan3);

let h1Paragrapher = document.createElement("p");
h1Paragrapher.setAttribute("class", "hide");
introText.appendChild(h1Paragrapher);
let slider = document.createElement("div");
let textSpan4 = document.createElement("span");
textSpan4.setAttribute("class", "text");
textSpan4.innerHTML = "Where the beer is served colder than your ex's heart"
h1Paragrapher.appendChild(textSpan4);


slider.setAttribute("class", "slider");


// ABOUT HEADING
let aboutHeadingDiv = document.createElement("div");
aboutHeadingDiv.setAttribute("class", "containerHeading");

let aboutHeading = document.createElement("h2");
aboutHeading.innerHTML = "about";
aboutHeadingDiv.appendChild(aboutHeading);

// ABOUT CONTAINER
let aboutContainer = document.createElement("div");
aboutContainer.setAttribute("class", "containerAbout");

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
pubTextDiv.setAttribute("id", "pubText")
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
ourPeopleImageDiv.setAttribute("id", "ourPeopleImg")
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
beerHeadingDiv.setAttribute("class", "containerHeading");


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

let btnLager = document.createElement("button");
btnLager.setAttribute("class", "btn");
btnLager.setAttribute("id", "btnLager");
lagerDiv.appendChild(btnLager)

let h3lager = document.createElement("h3");
h3lager.innerHTML = "Lager"
lagerDiv.appendChild(h3lager);

// RED ALE CONTAINER
let redAleDiv = document.createElement("div");
redAleDiv.setAttribute("class", "btnDiv");
redAleDiv.setAttribute("id", "redAleDiv");
beerButtonsContainer.appendChild(redAleDiv);

let btnRedAle = document.createElement("button");
btnRedAle.setAttribute("class", "btn");
btnRedAle.setAttribute("id", "btnRedAle");
redAleDiv.appendChild(btnRedAle)

let h3RedAle = document.createElement("h3");
h3RedAle.innerHTML = "Red Ale"
redAleDiv.appendChild(h3RedAle);

// IPA CONTAINER
let ipaDiv = document.createElement("div");
ipaDiv.setAttribute("class", "btnDiv");
ipaDiv.setAttribute("id", "ipaDiv");
beerButtonsContainer.appendChild(ipaDiv);

let btnIpa = document.createElement("button");
btnIpa.setAttribute("class", "btn");
btnIpa.setAttribute("id", "btnIpa");
ipaDiv.appendChild(btnIpa)

let h3Ipa = document.createElement("h3");
h3Ipa.innerHTML = "IPA"
ipaDiv.appendChild(h3Ipa);


// SHOW UP BEERS
// GENERAL CONTAINER
let showUpDiv = document.createElement("div");
showUpDiv.setAttribute("class", "showUpDiv");
beerContainer.appendChild(showUpDiv);

// TASTE TRAY CONTAINER

let tasteShowUpDiv = document.createElement("div");
tasteShowUpDiv.setAttribute("class", "beersShowUpDiv");
tasteShowUpDiv.setAttribute("id", "tasteShowUpDiv");
showUpDiv.appendChild(tasteShowUpDiv);


// IMAGE
let tasteImageShowUpDiv = document.createElement("div");
tasteImageShowUpDiv.setAttribute("class", "imageShowUpDiv showUpElement");
tasteShowUpDiv.appendChild(tasteImageShowUpDiv);
let tasteImageShowUp = document.createElement("img");
tasteImageShowUp.src = "assets/images/taste-tray.png"
tasteImageShowUpDiv.appendChild(tasteImageShowUp);

// TEXT
let tasteTextShowUpDiv = document.createElement("div");
tasteTextShowUpDiv.setAttribute("class", "textShowUpDiv showUpElement");
let = tasteParagrapherShowup = document.createElement("p");
tasteParagrapherShowup.innerHTML = "Charlie Brew Brewery counts with an amazing selection of beers, which are made on house. The pub also has a few guests beer, which is changed every other week.  Although every beer produced by Charlie Brew has a unique flavor, we have our three queens. The wild IPA, the brave Red Ale, and the elegant larger."
tasteTextShowUpDiv.appendChild(tasteParagrapherShowup);
tasteShowUpDiv.appendChild(tasteTextShowUpDiv);

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
lagerParagrapherShowup.innerHTML = "Lager is one hell of a beer if(that is a big if) you make it right. That is the reason why the Charlie Brew Lager is so special. It is made carefully and with all love of the world. Every detail matters in the process. The Charlie Brew's customers use to say if the IPA and Red Ale are queens, the Charlie Brew Lager is a god.  Stop wasting your time right and, there is a god here waiting for you."
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
redAleImageShowUp.setAttribute("id", "redBorder");
redAleImageShowUp.src = "assets/images/red-ale.png"
redAleImageShowUpDiv.appendChild(redAleImageShowUp);

// TEXT
let redAleTextShowUpDiv = document.createElement("div");
redAleTextShowUpDiv.setAttribute("class", "textShowUpDiv showUpElement");
let = redAleParagrapherShowup = document.createElement("p");
redAleParagrapherShowup.innerHTML = "The Charlie Brew Red Ale uses a moderate amount of kilned malts and roasted barley in the recipe, which gives the beer the color for which it is named. Featuring an approachable hop bitterness which rests on the palate, this typically amber-colored beer is brewed as a lager or an ale, and can often have a medium, candy-like caramel malt sweetness."
redAleTextShowUpDiv.appendChild(redAleParagrapherShowup);
redAleShowUpDiv.appendChild(redAleTextShowUpDiv);

// IPA
let ipaShowUpDiv = document.createElement("div");
ipaShowUpDiv.setAttribute("class", "beersShowUpDiv");
ipaShowUpDiv.setAttribute("id", "ipaShowUpDiv");
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
ipaParagrapherShowup.innerHTML = "Our IPA is way more complex than you assume. The Charlie Brew IPA is a modern transformation of the New England Ipa. Our secret? The beer is fresh, simple like that. Different from other types of beer, an IPA has to be as fresh as possible.  So pop in and drink the best IPA you ever drink right off the tanks."
ipaTextShowUpDiv.appendChild(ipaParagrapherShowup);
ipaShowUpDiv.appendChild(ipaTextShowUpDiv);


// CONTACT
//CONTACT HEADING
let contactHeadingDiv = document.createElement("div");
contactHeadingDiv.setAttribute("class", "containerHeading");


let contactHeading = document.createElement("h2");
contactHeading.innerHTML = "contact";
contactHeadingDiv.appendChild(contactHeading);

//CONTACT CONTAINER
let contactContainer = document.createElement("div");
contactContainer.setAttribute("class", "containercontact");

//FORM
let form = document.createElement("form")
contactContainer.appendChild(form);
form.setAttribute("id", "contactForm ");
form.setAttribute("onsubmit", "return sendMail(this);")

//FIRST NAME
let labelfName = document.createElement("label");
labelfName.setAttribute("for", "fname");
labelfName.innerHTML = "First Name:"
form.appendChild(labelfName);
let inputfName = document.createElement("input");
inputfName.setAttribute("class", "textInput");
inputfName.setAttribute("id", "fname");
inputfName.setAttribute("name", "fname");
inputfName.setAttribute("type", "text");
inputfName.setAttribute("placeholder", "First Name");
form.appendChild(inputfName);

//LAST NAME
let labellName = document.createElement("label");
labellName.setAttribute("for", "name");
labellName.innerHTML = "Last Name:"
form.appendChild(labellName);
let inputlName = document.createElement("input");
inputlName.setAttribute("class", "textInput");
inputlName.setAttribute("id", "lname");
inputlName.setAttribute("name", "lname");
inputlName.setAttribute("type", "text");
inputlName.setAttribute("placeholder", "Last Name");
form.appendChild(inputlName);

//LAST NAME
let labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "email");
labelEmail.innerHTML = "Email Adress:"
form.appendChild(labelEmail);
let inputEmail = document.createElement("input");
inputEmail.setAttribute("class", "textInput");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "Email Adress");
form.appendChild(inputEmail);

//MESSAGE
let labelMessage = document.createElement("label");
labelMessage.setAttribute("for", "message");
labelMessage.innerHTML = "Your message:"
form.appendChild(labelMessage);
let textArea = document.createElement("textarea");
textArea.setAttribute("class", "textInput");
textArea.setAttribute("id", "message");
textArea.setAttribute("name", "message");
textArea.setAttribute("rows", "5");
textArea.setAttribute("placeholder", "Let us if you have any request, suggestions or doubt");
form.appendChild(textArea);

//BUTTON
let inputButtom = document.createElement("input");
inputButtom.setAttribute("id", "buttonForm");
inputButtom.setAttribute("type", "submit");
inputButtom.setAttribute("value", "Submit");
form.appendChild(inputButtom);

//----------------------------------------------MODAL

let modalEmail = document.createElement("div");
modalEmail.setAttribute("id", "modalEmail");
modalEmail.setAttribute("class", "modal-container");
let modalDiv = document.createElement("div");
modalDiv.setAttribute("class", "modal");
modalEmail.appendChild(modalDiv);
let modalText = document.createElement("p");
modalText.innerHTML = "Thank you for contacting us. Charlie Brew team will contact you soon."
modalDiv.appendChild(modalText);
let closeModal = document.createElement("button");
closeModal.setAttribute("class", "close");
closeModal.setAttribute("type", "text");
closeModal.innerHTML = "X"
modalDiv.appendChild(closeModal);




//MAP
let mapDiv = document.createElement("div");
mapDiv.setAttribute("id", "map");
contactContainer.appendChild(mapDiv);


//FOOTER
let footer = document.createElement("footer")

let footerDiv = document.createElement("div");
footerDiv.setAttribute("class", "footerDiv");
footer.appendChild(footerDiv);

let social = document.createElement("div");
social.setAttribute("class", "social");
footer.appendChild(social)

// UNORDER LIST
let footerList = document.createElement("ul");
footerDiv.appendChild(footerList);

//FACEBOOK
let facebookItem = document.createElement("li");
let facebookAnchor = document.createElement("a");
facebookAnchor.setAttribute("href", "http://www.facebook.com.br")
facebookAnchor.setAttribute("target", "_blank")
let iconFacebook = document.createElement("i");
iconFacebook.setAttribute("class", "fab fa-facebook")
facebookAnchor.appendChild(iconFacebook);
facebookItem.appendChild(facebookAnchor);
footerList.appendChild(facebookItem);

//INSTAGRAM
let instagramItem = document.createElement("li");
let instagramAnchor = document.createElement("a");
instagramAnchor.setAttribute("href", "http://www.instagram.com.br")
instagramAnchor.setAttribute("target", "_blank")
let iconInstagram = document.createElement("i");
iconInstagram.setAttribute("class", "fab fa-instagram")
instagramAnchor.appendChild(iconInstagram);
instagramItem.appendChild(instagramAnchor);
footerList.appendChild(instagramItem);

//TWITTER
let twitterItem = document.createElement("li");
let twitterAnchor = document.createElement("a");
twitterAnchor.setAttribute("href", "http://www.twitter.com.br")
twitterAnchor.setAttribute("target", "_blank")
let iconTwitter = document.createElement("i");
iconTwitter.setAttribute("class", "fab fa-twitter")
twitterAnchor.appendChild(iconTwitter);
twitterItem.appendChild(twitterAnchor);
footerList.appendChild(twitterItem);

// MODAL OVER AGE
let overAgeModal = document.createElement("div");
overAgeModal.setAttribute("class", "modalOverAgeContainer");
overAgeModal.setAttribute("id", "modalOverAge");
let overAgeModalDiv = document.createElement("div");
overAgeModalDiv.setAttribute("class", "modal1")
overAgeModal.appendChild(overAgeModalDiv);
let = overAgeText = document.createElement("h2");
overAgeText.innerHTML = "Are you over 18?"
overAgeModalDiv.appendChild(overAgeText);
let buttonsDiv = document.createElement("div");
overAgeModalDiv.appendChild(buttonsDiv);
let buttonYes = document.createElement("button");
buttonYes.setAttribute("class", "buttonModal overAge");
buttonYes.setAttribute("id", "buttonYes");
buttonYes.innerHTML = "Yes";
buttonsDiv.appendChild(buttonYes);
let buttonNo = document.createElement("button");
buttonNo.setAttribute("class", "buttonModal");
buttonNo.setAttribute("id", "buttonNo");
buttonNo.setAttribute("href", "https://www.helpguide.org/articles/addictions/underage-drinking.htm")
buttonNo.innerHTML = "No"
buttonsDiv.appendChild(buttonNo);




// APPEDING DIVS TO BODY
document.body.appendChild(navBarDiv);

let section1 = document.createElement("section")
let section2 = document.createElement("section")
let section3 = document.createElement("section")
let section4 = document.createElement("section")
section1.setAttribute("id", "hero");
section2.setAttribute("id", "about");
section3.setAttribute("id", "beers");
section4.setAttribute("id", "contact");




section1.appendChild(heroDiv);
section1.appendChild(introHide);
section1.appendChild(slider);
section2.appendChild(aboutHeadingDiv);
section2.appendChild(aboutContainer);
section3.appendChild(beerHeadingDiv);
section3.appendChild(beerContainer);
section4.appendChild(contactHeadingDiv);
section4.appendChild(contactContainer);


document.body.appendChild(section1);
document.body.appendChild(section2);
document.body.appendChild(section3);
document.body.appendChild(section4);

document.body.appendChild(footer);
document.body.appendChild(modalEmail);
document.body.appendChild(overAgeModal);


document.getElementById("buttonYes").addEventListener('click', () => {
    document.querySelector('.modalOverAgeContainer').style.display = "none";
})

document.getElementById("buttonNo").addEventListener('click', () => {
    window.open("https://www.helpguide.org/articles/addictions/underage-drinking.htm");
})



//BUTTONS BEER APPAER/DESAPPEAR

let pickLager = document.getElementById("lagerDiv");
let choseLager = document.getElementById("lagerShowUpDiv");
let pickRedAle = document.getElementById("redAleDiv");
let choseRedAle = document.getElementById("redAleShowUpDiv");
let pickIpa = document.getElementById("ipaDiv");
let choseIpa = document.getElementById("ipaShowUpDiv");
let choseTaste = document.getElementById("tasteShowUpDiv");
let lagerBlackWhite = document.getElementById("btnLager");
let RedAleBlackWhite = document.getElementById("btnRedAle");
let IpaBlackWhite = document.getElementById("btnIpa");

pickLager.addEventListener("click", () => {
    choseLager.style.display = "flex";
    choseRedAle.style.display = "none";
    choseIpa.style.display = "none";
    choseTaste.style.display = "none";
    lagerBlackWhite.style.position = "revert";
    RedAleBlackWhite.style.position = "relative";
    IpaBlackWhite.style.position = "relative";
});

pickRedAle.addEventListener("click", () => {
    choseRedAle.style.display = "flex";
    choseLager.style.display = "none";
    choseIpa.style.display = "none";
    choseTaste.style.display = "none";
    lagerBlackWhite.style.position = "relative";
    RedAleBlackWhite.style.position = "revert";
    IpaBlackWhite.style.position = "relative";
});

pickIpa.addEventListener("click", () => {
    choseIpa.style.display = "flex";
    choseLager.style.display = "none";
    choseRedAle.style.display = "none";
    choseTaste.style.display = "none";
    lagerBlackWhite.style.position = "relative";
    RedAleBlackWhite.style.position = "relative";
    IpaBlackWhite.style.position = "revert";
});

const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.navLinks');
    const cucu = document.querySelector('.navBarItem');

    burguer.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })

    nav.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    })
}

navSlide();

const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to(".text", { y: "0%", duration: 1.5, delay: 1.0, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1.0 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav, .modalOverAgeContainer", { opacity: 0 }, { opacity: 1, duration: 1 });