document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const userManager = new UserManager();
    const storedData = localStorage.getItem('users');
    if (storedData) {
        userManager.users = JSON.parse(storedData);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = form.querySelector('[name="nome"]').value;
        const email = form.querySelector('[name="email"]').value;
        const senha = form.querySelector('[name="senha"]').value;
        const id = Date.now().toString();
        const newUser = new User(id, nome, email, senha);
  
        if (userManager.isUnique(newUser)) {
            userManager.addUser(newUser);
            localStorage.setItem('users', JSON.stringify(userManager.users));

            localStorage.setItem('userData', JSON.stringify({
                nome: newUser.nome,
                email: newUser.email,
                senha: newUser.senha
            }));

            alert('Cadastro realizado com sucesso!');
            window.location.href = '../Login/login.html';
        } else {
            alert('Usuário já cadastrado. Escolha outro nome ou e-mail.');
        }
    });
});