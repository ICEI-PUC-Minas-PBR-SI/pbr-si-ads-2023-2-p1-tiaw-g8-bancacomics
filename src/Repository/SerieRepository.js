class SerieRepository{

    constructor() {

    }

    getAllSeries() {
        const publicKey = 'c21a8082ad09f56a486b54525e571e4b';
        const privateKey = 'e83ebfb95b8eba16ea4755b8c17b0a7fa8772db5';
        const apiUrl = 'https://gateway.marvel.com/v1/public/series';
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar heróis');
                }
                return response.json();
            })
            .then((data) => {
                return data.data.results; 
            });
    }

    getSerieByUrl(apiUrl){
        const publicKey = 'c21a8082ad09f56a486b54525e571e4b';
        const privateKey = 'e83ebfb95b8eba16ea4755b8c17b0a7fa8772db5';
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        return fetch(url).then((response) =>{
            if(!response.ok){
                throw new Error('Erro ao encontrar o heroi pel url')
            }
            return response.json();
        }).then((data) =>{
            return data.data.results;
        })
    }
}