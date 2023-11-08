const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

if (isLoggedIn) {

} else {
    // O usuário não está logado, redirecionar para a pgina de login
  window.location.href = 'login.html';
}
