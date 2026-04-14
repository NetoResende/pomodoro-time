import type { AppProps } from '../../App';

import styles from './Heading.module.css';

export function Heading({ descricao}: AppProps){

    return (
        <>
            <h1 className={`${styles.heading} ${styles.texto}`}>
                {descricao}
            </h1>
        </>
    )
}