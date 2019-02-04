//Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.

const myDivs = document.getElementsByTagName('div');
console.log('myDivs', myDivs);
const myDivs2 = document.querySelectorAll('div');
console.log('myDivs2 > first', myDivs2[0]);

//Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.

const myParagraphs = document.getElementsByClassName('my-paragraph');
console.log('myParagraphs', myParagraphs);
const myParagraphs2 = document.querySelectorAll('.my-paragraph');
console.log('my-Paragraphs2',myParagraphs2);


//Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element

const myUniqueEl = document.getElementById('js-unique-el');
console.log('myUniqueEl', myUniqueEl);
const myUniqueEl2 = document.querySelector('#js-unique-el');
console.log

//Trouvez toutes les balises p qui se trouvent dans un div.

const myParagraphsInDivs = document.querySelectorAll('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs);
   // Trouvez toutes les balises span qui sont précédées par un div.

const spansPreceededByDivs = document.querySelectorAll('div+span');
console.log('spansPreceededByDivs', spansPreceededByDivs);


//joutez le texte 'I am the first paragraph' au premier paragraphe du document.

const firstP = document.querySelector('p');
firstP.innerText = 'I am the fisrt paragraph';
console.log('firstP > text', firstP.innerText);

//Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.

const secondP = document.querySelectorAll('.second-p');
secondP[0].innerHTML = '<span>Hello</span>';
console.log('secondP > html', secondP[0].innerHTML);

//Modifiez les attributs width à 50% et height à 'auto' de l'image.

const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');

//Ajoutez un attribut alt non vide à l'image.

myInmg.setAttribute('alt', 'Random Image');


//Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.

firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

 //   Ajoutez la classe img à l'image.

myImg.className = 'my-img'; // myImg.className += 'another-class'
myImg.classList.add('my-img');
myImg.classList.remove('my-img');


const parent = document.querySelector('div');
console.log('parent', parent);
const nodeToDelete = document.querySelector('div p');
console.log('nodeToDelete', nodeToDelete);
parent.removeChild(nodeToDelete);

// Créez un div et insérez le dans la balise body.
//
//     Créez une balise ul avec 5 li dedans et insérez la dans un div dans body. N'hésitez pas à utiliser la boucle for pour ne pas répéter la même ligne de code 5 fois.

const myBody = document.querySelector('body');
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello!';
myBody.appendChild(newDiv);
myBody.prepend(newDiv);

myBody.appendChild(anotherDiv);
anotherDiv.innerText = 'First Child';
anotherDiv.style.color = 'red';
myBody.prepend(anotherDiv);
