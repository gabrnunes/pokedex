import PokemonListView from '../../components/views/pokemon-list';
import { N_PER_PAGE, TOTAL_POKEMON } from '../../utils/constants';
import { getAllPokemon } from '../../lib/pokeapi';
import Header from '../../components/presentation/header';

export default function All({ pokemon }) {
    return (
        <>
            <Header title="Todos os Pokémon" />
            <PokemonListView pokemon={pokemon.data} nextPage={pokemon.nextPage} />
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const page = params.page || 1;
    const pokemon = await getAllPokemon(page);

    return {
        props: {
            pokemon
        }
    };
};

export async function getStaticPaths() {
    const totalPages = Math.ceil(TOTAL_POKEMON / N_PER_PAGE);
    let paths = [];

    for (let index = 1; index <= totalPages; index++) {
        paths = [
            ...paths,
            { params: { page: `${index}` }}
        ];
    }

    return {
        fallback: false,
        paths
    }
};