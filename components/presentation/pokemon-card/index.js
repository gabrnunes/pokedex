import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import styles from './styles.module.css';

export default function PokemonCard({
    name, type, image, style
}) {  
    return (
        <Link href={`/pokemon/${name}`}>
            <a className={cn([styles.card, styles[`${type}`], style])}>
                <Image className={styles.image} src={image} width="64" height="64" loading="lazy" />
                <h2 className={styles.title}>{name}</h2>
                <p>{type}</p>
            </a>
        </Link>
    );
};