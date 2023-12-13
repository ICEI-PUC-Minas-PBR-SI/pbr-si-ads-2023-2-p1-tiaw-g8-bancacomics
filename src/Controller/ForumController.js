document.addEventListener('DOMContentLoaded', function () {

    const publicacaoBtn = document.getElementById('publicacaoBtn');
    publicacaoBtn.addEventListener('click', function () {
    
        checkAuthentication();
    });


});

function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const authMessage = document.getElementById('authMessage');
    const publicacaoBtn = document.getElementById('publicacaoBtn');

    if (!isAuthenticated) {
    
        authMessage.textContent = 'Faça login ou cadastre-se para publicar.';
    
        publicacaoBtn.style.display = 'none';
    
    }
}

function carregarNomesDasHQs(searchValue) {
    const comicsRepository = new ComicsRepository();
    const datalist = document.getElementById('hqSuggestions');


    if (!datalist) {
        console.error('Elemento com ID "hqSuggestions" não encontrado na página.');
        return;
    }


    comicsRepository.searchComics(searchValue)
        .then(data => {
        
            datalist.innerHTML = '';

    
            data.forEach(comic => {
                const option = document.createElement('option');
                option.value = comic.title; 
                datalist.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar nomes das HQs da API:', error.message);
        
        });
}

function searchSuggestions() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value.trim();

    if (searchValue !== '') {
        carregarNomesDasHQs(searchValue);
    } else {
    
        const datalist = document.getElementById('hqSuggestions');
        if (datalist) {
            datalist.innerHTML = '';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('criarPublicacaoModal').addEventListener('show.bs.modal', function () {
        searchSuggestions();
    });
})

document.addEventListener('DOMContentLoaded', function () {
    const publicarBtn = document.getElementById('publicarBtn');
    const cardsContainer = document.getElementById('cardsContainer');

    // Recupere as publicações salvas no localStorage
    const storedPublications = localStorage.getItem('publications');
    const publications = storedPublications ? JSON.parse(storedPublications) : [];

    // Renderize as publicações ao carregar a página
    renderizarPublicacoes(publications);

    publicarBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Recupere os valores dos campos do formulário
        const titulo = document.getElementById('titulo').value;
        const assunto = document.getElementById('assunto').value;
        const comentario = document.getElementById('comentario').value;
        const recomendacao = document.getElementById('recomendacao').checked;
        const searchInput = document.getElementById('searchInput').value;

        // Recupere o nome do usuário
        const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser')) || {};
        const nomeUsuario = authenticatedUser.nome || 'Username';

        // Crie uma nova publicação
        const newPublication = {
            titulo,
            assunto,
            comentario,
            recomendacao,
            searchInput,
            nomeUsuario  // Adicione o nome do usuário à publicação
        };

        // Adicione a nova publicação ao array
        publications.push(newPublication);

        // Salve o array de publicações no localStorage
        localStorage.setItem('publications', JSON.stringify(publications));

        // Chame a função para criar um novo card
        criarNovoCard(newPublication);

        // Limpe os campos do formulário
        document.getElementById('titulo').value = '';
        document.getElementById('assunto').value = '';
        document.getElementById('comentario').value = '';
        document.getElementById('recomendacao').checked = false;
        document.getElementById('searchInput').value = '';
    });

    function criarNovoCard(publication) {
        // Crie um novo elemento de card
        const newCard = document.createElement('div');
        newCard.className = 'col-md-4 mb-5';  // Ajuste o tamanho do novo card aqui
        newCard.innerHTML = `
            <div class="card text-white bg-dark border-light border-5">
                <div class="d-flex align-items-center justify-content-center">
                    <!-- Adicione suas informações aqui com base nos parâmetros recebidos -->
                    <img src="https://i.pinimg.com/1200x/0c/e9/12/0ce9126dc84208b92eb761c9f7a02c6b.jpg" width="110" height="110" alt="${publication.nomeUsuario}" class="img-fluid" style="max-width: 100%; height: auto;">
                    <div class="card-body text-center">
                        <h5 class="card-title">${publication.titulo}</h5>
                        <p class="card-text"><strong>${publication.assunto}</strong></p>
                        <p class="card-text">${publication.comentario}</p>
                        <p class="card-text">Por: ${publication.nomeUsuario}</p>
                        <a href="#" class="btn btn-light">Ver Comentários</a>
                    </div>
                </div>
            </div>
        `;

        // Adicione o novo card ao contêiner
        cardsContainer.appendChild(newCard);
    }

    function renderizarPublicacoes(publications) {
        // Renderize as publicações existentes
        publications.forEach(publication => criarNovoCard(publication));
    }
});

