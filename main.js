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