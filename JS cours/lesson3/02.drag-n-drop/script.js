// 'use strict';
//
// const dropTo = document.querySelector('#js-drop-to');
// const myDraggable = document.querySelector('#js-draggable');
//
// myDraggable.addEventListener('dragstart', e => {
//     console.log('e', e);
//     event.dataTransfer.setData('text', event.target.id);
//
// });
//
//     dropTo.addEventListener('dragover', event => {
//         event.preventDefault();
//     });
//
//     dropTo.addEventListener('drop', event => {
//         event.preventDefault();
//         const data =event.dataTransfer.getData('text');
//         const el = document.getElementById(data);
//         event.target.appendChild(el);
//     })

'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg']; //format accepté
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb taille max
const dropZone = document.querySelector('#js-drop-to'); //zone de drop
const filesList = document.querySelector('#js-file-list'); // liste des fichier

dropZone.addEventListener('USE_CORRECT_EVENT_HERE', (e) => onDragOver(e)); // lorsque l'on drag dans la zone
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', (e) => onDrop(e)); // lorsque l'on drop
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(true)); //changement d'état de la zone de drop
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(false)); // changement d'état de la zone de drop

function onDragOver(event) { //fonction lorsqu'on drag over
    event.stopPropagation();
    event.preventDefault();
}

function onDrop(e) { //fonction qui gere le ondrop
    e.stopPropagation();
    e.preventDefault();
    filesList.innerHTML = '';
    const filesUploaded = Array.from(e.dataTransfer.files);
    filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
    changeDropZoneState(false);
}

function changeDropZoneState(isDragging) { //changement d'état de la zone
    isDragging ?
        dropZone.classList.add('js-is-dragged-over') :
        dropZone.classList.remove('js-is-dragged-over');
}

function handleUploadedFile(file, index) { //fonction error format image ou echec upload
    const error = getUploadError(file);
    error ?
        console.warn(`"${file.name}" Upload Error: ${error}`) :
        filesList.appendChild(createListEl(file, index));
}

function createListEl(file, index) { // liste avec les rendu qui sont crée
    const el = document.createElement('li');
    el.setAttribute('id', 'file-list-item-'+index);
    el.className = 'list-group-item file-list-item';

    // add image
    const elPreview = document.createElement('img');
    elPreview.classList.add('file-list-item-preview');
    el.appendChild(elPreview);
    renderImage(file, 'file-list-item-'+index);

    // add name
    const elName = document.createElement('p'); //création d'élément
    elName.classList.add('file-list-item-name');
    elName.innerText = file.name;
    el.appendChild(elName);

    return el;
}

function renderImage(file, elId) { //rendu des images
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = document.querySelector(`#${elId} img`);
        img.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(file);
}

function getUploadError(file) {  //erreur en cas d'un fichier incorrect
    if (file.size > MAX_IMG_SIZE) {
        return 'Your image is too big';
    } else if (!ACCEPTED_FORMATS.includes(file.type)) {
        return 'Image of this format is not accepted';
    } else {
        return;
    }
}
