


// Créez un bouton dans votre HTML. Ajoutez-lui un écouteur d'événements côté JavaScript. Si le bouton est cliqué, loggez 'Clicked!'. Loggez également l'événement passé et explorez ces propriétés.


const btn = document.querySelector('#js-btn');
btn.addEventListener('click', (event) => {
    console.log('clicked');
});

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
//     Créez un bouton gris. S'il est cliqué, passez sa couleur en vert. S'il est cliqué à nouveau, repassez sa couleur en gris. Gérez les couleurs côté JavaScript.
let isClickedTwice = false
const grayBtn = document.querySelector('#js-gray-btn');
grayBtn.addEventListener('click',() => {
    isClickedTwice = !isClickedTwice;
    if (isClickedTwice) {
        grayBtn.style.backgroundColor = 'green';
    } else  {
        grayBtn.style.backgroundColor = 'gray';
    }

});

//     Faites la même chose en utilisant des classes css.

const hoveredBtn = document.querySelector('#hover-btn');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
});
hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'inherit';
});

const myForm = document.querySelector('#js-form');
const myInput = document.querySelector('#js-text');
myInput.addEventListener('keyup',() =>{
    console.log('input value : ', myInput.value);
});

myForm.addEventListener('submit',(event) => {
    event.preventDefault();
    alert(myInput.value);
});

//     Si le div a été cliqué deux fois d'affilé, loggez 'Double click event is catched'.
//
// Créez un div rose. Si on le survole, il passe en rouge. Si on sort le curseur du div, il redevient rose.
//
//     Créez un bouton bleu. Il devient violet quand une touche de la souris est appuyée sur le bouton. Il devient rouge quand la touche de la souris est relâché.
//
//     Créez un bouton, associez-lui un événement click. Si ce bouton a été cliqué trois fois, enlevez l'écouteur d'événement.
//
//     Créez 20 boutons (côté JavaScript bien sûr!). Chaque bouton loggue 'Button number $son_numéro_de_1_à_20 has been clicked' s'il a été cliqué.