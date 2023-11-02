
class Heroi {
    constructor(id, name, description, modified, resourceURI, urls, thumbnail, comics, stories, events, series) {
        this.id = id || null;
        this.name = name || "";
        this.description = description || "";
        this.modified = modified || null;
        this.resourceURI = resourceURI || "";
        this.urls = urls || [];
        this.thumbnail = thumbnail || {};
        this.comics = comics || {};
        this.stories = stories || {};
        this.events = events || {};
        this.series = series || {};
    }

    Teste() {
        const heroiInterface = new HeroiInterface();
        heroiInterface.getAllHeros()
            .then((heroes) => {
                console.log(heroes);
            })
            .catch((error) => {
                console.error('Erro ao obter heróis:', error);
            });
    }
}


document.getElementById("buscarHerois").addEventListener("click", function () {
    const heroi = new Heroi();
    heroi.Teste();
    
});


