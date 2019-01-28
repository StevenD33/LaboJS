'use strict';


// user = {
//    name: 'Tata'
//}

//user.name = 'Tata'

//const EARTH_MASS 

let myString = 'Hello world!';
let myNumber = 1.5;
let myBoolean = true; //false 
let myNull = null;
let myUndefined = undefined;


const myObject = {
    name: 'Toto',
    car: {
        color: 'red'
    }

}

let myArray = [1,2,3];

let myNestedArray = [[1,2,3],[2],'Hello'];

// Enchainez (concatenate) deux chaines de caracteres 
console.log('hello' + 'world');
const hello = 'hello'
const world = 'world'
console.log(`conact two strings: ${hello} ${world}`):

//ajoutez 10 et 32 incrémentez le resultar de 8 avec l'opérateur +=.
console.log(10 + 32);
let a = 10 +32;
console.log(a += 8); // a = a + 8 
//Soustrayez 5 de 10. décrémentez le résultat de 5 avec l'opérateur -=.
let b = 10 -5;
b -= 5; 
//Multipliez 5 par 7
let c = 5*7;
c *= 2;

let d = 10/2;
d /= 5;

let test = 5;
console.log('_____');
console.log(test++);
console.log(test);


'3' + '5' // concatenate de chaine de carrac = 35 
'3' * '5' //15 
'hello' + '1' //hello1
'hello' * '1' //NaN 


//Ecrivez en ligne de code un moyen de verifier si 2 est superieur à 1 
console.log(2 < 1); //true
console.log(2>1 ); //false
console.log(20 >= 10); //true
console.log(10 >= 10); //true
console.log(4 !== 6); 
console.log(4 != '4');
console.log(4 !== '4');

console.log('2' !== 2); //false 
console.log('hello' === 'hello'); //true 
console.log('hello' === 'Hello'); //false




//|| (ou)

//&& (et)

if (5 > 0 && 5 < 10){
    console.log('YES');
} else {
    console.log('NO');
}

if (20/2 >= 10 || 20/2 < 15  ){
    console.log('YES')
} else{
    console.log('NO')
}

// can see the group
let isPrivate = false;
let isMember = false;

if (isPrivate === false || isPrivate === true && isMember === true) {
    console.log('can see the group')
} else {
    console.log('cant see the group');
}

let isPrivate = true;
let isMember = false;


let isPrivate = true;
let isMember = true;

const username = prompt('what is your name?');
console.log('username', username);
alert('your value here');
if (username === ""){
    console.log('dont be shy')
} else {
    console.log('salut $username')
}

let isConnect = false;
let Rank = 0;

if (isConnect === false) {
    console.log('veuillez vous connecter')
} else if (isConnect === true && Rank === 0) {
    console.log('vous êtes connecté en tant que standard user')
} else if (isConnect === true && Rank === 1) {
    console.log('vous êtes connecté en tant qu"admin')
} else if (isConnect === true && Rank === 2){
    console.log('vous êtes connecté en tant que super admin')
}



const today == new Date();
const todayDay == today.getDay();

const clientId = 1;
//(condition) ? ... : ...;
(typeof clientId === 'number') ? 
    console.log('Saved') : console.log('Cancel')

function  myFunc() {
    console.log('Hello World!')
}

function returnFunc(text) {
    console.log('text', text)
    return text.toUpperCase();
}

console.log(returnFunc('Hello Worl'));

const sum = (param1 =1, param2=2) => {
    console.log('param1', param1)
    console.log('param2', param2)
    return param1 + param2
}

const sum = (p1, p2) => p1 + p2;
console.log('sum',sum(2));


const truncate = () => {
    
}