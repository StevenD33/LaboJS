function appendEl(container, el) {
    container.appendChild(el);
}

function createEl(text) {
    console.log('text', text);
    const el = document.createElement('p')
    el.innerText('');
}

