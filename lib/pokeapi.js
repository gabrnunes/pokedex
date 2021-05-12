import axios from 'axios';
import slugify from 'slugify';
import { getPagesInfo } from '../utils/pagesInfo';

export async function getAllPokemon(pageNumber) {
    const pagesInfo = getPagesInfo(pageNumber);

    const data = await axios
            .get(`${process.env.API_URL}/pokemon`, {
            params: {
                limit: pagesInfo.limit,
                offset: pagesInfo.offset
            }
        }).then(result => {
            const results = result.data.results;

            let promise = results.map(async (result) => {
                const pokemonData = await axios.get(result.url)
                    .then((result) => {
                        return  {
                            id: result.data.id,
                            slug: slugify(result.data.name),
                            name: result.data.name,
                            image: result.data.sprites.front_default,
                            types: result.data.types
                        };
                    })

                return pokemonData;
            })

            return Promise.all(promise);
        });

    const allPokemon = {
        data,
        nextPage: pagesInfo.nextPage
    };

    return allPokemon || [];
}

export async function getOnePokemon(numberOrName) {
    if (!numberOrName) {
        return;
    }

    const data = await axios
        .get(`${process.env.API_URL}/pokemon/${numberOrName}`)
        .then(result => {
                return  {
                    id: result.data.id,
                    slug: slugify(result.data.name),
                    name: result.data.name,
                    image: result.data.sprites.front_default,
                    types: result.data.types
                };
            }
        ).catch(e => {
            return undefined;
        });

    return data || undefined;
}