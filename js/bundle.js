var $ = require('jquery');

$('document').ready(function() {
    $('[data-toggle-settings]').on('click', function(){
        var target = $(this).data('toggle-settings');
        if(target == true){
            $('.settings').css('bottom', -50);
            $(this).data('toggle-settings', false);
        } else {
            $('.settings').css('bottom', -200);
            $(this).data('toggle-settings', true);
        }
    });

    $('body').keyup( function( event ) {
        console.log(event.which);

        switch (event.which) {
            case 83:
                // s
                $('[data-toggle-settings]').click();
                break;

            case 76:
                // l
                $('#search').focus();
                break;

            default:
            break;
        }
    });
});