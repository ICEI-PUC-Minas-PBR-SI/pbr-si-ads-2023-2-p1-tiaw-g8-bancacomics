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
    

}

document.addEventListener("DOMContentLoaded", function () {
    const heroi = new HeroiController();
    heroi.ListarHerois();
});