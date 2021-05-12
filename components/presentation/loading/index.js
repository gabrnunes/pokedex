import styles from './styles.module.css';

export default function Loading() {  
    return (
        <div className={styles.container}>
            <img src="/loading.gif" width="64" height="64" />
        </div>
    );
};