// Exeptionally comments are in French this time

// La méthode de BOM - XMLHttpRequest - est instanciée
var xhttp = new XMLHttpRequest();
// onreadystatechange est appelé de manière asynchrone et sera déclenché à chaque changement du statut de l'objet "XMLHttpRequest" (comme un écouteur d'événement)
xhttp.onreadystatechange = () => {
    /*
    Si l'état de "XMLHttpRequest" est égal à 4 (4 signifie "DONE"). Voir tous les statuts: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    Et si le statut la requête est égal à 200 (Ok / réussite)
    */
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        // procédez à un traitement de la réponse
        console.log(xhttp)
        console.log(xhttp.responseText)
    }
};
// La méthode "open" crée la requête
xhttp.open('GET', 'url', true);
// Quand le traitement de la requête est terminé, la méthode "send" envoie la requête
xhttp.send();



let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 & xhttp.status == 200) {
        const rawValue = xhttp.responseText;
        const parsedValue = JSON.parse(rawValue);

        const hanSoloInfo = document.createElement('div');
        hanSoloInfo.innerHTML = `
        <p>Nom: ${parsedValue.name}</p>
        <p>Sexe: ${parsedValue.gender}</p>
        <p>Date de naissance: ${parsedValue.birth_year}</p>
        `
        document.body.appendChild(hanSoloInfo);
    }
}





// Récupérez et affichez les données de 5 planètes avec les ids suivants:
//          ==>         const planets = [1, 2, 3, 4, 5];

const planets = [1, 2, 3, 4, 5];

var xhttp3 = new XMLHttpRequest();
xhttp3.onreadystatechange = () => {
    if (xhttp3.readyState == 4 && xhttp3.status == 200) {
        console.log('salut');
        const rawValue = xhttp3.responseText;
        const parsedValue = JSON.parse(rawValue);

        const info = document.createElement('div');
        info.innerHTML= `
        <hr>
        <p>Nom: ${parsedValue.name}</p>
        <p>Diametre: ${parsedValue.diametre}</p>
      `
        document.body.appendChild(info);
    }
};
planets.forEach(planet => {
    console.log(planet);
    xhttp3.open('GET', `https://swapi.co/api/planets/${planet}/`, true)
})
xhttp3.send();



const myprms = () => {
    return new Promise((resolve, reject) => {

    })
}

myprms(7)



fetch("https://jsonplaceholder.typicode.com/posts/25")
.then(reponse => reponse.json())
.then(resul)


const signupData = {
    email: 'test@ynov.com',
    password: 'root',
    lastname : 'toto'
}

fetch('https://reqres.in/api/register', {
    method : 'POST',
    body : JSON.stringify(signupData),
    headers: {
        'Content-Type': 'application/json'
    }
})

.then(reponse => reponse.json())
.then(result => console.log('result',result));