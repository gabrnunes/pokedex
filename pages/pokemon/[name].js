import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAllPokemon, getOnePokemon } from '../../lib/pokeapi';
import Header from '../../components/presentation/header';
import Loading from '../../components/presentation/loading';
import PokemonDetail from '../../components/views/pokemon-detail';

export default function Pokemon({ pokemon }) {
    const router = useRouter()

    if (router.isFallback) {
        return <Loading />
    }

    return (
        <>
            <Header>
                <Link href='/all/1'>
                    <a className="default-link">
                        Gotta Catch 'Em All!
                    </a>
                </Link>
            </Header>
            <PokemonDetail pokemon={pokemon} />
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const pokemon = await getOnePokemon(params.name);

    if (!pokemon) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            pokemon
        }
    };
};

export async function getStaticPaths() {
    const pokemon = await getAllPokemon(1);

    const paths = pokemon.data.map(({ name }) => {
        return {
            params: {
                name: name
            }
        };
    });

    return {
        fallback: true,
        paths
    }
};