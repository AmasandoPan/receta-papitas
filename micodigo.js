$(document).ready(function() {
    $('#toggle-instructions').on('click', function() {
        $('#instructions').slideToggle(400, function() {
            if ($('#instructions').is(':visible')) {
                $('#toggle-instructions').text('Ocultar Pasos de Preparación');
            } else {
                $('#toggle-instructions').text('Mostrar/Ocultar Pasos de Preparación');
            }
        });
    });
});