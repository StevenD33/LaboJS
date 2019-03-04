$('#js-show-alert').click(() => {
    $('#js-alert').toggle();
});

$('#js-hide-alert').click(() => {
    $('#js-alert').hide();
});

$('#js-hide-alert').click(() => {
    $('#js-alert').fadeIn();
});

$('#js-hide-alert').click(() => {
    $('#js-alert').fadeOut();
});

$('#js-animation-1')
    .delay(1000)
    .animate({
        left: '300px'
    }, 700)

.animate({
    width: '200px'
},500)

.animate({
    height: '700px'
})