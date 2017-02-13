$('.js-auth-open').on('click', function(){
    $('body').addClass('modal-open');
});

$('.modal-popup .close, .modal-popup .modal-bg').on('click', function(){
    $('body').removeClass('modal-open');
});

/**
 * Init Skills search
 */
$(document).ready(function(){
    $('input.autocomplete').autocomplete({
        data: {
            "CSS": null,
            "HTML": null,
            "Git": 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png'
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    });
});

$(document).ready(function() {
    $('select').material_select();
});

