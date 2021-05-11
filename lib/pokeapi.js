import axios from 'axios';
import slugify from 'slugify';
import { N_PER_PAGE } from './constants';

export async function getAllPokemon(pageNumber) {
    const limit = N_PER_PAGE;
    const offset = pageNumber > 0 ? ( ( pageNumber - 1 ) * limit ) : 0;

    const allPokemon = await axios
            .get(`${process.env.API_URL}/pokemon`, {
            params: {
                limit: limit,
                offset: offset
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

    return allPokemon || [];
}