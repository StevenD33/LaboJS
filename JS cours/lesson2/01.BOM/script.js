// function appendEl(container, el) {
//     container.appendChild(el);
// }
//
// function createEl(text) {
//     console.log('text', text);
//     const el = document.createElement('p')
//     el.innerText('');
// }
const myBody = document.querySelector('body');
const newH = document.createElement('h1');
newH.innerText = 'Browser Object Model';
myBody.prepend(newH);

const anotherH = document.createElement('h2');
anotherH.innerText = 'Navigator'
myBody.appendChild(anotherH);

const Name = document.createElement('p');
Name.innerText = 'Nom de navigateur : ' + window.navigator.appName
myBody.appendChild(Name);


// Affichier la langue du nav

const langue = document.createElement('p');
langue.innerText = 'Langue : ' + window.navigator.language
myBody.appendChild(langue);



// Affiche la plateform

const plat = document.createElement('p');
plat.innerText = 'Plateforme : ' + window.navigator.platform
myBody.appendChild(plat);


// Affiche si les cookie sont activés

const cookie = document.createElement('p');
cookie.innerText = 'Cookies : ' + window.navigator.cookieEnabled
myBody.appendChild(cookie);

const Screen = document.createElement('h2');
Screen.innerText = 'Screen'
myBody.appendChild(Screen);


// Afficher la largeur de l'écran de votre ordinateur

const ScreenWidth = document.createElement('p');
ScreenWidth.innerText = 'Largeur Ecran : ' + screen.width
myBody.appendChild(ScreenWidth);


const ScreenLength = document.createElement('p');
ScreenLength.innerText = 'Hauteur Ecran : ' + screen.length
myBody.appendChild(ScreenLength);


const ScreenOrientation = document.createElement('p');
ScreenOrientation.innerText = 'Orientation : ' + window.screen.orientation
myBody.appendChild(ScreenOrientation);

const Window = document.createElement('h2');
Window.innerText = 'Window'
myBody.appendChild(Window);

const windowWidth = document.createElement('p');
windowWidth.innerText = 'WindowWidth : ' + window.innerWidth;
myBody.appendChild(windowWidth);


const windowHeight = document.createElement('p');
windowHeight.innerText = 'WindowHeight: ' + window.innerHeight;
myBody.appendChild(windowHeight);



const navigatorWidth = document.createElement('p');
navigatorWidth.innerText = 'navigatorWidth: ' + outerWidth;
myBody.appendChild(navigatorWidth);



const navigatorHeight = document.createElement('p');
navigatorHeight.innerText = ': ' +'navigatorHeight' + outerHeight;
myBody.appendChild(navigatorHeight);


// const location = document.createElement('p');
// location.innerText = 'location: ' + location;
// myBody.appendChild(location);