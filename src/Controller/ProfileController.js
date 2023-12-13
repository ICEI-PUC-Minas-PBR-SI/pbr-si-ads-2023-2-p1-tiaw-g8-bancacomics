document.addEventListener('DOMContentLoaded', function () {
    const perfilLink = document.getElementById('perfilLink');
    const sairBtn = document.getElementById('sairBtn');
    const Some = document.getElementById('some');

    perfilLink.addEventListener('click', function(){
        const isAuthenticated = localStorage.getItem('isAuthenticated') == 'true';

        if(isAuthenticated){
            window.location.href = '../Profile/Profile.html'
        }

    });

    sairBtn.addEventListener('click', function () {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

        if (isAuthenticated) {
            
            localStorage.setItem('isAuthenticated', 'false');
          
            window.location.href = '../Login/login.html';
        } else {
            window.location.href = '../Login/login.html';
        }
    });

    function checkAuthentication() {
        return localStorage.getItem('isAuthenticated') === 'true';
    }

    if (checkAuthentication()) {
        sairBtn.innerText = 'Sair';
    } else {
        perfilLink.style.display = 'none';
        sairBtn.innerText = 'Entrar';
        Some.style.display = 'none';
    }
});
