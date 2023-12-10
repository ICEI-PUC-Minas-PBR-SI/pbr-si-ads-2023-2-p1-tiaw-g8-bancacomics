class SerieController {
    async listarSeries() {
        try {
            const seriesrepos = new SerieRepository();
            const params = new URLSearchParams(window.location.search);
            const url = params.get('UrlApi');
            const cardHeroi = document.getElementById("content-heroi");
            cardHeroi.innerHTML = '';
            const cardComic = document.getElementById("veja");
            cardComic.innerHTML = ''; 

            const series = await seriesrepos.getSerieByUrl(url);
            const addedHeroes = new Set(); 
            const addedComics = new Set(); 
            console.log(series)
            for (const item of series) {
                const heroiInterface = new HeroiInterface();
                const heroes = await heroiInterface.getHeroByUrl(item.characters.collectionURI);

                if (heroes && heroes.length > 0) {
                    const heroElements = heroes
                        .filter(heroData => !addedHeroes.has(heroData.id)) 
                        .map(heroData => {
                            const heroElement = document.createElement('div');
                            heroElement.classList.add('col-12', 'col-md-6', 'col-lg-3', 'my-2', 'd-flex', 'justify-content-center');
                            heroElement.innerHTML = `
                                <div>
                                    <img class="imgg" src="${heroData.thumbnail.path}.${heroData.thumbnail.extension}" width="250" height="180" alt="${heroData.name}">
                                    <h1 class="mt-4 title" onclick="DetalhesPag(${heroData.id})" style="cursor: pointer;">${heroData.name}</h1>
                                </div>
                            `;
                            addedHeroes.add(heroData.id); 
                            return heroElement;
                        });

                    cardHeroi.append(...heroElements);
                }

                const comicsrep = new ComicsRepository();
                const comics = await comicsrep.getComicByUrl(item.comics.collectionURI);

                if (comics && comics.length > 0) {
                    const filteredComics = comics.filter(comic => !addedComics.has(comic.id));

                    const comicElements = filteredComics.map(comicData => {
                        const comicElement = document.createElement('div');
                        comicElement.classList.add('col-12', 'col-md-6', 'col-lg-3', 'my-2', 'd-flex', 'justify-content-center');
                        comicElement.innerHTML = `
                            <div class="card">
                                <img src="${comicData.thumbnail.path}.${comicData.thumbnail.extension}" class="card-img-top" alt="${comicData.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${comicData.title}</h5>
                                    <p class="card-text">${comicData.description}</p>
                                    <a onclick="DetalhesHQPag('${item.comics.items[0].resourceURI}')" class="btn btn-primary">Ver detalhes</a>
                                </div>
                            </div>
                        `;
                        addedComics.add(comicData.id); 
                        return comicElement;
                    });

                    cardComic.append(...comicElements);
                }
            }
        } catch (error) {
            console.error('Erro ao listar séries:', error);
        }
    }

    AllSeries(){
        const serieRep = new SerieRepository();
        const card = document.getElementById("content-hqs");
        card.innerHTML = '';
        serieRep.getAllSeries().then((serie) => {
            if (serie) {
                let comicHtml = '';
                console.log(serie)
                for (let i = 0; i < serie.length; i++) {
                    comicHtml += `<div class="col-12 col-md-6 col-lg-3 my-2 d-flex justify-content-center">
                    <div>
                        <img class="imgg" src="${serie[i].thumbnail.path}.${serie[i].thumbnail.extension}" width="250" height="180" alt="${serie[i].title}">
                        <p class="mt-4 title" onclick="DetalhesSeriePag('${serie[i].resourceURI}')" style="cursor: pointer;">${serie[i].title}</p>
                    </div>
                    </div>`

                }
                card.innerHTML = comicHtml;


            }
        }).catch((error) => {
            console.error('Erro ao obter HQs:', error);
        });
    }
}

function DetalhesPag(heroiID) {
    try {
        window.location.href = `../DetalheHeroi/Detalhes.html?heroiID=${heroiID}`;
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

function DetalhesSeriePag(apiUrl) {
    try {
        window.location.href = `../DetalheSerie/Detalhes.html?UrlApi=${apiUrl}`;
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

document.addEventListener("DOMContentLoaded", function () {
    const serieController = new SerieController();
    serieController.listarSeries();
});

document.addEventListener("DOMContentLoaded", function () {
    const serieController = new SerieController();
    serieController.AllSeries();
});
