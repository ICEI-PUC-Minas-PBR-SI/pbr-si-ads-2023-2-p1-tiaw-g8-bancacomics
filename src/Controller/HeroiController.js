class HeroiController {


    ListarHerois() {
        const heroiInterface = new HeroiInterface();
        const card = document.getElementById("content-herois");
        card.innerHTML = '';
        heroiInterface.getAllHeros()
            .then((heroes) => {
                if (heroes) {
                    card.innerHTML = ''
                    let heroHtml = '';
                    for (let i = 0; i < heroes.length; i++) {
                        const heroData = heroes[i];
                        const heroi = new Heroi(
                            heroData.id,
                            heroData.name,
                            heroData.description,
                            heroData.modified,
                            heroData.resourceURI,
                            heroData.urls,
                            heroData.thumbnail,
                            heroData.comics,
                            heroData.stories,
                            heroData.events,
                            heroData.series
                        );
                        heroHtml += `
                                    <div class="col-12 col-md-6 col-lg-3 my-2 d-flex justify-content-center">
                                        <div>
                                            <img class="img" src="${heroi.thumbnail.path}.${heroi.thumbnail.extension}" width="250" height="180" alt="${heroi.name}">
                                            <h1 class="mt-4 nameHero" onclick="DetalhesPag(${heroi.id})" style="cursor: pointer;">${heroi.name}</h1>
                                        </div>
                                    </div>`;

                    }
                    card.innerHTML = heroHtml;
                }
            })
            .catch((error) => {
                console.error('Erro ao obter heróis:', error);
            });
    }

    DetalharHeroiById() {
        const params = new URLSearchParams(window.location.search);
        const heroiID = params.get('heroiID');
        const heroiRepository = new HeroiInterface();
        heroiRepository.getHeroById(heroiID).then((hero) => {
            const heroi = new Heroi(
                hero[0].id,
                hero[0].name,
                hero[0].description,
                hero[0].modified,
                hero[0].resourceURI,
                hero[0].urls,
                hero[0].thumbnail,
                hero[0].comics,
                hero[0].stories,
                hero[0].events,
                hero[0].series
            );
            const nomeHeroi = document.getElementById("title-marvel");
            nomeHeroi.innerHTML = `<h1 id="title-marvel-text">${heroi.name}</h1>`;
            const imagemHeroi = document.getElementById("foto-heroi");
            const imgUrl = `${heroi.thumbnail.path}.${heroi.thumbnail.extension}`;
            imagemHeroi.innerHTML = `<img src="${imgUrl}" class="img-fluid" alt="Herói" id="hero">`;
            if (heroi.description) {
                const descricao = document.getElementById("info-char")
                descricao.innerHTML = `<div class="p-3" >${heroi.description}</div>`
            } else {
                const descricao = document.getElementById("info-char")
                descricao.innerHTML = `<div class="p-3">Descrição não fornecida pela Marvel</div>`
            }

            let storiesRepository = new ComicsRepository();
            storiesRepository.getComicsById(heroiID).then((story) => {
                if (story) {
                    const cardHq = document.getElementById("content-gallery");
                    cardHq.innerHTML = ''
                    let html = '';
                    for (let i = 0; i < story.length; i++) {
                        const HQ = new Comic(
                            story[i].id,
                            story[i].digitalId,
                            story[i].title,
                            story[i].issueNumber,
                            story[i].variantDescription,
                            story[i].description,
                            story[i].modified,
                            story[i].isbn,
                            story[i].upc,
                            story[i].diamondCode,
                            story[i].ean,
                            story[i].isnn,
                            story[i].format,
                            story[i].pageCount,
                            story[i].textObject,
                            story[i].resourceURI,
                            story[i].urls,
                            story[i].series,
                            story[i].variants,
                            story[i].collections,
                            story[i].collectedIssues,
                            story[i].dates,
                            story[i].prices,
                            story[i].thumbnail,
                            story[i].images,
                            story[i].creators,
                            story[i].characters,
                            story[i].stories,
                            story[i].events,
                        )
                        html += `<div class="col-12 col-md-6 col-lg-3 my-2 d-flex justify-content-center">
                                <img class="imagem" width="250" height="180" src="${HQ.thumbnail.path}.${HQ.thumbnail.extension}" alt="1">
                                <p class="mt-4 sub">${HQ.title}</p></div>`;
                        console.log(HQ)
                    }
                    cardHq.innerHTML = html;
                }

            });
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

document.addEventListener("DOMContentLoaded", function () {
    const heroi = new HeroiController();
    heroi.ListarHerois();
});

document.addEventListener("DOMContentLoaded", function () {
    const heroi = new HeroiController();
    heroi.DetalharHeroiById();
});