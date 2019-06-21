/* full screen modal pop up when clicking on project card */

function fullModal() {
    $('.quizCard').on('click', function() {
        $('.quizCard').addClass('modal-show');
    });
};


/* hamburger animation */
function hamburgerMenu() {
    $(".exit").hide();
    $(".js-menu").hide();
    $(document).on('click', '.hamburgerIcon', (function() {
        $(".js-menu").slideToggle("slow", function() {
            $(".hamburgerIcon").hide();
            $(".exit").show();
        });
    }));

    $(document).on('click', '.exit', (function() {
        $(".js-menu").slideToggle("slow", function() {
            $(".exit").hide();
            $(".hamburgerIcon").show();
        });
    }));

};

function render() {
    hamburgerMenu();
}