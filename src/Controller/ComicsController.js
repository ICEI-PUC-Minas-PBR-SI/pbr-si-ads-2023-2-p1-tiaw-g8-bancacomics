class ComcisController {
    ListarHQ() {
        const HQRepository = new ComicsRepository()
        const card = document.getElementById("content-hqs");
        card.innerHTML = '';
        HQRepository.getAllComics().then((comic) => {
            if (comic) {
                let comicHtml = '';
                for (let i = 0; i < comic.length; i++) {
                    const HQ = new Comic(
                        comic[i].id,
                        comic[i].digitalId,
                        comic[i].title,
                        comic[i].issueNumber,
                        comic[i].variantDescription,
                        comic[i].description,
                        comic[i].modified,
                        comic[i].isbn,
                        comic[i].upc,
                        comic[i].diamondCode,
                        comic[i].ean,
                        comic[i].issn,
                        comic[i].format,
                        comic[i].pageCount,
                        comic[i].textObjects,
                        comic[i].resourceURI,
                        comic[i].urls,
                        comic[i].series,
                        comic[i].variants,
                        comic[i].collections,
                        comic[i].collectedIssues,
                        comic[i].dates,
                        comic[i].prices,
                        comic[i].thumbnail,
                        comic[i].images,
                        comic[i].creators,
                        comic[i].characters,
                        comic[i].stories,
                        comic[i].events,
                    )
                    comicHtml += `<div class="col-12 col-md-6 col-lg-3 my-2 d-flex justify-content-center">
                    <div>
                        <img class="imgg" src="${HQ.thumbnail.path}.${HQ.thumbnail.extension}" width="250" height="180" alt="${HQ.title}">
                        <h5 class="mt-4 title" onclick="DetalhesHQPag('${HQ.resourceURI}')" style="cursor: pointer;">${HQ.title}</h5>
                    </div>
                    </div>`

                }
                card.innerHTML = comicHtml;


            }
        }).catch((error) => {
            console.error('Erro ao obter HQs:', error);
        });
    }

    DetailHqbyURL() {
        const params = new URLSearchParams(window.location.search);
        const hqURL = params.get('Apiurl');
        const HQRepository = new ComicsRepository()
        HQRepository.getComicByUrl(hqURL).then((comic) => {
            if (comic) {
                console.log(comic)
                const HQ = new Comic(
                    comic[0].id,
                    comic[0].digitalId,
                    comic[0].title,
                    comic[0].issueNumber,
                    comic[0].variantDescription,
                    comic[0].description,
                    comic[0].modified,
                    comic[0].isbn,
                    comic[0].upc,
                    comic[0].diamondCode,
                    comic[0].ean,
                    comic[0].issn,
                    comic[0].format,
                    comic[0].pageCount,
                    comic[0].textObjects,
                    comic[0].resourceURI,
                    comic[0].urls,
                    comic[0].series,
                    comic[0].variants,
                    comic[0].collections,
                    comic[0].collectedIssues,
                    comic[0].dates,
                    comic[0].prices,
                    comic[0].thumbnail,
                    comic[0].images,
                    comic[0].creators,
                    comic[0].characters,
                    comic[0].stories,
                    comic[0].events,
                );
                const nomeHQ = document.getElementById("title-marvelHQ");
                nomeHQ.innerHTML = `<h1 id="title-marvel-text">${HQ.title}</h1>`;
                const imagemHQ = document.getElementById("foto-heroi");
                const imgUrl = `${HQ.thumbnail.path}.${HQ.thumbnail.extension}`;
                imagemHQ.innerHTML = `<img src="${imgUrl}" class="img-fluid" alt="Herói" id="hero">`;
                if (HQ.description) {
                    const descricao = document.getElementById("info-char")
                    descricao.innerHTML = `<div class="p-3" >${HQ.description}</div>`
                } else {
                    const descricao = document.getElementById("info-char")
                    descricao.innerHTML = `<div class="p-3">Descrição não fornecida pela Marvel</div>`
                }
                let HeroiRepository = new HeroiInterface();
                HeroiRepository.getHeroByUrl(`${HQ.characters.collectionURI}`).then((hero) => {
                    if (hero.length > 0) {
                        console.log(hero)
                        const cardHq = document.getElementById("content-gallery");
                        cardHq.innerHTML = ''
                        let html = '';
                        for (let i = 0; i < hero.length; i++) {
                            const personagem = new Heroi(
                                hero[i].id,
                                hero[i].name,
                                hero[i].description,
                                hero[i].resourceURI,
                                hero[i].urls,
                                hero[i].thumbnail,
                                hero[i].comics,
                                hero[i].stories,
                                hero[i].events,
                                hero[i].series,
                            )
                            html += `<div class="col-12 col-md-6 col-lg-3 my-2 d-flex justify-content-center">
                                <img class="imagem" width="250" height="180" src="${personagem.urls.path}.${personagem.urls.extension}" alt="1">
                                <p class="mt-4 sub" onclick="DetalhesHeroiPag(${personagem.id})" style="cursor: pointer;">${personagem.name}</p></div>`;
                            console.log(personagem)
                        }
                        cardHq.innerHTML = html;
                    }else{
                        const cardHq = document.getElementById("content-gallery");
                        cardHq.innerHTML = '<p class="mt-4 sub" style="cursor: pointer;">Sem informações sobre os personagen participantes</p></div>'
                    }
                });
            }
        })
    }

    LinkPagHq() {
        const card = document.getElementById("Listar-hq");
        card.innerHTML = '';
        card.innerHTML = `<div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSkQSuy8WW2dzsb2I6xbhULWCqdTyI-QNCA&usqp=CAU"width="250" height="180" alt="HQ">
                            <h1 class="mt-4" onclick="ALLHQPag()">HQs</h1>
                        </div>`
    }


}

function ALLHQPag() {
    try {
        window.location.href = `../HQs/index.html`;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
    }
}

function DetalhesHQPag(apiUrl) {
    try {
        window.location.href = `../DetalheHQ/Detalhes.html?Apiurl=${apiUrl}`;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
    }
}

function DetalhesHeroiPag(heroiID) {
    try {
        window.location.href = `../DetalheHeroi/Detalhes.html?heroiID=${heroiID}`;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
    }
}

function ALLAutoresPag() {
    try {
        window.location.href = `../Autores/Autores.html`;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
    }
}

function ALLHQPag() {
    try {
        window.location.href = `../HQs/index.html`;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
    }
}

function HomePag() {
    try {
        window.location.href = `../Home/index.html`;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
    }
}

function SeriePag() {
    try {
        window.location.href = `../Series/index.html`;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const hq = new ComcisController();
    hq.ListarHQ();
});

document.addEventListener("DOMContentLoaded", function () {
    const hq = new ComcisController();
    hq.DetailHqbyURL();
});


function searchComicsDynamic() {
    const apiUrl = 'https://gateway.marvel.com/v1/public/comics'
    const publicKey = 'c21a8082ad09f56a486b54525e571e4b';
    const privateKey = 'e83ebfb95b8eba16ea4755b8c17b0a7fa8772db5';
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const limit = 10;
    const searchValue = document.getElementById('searchInputDynamic').value.trim();
    if (searchValue === '') {
      alert('Digite um título para buscar!');
      return;
    }
  
    const searchURL = `${url}&titleStartsWith=${searchValue}&limit=${limit}`;
    console.log(searchURL);
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        const comics = data.data.results;
        console.log(comics);
        showComics(comics); // Exibe os quadrinhos encontrados
      })
      .catch((error) => console.error(error));
  }
  





