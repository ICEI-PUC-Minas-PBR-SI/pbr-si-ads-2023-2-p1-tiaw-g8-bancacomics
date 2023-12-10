function preencherInformacoesUsuario() {
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const userDataString = localStorage.getItem('userData');

    const userData = JSON.parse(userDataString) || {};

    usernameInput.value = userData.nome || '';
    emailInput.value = userData.email || '';
    passwordInput.value = userData.senha || '';
}

function salvarPerfil() {
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    const storedData = localStorage.getItem('users');
    const users = storedData ? JSON.parse(storedData) : [];

    const isUnique = users.every(user => user.nome !== usernameInput.value && user.email !== emailInput.value);

    if (!isUnique) {
        alert('Nome de usuário ou email já existe. Escolha outro.');
        return;
    }

    userData.nome = usernameInput.value;
    userData.email = emailInput.value;
    userData.senha = passwordInput.value;

    localStorage.setItem('userData', JSON.stringify(userData));

    const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser')) || {};
    authenticatedUser.nome = usernameInput.value;
    authenticatedUser.email = emailInput.value;
    authenticatedUser.senha = passwordInput.value;
    localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));   

    alert('Perfil atualizado com sucesso!');
}

document.addEventListener('DOMContentLoaded', function () {
    preencherInformacoesUsuario();
});

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const pfpUser = document.getElementById('pfp-user');
    const pfpUser1 = document.getElementById('pfp-user1');

    fileInput.addEventListener('change', function (event) {

    });

    pfpUser.addEventListener('click', function () {
        fileInput.click();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    preencherInformacoesUsuario();
});

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const pfpUser = document.getElementById('pfp-user');
    const pfpUser1 = document.getElementById('pfp-user1');


    
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
        
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageData = e.target.result;
          
                localStorage.setItem('fotoDePerfil', imageData);
                pfpUser.src = imageData;
                pfpUser1.src = imageData;
            };
            reader.readAsDataURL(file);
        }
    });



    pfpUser.addEventListener('click', function () {

        fileInput.click();
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const pfpUser = document.getElementById('pfp-user');
    const pfpUser1 = document.getElementById('pfp-user1');

 
    const storedImageData = localStorage.getItem('fotoDePerfil');
    if (storedImageData) {
        pfpUser.src = storedImageData;
        pfpUser1.src = storedImageData;
    }

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageData = e.target.result;
                
                localStorage.setItem('fotoDePerfil', imageData);
                pfpUser.src = imageData;
                pfpUser1.src = imageData;
            };
            reader.readAsDataURL(file);
        }
    });

    pfpUser.addEventListener('click', function () {
        fileInput.click();
    });
});
