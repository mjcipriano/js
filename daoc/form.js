if (window.jQuery === undefined) {
    var script    = document.createElement( 'script' );
    script.src    = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = function() { fillForm; sendData; }
    document.body.appendChild(script);
}
else {
    fillForm();
    sendData();
}

function fillForm() {
    $('input[name="data-v-44091682"]').val('Robert');
    $('input[name="SURNAME"]').val('Gravelle');
    $('input[name="EMAIL"]').val('rgconsulting@robgravelle.com');
    $('input[type="radio"][name="REF"][value="Y"]').attr('checked', 'checked')
    $('input[name="REF_NAME"]').val('John Bush');
}
