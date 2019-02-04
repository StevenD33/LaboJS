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

const myInmg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');

//Ajoutez un attribut alt non vide à l'image.

//Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.

 //   Ajoutez la classe img à l'image.