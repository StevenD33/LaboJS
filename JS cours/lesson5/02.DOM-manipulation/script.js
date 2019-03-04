
// Récupérez et logguez dans la console le contenu du titre de la page.

const title = $('h1');


console.log('title', title);


//     Changez le contenu du titre de la page à 'My page title'.

$('h1').text('my page title');
////     Récupérez et logguez dans la console le HTML de l'article.

const articleContent = $('#js-article').html();
console.log('articleContent', articleContent);



// Changez le contenu de l'article à


$('#js-article').html(`<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>`);


const inputValue = $('#js-search2').val();
console.log('inputValue', inputValue);

$('#js-search').val('Beagles');

// Changez la valeur du placeholder du champ de saisie à 'Search'
$('#js-search-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const inputButton = $('input#js-search').val();
    if (inputButton == 'chat' || inputButton == 'Chat') {
        $("#js-search-result").html(`<p>Miaou!</p>`);
    } else {
        $("#js-search-result").html(`<p>Nous n'avons pas trouvé votre recherche <strong>${inputButton}</strong>.</p>`);

    }
    ;
})



$('#js-btn')[0].addEventListener('click', () => {
    $('#js-alert').toggleClass('alert-success')
})

console.log($('#js-btn').css('background-color'));

$('#js-btn').css('background-color', '#71b8af');

$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '100%'
});






