// Função para verificar se um usuário está cadastrado no localStorage
function isUserRegistered(email, senha) {
    const storedData = localStorage.getItem('users');
    if (storedData) {
      const users = JSON.parse(storedData);
      return users.some(user => user.email === email && user.senha === senha);
    }
    return false;
  }
  
  // Adicione esta função a um ouvinte de evento para o envio do formulário no HTML
  function onLoginFormSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
  
    if (isUserRegistered(email, senha)) {
      // Autenticação bem-sucedida, redirecione o usuário para a página de sucesso
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'index.html';
    
    } else {
      // Exiba uma mensagem de erro, pois as credenciais não correspondem
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
 
  
  // Adicione um ouvinte de evento para o envio do formulário
  document.querySelector('form').addEventListener('submit', onLoginFormSubmit);
  