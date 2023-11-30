class ComicsRepository {
    constructor() {

    }

    getComicsById(id) {
        const publicKey = 'c21a8082ad09f56a486b54525e571e4b';
        const privateKey = 'e83ebfb95b8eba16ea4755b8c17b0a7fa8772db5';
        const apiUrl = `https://gateway.marvel.com/v1/public/characters/${id}/comics`;
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        return fetch(url).then((response) =>{
            if(!response.ok){
                throw new Error('Erro ao encontrar A HQ')
            }
            return response.json();
        }).then((comics) =>{
            return comics.data.results;
        })
    }
    searchComics(searchValue) {
        const publicKey = 'c21a8082ad09f56a486b54525e571e4b';
        const privateKey = 'e83ebfb95b8eba16ea4755b8c17b0a7fa8772db5';
        const apiUrl = `https://gateway.marvel.com/v1/public/comics`;
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${searchValue}`;
    
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao encontrar as HQs. Status: ${response.status}`);
                }
                return response.json();
            })
            .then(comics => comics.data.results)
            .catch(error => {
                console.error('Erro ao obter HQs:', error.message);
                throw error;
            });
    }

    getAllComics(){
        const apiUrl = 'https://gateway.marvel.com/v1/public/comics'
        const publicKey = 'c21a8082ad09f56a486b54525e571e4b';
        const privateKey = 'e83ebfb95b8eba16ea4755b8c17b0a7fa8772db5';
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        return fetch(url).then((response) =>{
            if(!response.ok){
                throw new Error('Erro ao encontrar A HQ')
            }
            return response.json();
        }).then((comics) =>{
            return comics.data.results;
        })
    }

    getComicByUrl(apiUrl){
        const publicKey = 'c21a8082ad09f56a486b54525e571e4b';
        const privateKey = 'e83ebfb95b8eba16ea4755b8c17b0a7fa8772db5';
        const ts = new Date().getTime();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
        const url = `${apiUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        return fetch(url).then((response) =>{
            if(!response.ok){
                throw new Error('Erro ao encontrar A HQ')
            }
            return response.json();
        }).then((comics) =>{
            return comics.data.results;
        })
    }

}