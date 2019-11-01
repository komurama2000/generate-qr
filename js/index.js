/*
$(function(){
    $('#qrcode').qrcode({
        text: 'https://goo.gl/maps/BYyQmgbpmQjg2fov6',
        width: 200,
        height: 200,
        background : "#fff",
        foreground : "#000"
    });
});
*/
$(function(){
    $('#button').click(function(){
        $('#displayQR').html('');
        var url = $('#inputUrl').val();
        if (url != ""){
            $('#displayQR').qrcode({
                text: url,
                width: 200,
                height: 200,
                background : "#fff",
                foreground : "#000"
            });
        } else {
            $("#displayQR").text('blank');
        }
    });
});
