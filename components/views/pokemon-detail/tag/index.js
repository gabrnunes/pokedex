import cn from 'classnames';

import styles from './styles.module.css';

export default function Tag({
    type
}) {  
    return (
        <div className={cn([styles.tag, styles[`${type}`]])}>
            <p>{type}</p>
        </div>
    );
};