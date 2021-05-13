import Link from 'next/link';

import styles from './styles.module.css';

export default function SearchForm({
    onSubmit, onChange, loading
}) {  
    return (
        <>
        <form className={styles.form} onSubmit={onSubmit}>
            <input className={styles.input} type="text" placeholder="Enter a Pokémon name or number" onChange={onChange} />
            <button className={styles.button} type="submit">
                {loading ? <img src="/loading-pika.gif" width="24" height="16" /> : <>Search</>}
            </button>
        </form>
        <Link href='/all/1'>
            <a className="default-link">
                Gotta Catch 'Em All!
            </a>
        </Link>
        </>
    );
};