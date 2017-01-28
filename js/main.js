$('.js-auth-open').on('click', function(){
    $('body').addClass('modal-open');
});

$('.modal-popup .close, .modal-popup .modal-bg').on('click', function(){
    $('body').removeClass('modal-open');
});

