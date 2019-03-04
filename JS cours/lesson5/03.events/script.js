
let counter = 0;
$('#js-btn').click(() => {
    counter++;
    if (counter > 4) {
        $('#js-btn').off('click');

    }
    console.log('counter', counter);
})




$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green')
})

$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue')
})







function changeBgColor(color) {
    $('#js-hovered').css('background-color', color);
}

$('#js-tooltip-wrapper').mouseenter(() => {
    $('#js-tooltip').css('display', 'block')
})

$('#js-tooltip-wrapper').mouseleave(() => {
    $('#js-tooltip').css('display', 'none')
})
