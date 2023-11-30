console.log('LoginController.js carregado com sucesso.');

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailOrUsername = loginForm.querySelector('[name="email"]').value;
        const password = loginForm.querySelector('[name="senha"]').value;

        
        const authenticatedUser = authenticateUser(emailOrUsername, password);

        if (authenticatedUser) {
            localStorage.setItem('isAuthenticated', 'true');

            alert('Login bem-sucedido!');
            window.location.href = '../Home/index.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });

    
    function authenticateUser(emailOrUsername, password) {
       
        const storedData = localStorage.getItem('users');
        const users = storedData ? JSON.parse(storedData) : [];

        
        const authenticatedUser = users.find(user => (user.email === emailOrUsername || user.nome === emailOrUsername) && user.senha === password);

        return authenticatedUser;
    }
});