$('#menuToggle').click(function() {
    $('#menuLinks').slideToggle("slow", function() {
        console.log('You toggled the hamburger!');
    });
})

$('#menu').click(function() {
    $('#menuLinks').slideToggle("fast", function() {
        console.log('You chose a menu link!');
    });
})