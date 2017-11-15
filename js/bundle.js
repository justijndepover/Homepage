var $ = require('jquery');

$('document').ready(function() {

    $('body').keypress( function( event ) {
        // console.log(event.which);

        if(event.which == 27) {
            $('#commandinput').val('').blur();
        }

        if($('#search').is(':focus') || $('#commandinput').is(':focus')){
            return;
        }

        switch (event.which) {
            case 58:
                // :
                $('[data-toggle-prompt]').click();
                $('#commandinput').focus();
                break;

            default:
            break;
        }
    });

    $( '#commandinput' ).keyup( function( e ) {
        if( e.keyCode == 13 )
        {
            $( this ).trigger( "enterKey" );
        }
    });

    $( '#commandinput' ).bind( "enterKey" ,function( e ){
        // val contains full command, no split based on spaces
        var val = $( '#commandinput' ).val();
        var input = val.split(' ');
        $( '#commandinput' ).val("").blur();

        switch (input[0]) {
            case ":r":
                // reddit baby

                if (typeof input[1] != 'undefined'){
                    window.location.href = "http://www.reddit.com/r/" + input[1];
                }
                window.location.href = "http://www.reddit.com/";
                break;

            case ":open":
                var pattern = /^((http|https|ftp):\/\/)/;

                if(!pattern.test(input[1])) {
                    input[1] = "http://" + input[1];
                }

                window.location.href = input[1];
                break;

            case ":g":
				input.splice(0,1);
                window.location.href = "http://www.google.com/search?q=" + input.join(' ');
                break;

            case ":f":
                window.location.href = "http://www.facebook.com/";
                break;

            case ":tw":
                window.location.href = "http://www.twitter.com/";
                break;

            case ":y":
                window.location.href = "http://www.youtube.com/";
                break;

            case ":t":
                window.location.href = "http://www.theverge.com/";
                break;

            case ":n":
                window.location.href = "http://www.netflix.com/";
                break;

            case ":s":
                window.location.href = "http://www.soundcloud.com/";
                break;

            default:
                break;
        }
    });
});
