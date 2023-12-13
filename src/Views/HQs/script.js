const publicKey = '6e3bb1ae342c60ed591a50982af58e73';
const baseURL = 'https://gateway.marvel.com/v1/public/comics';
const limit = 5; // Número de quadrinhos por página
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


