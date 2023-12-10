class AutoresController {
    ListarAutores() {
        const autoresRepository = new AutoresReposotiry();
        const card = document.getElementById("content-autores");
        card.innerHTML = '';
        autoresRepository.getAllAutores().then((autores) => {
            if (autores) {
                console.log(autores)
                card.innerHTML = ''
                let autoresHtml = '';
                for (let i = 0; i < autores.length; i++) {
                    const autor = new Autor(
                        autores[i].id,
                        autores[i].firstName,
                        autores[i].middleName,
                        autores[i].lastName,
                        autores[i].suffix,
                        autores[i].fullName,
                        autores[i].modified,
                        autores[i].resourceURI,
                        autores[i].thumbnail,
                        autores[i].urls,
                        autores[i].series,
                        autores[i].stories,
                        autores[i].events,
                        autores[i].comics,
                    )
                    autoresHtml += `
                                    <div class="col-12 col-md-6 col-lg-3 my-2 d-flex justify-content-center">
                                        <div>
                                            <img class="img" src="${autor.thumbnail.path}.${autor.thumbnail.extension}" width="250" height="180" alt="${autor.firstName}">
                                            <h1 class="mt-4 nameHero" onclick="DetalheAutor(${autor.id})" style="cursor: pointer;">${autor.firstName}</h1>
                                        </div>
                                    </div>`;
                }
                card.innerHTML = autoresHtml;
            }
        })
    }

    DetalharAutor(){
        const params = new URLSearchParams(window.location.search);
        const id = params.get('Id');
        const autorReposity = new AutoresReposotiry()
        autorReposity.getAutorById(id).then((autores) => {
            if (autores) {
                console.log(autores)
                const autor = new Autor(
                    autores[0].id,
                    autores[0].firstName,
                    autores[0].middleName,
                    autores[0].lastName,
                    autores[0].suffix,
                    autores[0].fullName,
                    autores[0].modified,
                    autores[0].resourceURI,
                    autores[0].thumbnail,
                    autores[0].urls,
                    autores[0].series,
                    autores[0].stories,
                    autores[0].events,
                    autores[0].comics,
                )
                const nomeHQ = document.getElementById("title-marvelAutor");
                nomeHQ.innerHTML = `<h1 id="title-marvel-text">${autor.firstName} ${autor.lastName}</h1>`;
                const imagemHQ = document.getElementById("foto-heroi");
                const imgUrl = `${autor.thumbnail.path}.${autor.thumbnail.extension}`;
                imagemHQ.innerHTML = `<img src="${imgUrl}" class="img-fluid" alt="Herói" id="hero">`;
                // if (autor.description) {
                //     const descricao = document.getElementById("info-char")
                //     descricao.innerHTML = `<div class="p-3" >${HQ.description}</div>`
                // } else {
                //     const descricao = document.getElementById("info-char")
                //     descricao.innerHTML = `<div class="p-3">Descrição não fornecida pela Marvel</div>`
                // }
                // let HeroiRepository = new HeroiInterface();
                // HeroiRepository.getHeroByUrl(`${HQ.characters.collectionURI}`).then((hero) => {
                //     if (hero.length > 0) {
                //         console.log(hero)
                //         const cardHq = document.getElementById("content-gallery");
                //         cardHq.innerHTML = ''
                //         let html = '';
                //         for (let i = 0; i < hero.length; i++) {
                //             const personagem = new Heroi(
                //                 hero[i].id,
                //                 hero[i].name,
                //                 hero[i].description,
                //                 hero[i].resourceURI,
                //                 hero[i].urls,
                //                 hero[i].thumbnail,
                //                 hero[i].comics,
                //                 hero[i].stories,
                //                 hero[i].events,
                //                 hero[i].series,
                //             )
                //             html += `<div class="col-12 col-md-6 col-lg-3 my-2 d-flex justify-content-center">
                //                 <img class="imagem" width="250" height="180" src="${personagem.urls.path}.${personagem.urls.extension}" alt="1">
                //                 <p class="mt-4 sub" onclick="DetalhesHeroiPag(${personagem.id})" style="cursor: pointer;">${personagem.name}</p></div>`;
                //             console.log(personagem)
                //         }
                //         cardHq.innerHTML = html;
                //     }else{
                //         const cardHq = document.getElementById("content-gallery");
                //         cardHq.innerHTML = '<p class="mt-4 sub" style="cursor: pointer;">Sem informações sobre os personagen participantes</p></div>'
                //     }
                // });
            }
        })
    }
}

function DetalheAutor(id){
    try{
        window.location.href = `../AutoresDetalhe/Detalhes.html?Id=${id}`;
    }catch (error) {
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

document.addEventListener("DOMContentLoaded", function () {
    const autor = new AutoresController();
    autor.ListarAutores();
});

document.addEventListener("DOMContentLoaded", function () {
    const autor = new AutoresController();
    autor.DetalharAutor();
});