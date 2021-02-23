if (window.jQuery === undefined) {
    var script    = document.createElement( 'script' );
    script.src    = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = function() { fillForm; sendData; }
    document.body.appendChild(script);
}
else {
    fillForm();
    sendData();
}

function fillForm() {
    $('input[name="data-v-44091682"]').val('Robert');
}
