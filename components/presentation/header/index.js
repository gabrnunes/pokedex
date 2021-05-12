import Link from 'next/link';

import styles from './styles.module.css';

export default function Header({
    title
}) {  
    return (
        <div className={styles.container}>
            <Link href="/">
                <h1>Pokedex</h1>
            </Link>
            {title && <h2>{title}</h2>}
        </div>
    );
};