'use strict';

// Créez un cookie lang égal à 'fr'.

document.cookie= "lang=fr";

//     Créez un cookie previewSeen égal à true qui va expirer le lendement.

document.cookie = `lang=fr;expires=${new Date('2019-05-12')}`;

//     Créez un cookie test égal à 'test' qui va expirer le 31 décembre 2019.

docCookies.setItem('test','test',new Date('2019-12-31'));


// Créez un cookie userId égal à 123
docCookies.setItem('userId', 123, new Date('2019-12-31'));


// Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
docCookies.setItem('userId', 123);
console.log(typeof docCookies.getItem('userId'))

// Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId', 321);


console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userId'));

docCookies.setItem('testObject', JSON.stringify({id: 1}))

const myObj = docCookies.getItem();
console.log('myObj',myObj);
console.log('myObj parsed', JSON.parse(myObj));
// Supprimez le cookie test.

docCookies.removeItem('test')
docCookies.setItem('test','',new Date('2000-01-01'));

// Vérifiez si l'objet LocalStorage est supporté par le navigateur.

if (localStorage) {
    localStorage.setItem('greeting', 'Hello world!');

    localStorage.setItem('addId',JSON.stringify({top: 1, bottom: 2}));

    console.log(localStorage.getItem('greeting'));
};

// Créez une entrée greeting égale à 'Hello World'. Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}. Récupérez greeting. Modifiez cette entrée à 'Welcome'. Supprimez greeting du LocalStorage.
//
// Ajoutez les entrées test1, test2, test3, test4 dans l'objet LocalStorage. Supprimez toutes les données du LocalsStorage d'un coup.

