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


