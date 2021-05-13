import Image from 'next/image';

import Tag from './tag';
import styles from './styles.module.css';

export default function PokemonDetail({
    pokemon
}) {

    return (
        <div className={styles.container}>
            <Image src={pokemon.images.other.dream_world.front_default} width="400" height="400" />
            <div className={styles.details}>
                <h2>#{pokemon.id}</h2>
                <h1 className={styles.title}>{pokemon.name}</h1>

                <div className={styles.tagList}>
                    {pokemon.types.map(t => (
                        <Tag type={t.type.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};