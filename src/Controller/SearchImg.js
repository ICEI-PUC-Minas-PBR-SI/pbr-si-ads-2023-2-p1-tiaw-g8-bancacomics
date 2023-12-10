document.addEventListener('DOMContentLoaded', function () {
    const pfpUser = document.getElementById('pfp-user');
    const storedImageData = localStorage.getItem('fotoDePerfil');
    if (storedImageData) {
        pfpUser.src = storedImageData;
    }
});
