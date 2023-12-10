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

    publicarBtn.addEventListener('click', function (event) {
        event.preventDefault();


        const titulo = document.getElementById('titulo').value;
        const assunto = document.getElementById('assunto').value;
        const comentario = document.getElementById('comentario').value;
        const recomendacao = document.getElementById('recomendacao').checked;
        const searchInput = document.getElementById('searchInput').value;


        criarNovoCard(titulo, assunto, comentario, recomendacao, searchInput);

        document.getElementById('titulo').value = '';
        document.getElementById('assunto').value = '';
        document.getElementById('comentario').value = '';
        document.getElementById('recomendacao').checked = false;
        document.getElementById('searchInput').value = '';
    });

    function criarNovoCard(titulo, assunto, comentario, recomendacao, searchInput) {

        const newCard = document.createElement('div');
        newCard.className = 'col-md-12 mb-5';
        newCard.innerHTML = `
            <div class="card text-white bg-dark border-light border-5">
                <div class="d-flex align-items-center justify-content-center">
                    <!-- Adicione suas informações aqui com base nos parâmetros recebidos -->
                    <div class="card-body text-center">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text"><strong>${assunto}</strong></p>
                        <p class="card-text">${comentario}</p>
                        <a href="#" class="btn btn-light">Ver Comentários</a>
                    </div>
                </div>
            </div>
        `;

        cardsContainer.appendChild(newCard);
    }
});
