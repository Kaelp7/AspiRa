function enableEdit() {
    document.getElementById('nama').disabled = false;
    document.getElementById('nip').disabled = false;
    document.getElementById('no_hp').disabled = false;
    document.getElementById('profile_pic').disabled = false;
    document.getElementById('save-btn').style.display = 'block';
    document.getElementById('edit-btn').style.display = 'none';
}

function saveChanges() {
    // Implement save functionality here
    document.getElementById('profile-form').submit();
}