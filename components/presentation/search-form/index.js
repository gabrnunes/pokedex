import Link from 'next/link';

import styles from './styles.module.css';

export default function SearchForm({
    onSubmit, onChange, loading
}) {  
    return (
        <>
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.loading}>
                {loading && <img src="/loading-pika.gif" width="45" height="32" />}
            </div>
            <input className={styles.input} type="text" placeholder="Enter a Pokémon name or number" onChange={onChange} />
            <button className={styles.button} type="submit">Search</button>
        </form>
        <Link href='/all/1'>
            <a className="default-link">
                Gotta Catch 'Em All!
            </a>
        </Link>
        </>
    );
};