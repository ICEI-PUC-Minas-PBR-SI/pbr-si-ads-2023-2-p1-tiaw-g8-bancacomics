const publicKey = '6e3bb1ae342c60ed591a50982af58e73';
const baseURL = 'https://gateway.marvel.com/v1/public/comics';
const limit = 20; // Número de quadrinhos por página
let offset = 0; // Ponto inicial para busca (inicia do 0)
let totalComics = 0; // Total de HQs disponíveis
let currentPage = 1; // Página atual

// Função para exibir os quadrinhos
function showComics(comics) {
  const comicsContainer = document.getElementById('comics-container');
  comicsContainer.innerHTML = ''; // Limpa o conteúdo anterior

  comics.forEach(comic => {
    const div = document.createElement('div');
    div.classList.add('comic');

    const title = document.createElement('h3');
    title.textContent = comic.title;
    title.style.color = "white"; // Estilo para o texto em branco
    div.appendChild(title);



    // Criação do sistema de avaliação
      const ratingContainer = document.createElement('div');
      ratingContainer.classList.add('rating');

      // Criação de 5 estrelas para cada quadrinho
      for (let i = 5; i >= 1; i--) {
        const starInput = document.createElement('input');
        starInput.type = 'radio';
        starInput.id = `star${i}-${comic.id}`;
        starInput.name = `rating-${comic.id}`;
        starInput.value = i;

        const starLabel = document.createElement('label');
        starLabel.htmlFor = `star${i}-${comic.id}`;

        ratingContainer.appendChild(starInput);
        ratingContainer.appendChild(starLabel);
      }

      div.appendChild(ratingContainer);

      const image = document.createElement('img');
      image.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
      image.alt = comic.title;
      div.appendChild(image);

      comicsContainer.appendChild(div);
    });
    }





// Função para buscar os quadrinhos da Marvel com paginação
function getComics(pageNumber) {
  const currentOffset = (pageNumber - 1) * limit;

  fetch(`${baseURL}?apikey=${publicKey}&limit=${limit}&offset=${currentOffset}`)
    .then(response => response.json())
    .then(data => {
      const comics = data.data.results;
      totalComics = data.data.total;

      showComics(comics);
      // Atualiza a página atual
      currentPage = pageNumber;
      // Chamada para criar a paginação
      createPagination();
    })
    .catch(error => console.log(error));
}

// Inicia a busca dos quadrinhos na primeira página
getComics(currentPage);

// Função para criar a paginação
function createPagination() {
  // Implemente a função de paginação aqui

}

// Função para buscar os quadrinhos com base no título
function searchComics() {
  const searchValue = document.getElementById('searchInput').value.trim();

  if (searchValue === '') {
    alert('Digite um título para buscar!');
    return;
  }

  const searchURL = `${baseURL}?apikey=${publicKey}&titleStartsWith=${searchValue}&limit=${limit}`;

  fetch(searchURL)
    .then(response => response.json())
    .then(data => {
      const comics = data.data.results;
      showComics(comics); // Exibe os quadrinhos encontrados
    })
    .catch(error => console.error(error));
}


// Função para criar a paginação
function createPagination() {
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = ''; // Limpa o conteúdo anterior

  const totalPages = Math.ceil(totalComics / limit);
  const maxVisiblePages = 5; // Número máximo de páginas visíveis
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (currentPage <= halfMaxVisiblePages) {
    startPage = 1;
    endPage = maxVisiblePages;
  } else if (currentPage >= totalPages - halfMaxVisiblePages) {
    endPage = totalPages;
    startPage = totalPages - maxVisiblePages + 1;
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => {
      getComics(i); // Chama a função para buscar os quadrinhos da página selecionada
    });
    paginationElement.appendChild(pageLink);
  }
}



function buscarHQs() {
const orderBy = document.getElementById('order').value;

fetch(`${baseURL}?apikey=${publicKey}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`)
.then(response => response.json())
.then(data => {
  const comics = data.data.results;
  totalComics = data.data.total;

  showComics(comics);
  createPagination();
})
.catch(error => console.error('Erro ao buscar HQs:', error));
}






// Função para buscar as HQs da API da Marvel
async function getHQs(orderBy) {
// Código para buscar as HQs da API da Marvel conforme mencionado anteriormente
// ...

try {
    // Código para fazer a requisição à API e retornar os dados das HQs
    // ...
    return data.data.results;
} catch (error) {
    console.error('Erro ao buscar HQs:', error);
    return [];
}
}

// Função para ordenar HQs por título (ordem alfabética)
function orderByTitle(hqs) {
return hqs.sort((a, b) => a.title.localeCompare(b.title));
}

// Função para ordenar HQs por data de lançamento (ordem cronológica)
function orderByDate(hqs) {
return hqs.sort((a, b) => new Date(b.dates.find(date => date.type === 'onsaleDate').date) - new Date(a.dates.find(date => date.type === 'onsaleDate').date));
}

// Função para ordenar HQs por número de avaliações (mais avaliadas primeiro)
function orderByRating(hqs) {
return hqs.sort((a, b) => b.rating - a.rating);
}

// Exemplo de uso para escolher a ordenação
const orderBy = 'title'; // Escolha entre 'title', 'date' ou 'rating'
getHQs(orderBy)
.then((comics) => {
    let sortedComics = [];
    switch (orderBy) {
        case 'title':
            sortedComics = orderByTitle(comics);
            break;
        case 'date':
            sortedComics = orderByDate(comics);
            break;
        case 'rating':
            sortedComics = orderByRating(comics);
            break;
        default:
            sortedComics = comics;
    }

    // Aqui você pode usar os dados ordenados (sortedComics) para exibição na interface do usuário
    console.log(sortedComics);
})
.catch((error) => {
    console.error('Erro:', error);
});


fun

fetch(`https://gateway.marvel.com/v1/public/comics?orderBy=${orderBy}&apikey=6e3bb1ae342c60ed591a50982af58e73`)
.then(response => response.json())
.then(data => {
    const comicsContainer = document.getElementById('comics-container');
    // Aqui você deve iterar sobre os quadrinhos recebidos e mostrar na página
    // comicsContainer.innerHTML = ...; // Adicione o conteúdo dos quadrinhos aqui
})
.catch(error => console.error('Erro ao buscar HQs:', error));



