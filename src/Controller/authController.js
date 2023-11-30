function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
        // Aqui você pode tomar decisões com base no usuário não estar autenticado
        console.log('O usuário não está autenticado. Faça algo aqui.');
    }
    else{
        console.log('O usuario está autenticado! :)');
    }
}

document.addEventListener('DOMContentLoaded', function () {

    checkAuthentication();
});