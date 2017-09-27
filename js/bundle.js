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
});