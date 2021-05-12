import Link from 'next/link';
import { useRouter } from 'next/router'

import PokemonCard from '../../presentation/pokemon-card';
import styles from './styles.module.css';

export default function PokemonListView({
    pokemon, nextPage
}) {  
    const router = useRouter();
    
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {pokemon.map(p => (
                    <PokemonCard name={p.name} type={p.types[0].type.name} image={p.image} />
                ))}
            </div>
            <div className={styles.pagination}>
                {(!nextPage || nextPage > 2) && (
                    <Link href={`/all/${router.query.page-1}`}>
                        <a>&lsaquo; Página anterior</a>
                    </Link>
                )}
                {nextPage && (
                    <Link href={`/all/${nextPage}`}>
                        <a>Próxima página &rsaquo;</a>
                    </Link>
                )}
            </div>
        </div>
    );
};