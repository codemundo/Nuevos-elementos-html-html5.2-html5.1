var openDialog = document.getElementById('open');
var openModal = document.getElementById('openModal');
var closeDialog = document.getElementById('close');
var dialog = document.getElementById('dialog');

openDialog.onclick = function() {
    dialog.show();
}

openModal.onclick = function() {
    dialog.showModal();
}

closeDialog.onclick = function() {
    dialog.close();
}

