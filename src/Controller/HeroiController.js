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
                        <div class="card">
                            <img src="${heroi.thumbnail.path}.${heroi.thumbnail.extension}" width="250" height="180" alt="${heroi.name}">
                            <h1 class="mt-4">${heroi.name}</h1>
                            <button type="button" class="btn btn-outline-danger" onclick="DetalhesPag(${heroi.id})">Detalhes</button>
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
            const imagemHeroi = document.getElementById("foto-heroi");
            // Certifique-se de que heroi.thumbnail.path contenha a URL da imagem.
            const imgUrl = `${heroi.thumbnail.path}.${heroi.thumbnail.extension}`;
            imagemHeroi.innerHTML = `<img src="${imgUrl}" class="img-fluid" alt="Herói" id="hero">`;
            console.log(hero);
            console.log(heroi);
            if(heroi.description){
                const descricao = document.getElementById("info-char")
                descricao.innerHTML = `<div class="p-3" >${heroi.description}</div>`
            }else{
                const descricao = document.getElementById("info-char")
                descricao.innerHTML = `<div class="p-3">Descrição não fornecida pela Marvel</div>`
            }
            
        });



    }

}

function DetalhesPag(heroiID) {
    try {
        console.log(heroiID);
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