import {useHttp} from '../hooks/http.hook';

const useMarvelService = () => {
    const {request, clearError, process, setProcess} = useHttp();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=b392e6dc73e1b9bea7c19d113a55c218';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getAllComics = async (comicsOffset = 0) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${comicsOffset}&${_apiKey}`);
        return res.data.results.map(_transformComicsInfo);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComicsInfo(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0,210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + `.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComicsInfo = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description ? comics.description : 'There is no description',
            pages: comics.pageCount + ' pages',
            thumbnail: comics.thumbnail.path + `.${comics.thumbnail.extension}`,
            homepage: comics.urls[0].url,
            price: comics.prices[0].price ? comics.prices[0].price  + '$' : "NOT AVAILABLE",
            language: comics.textObjects[0] ? comics.textObjects[0].language : "No information"
        }
    }

    return {
            process,
            getAllCharacters,
            getCharacter,
            clearError,
            getAllComics,
            getComic,
            getCharacterByName,
            setProcess
        }
}

export default useMarvelService;