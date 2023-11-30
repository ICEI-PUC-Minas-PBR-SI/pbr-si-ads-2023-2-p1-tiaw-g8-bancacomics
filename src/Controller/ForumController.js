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
