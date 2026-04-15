import type { AppProps } from '../../App';

import styles from './styles.module.css';

export function Heading({ children}: AppProps){

    return (
        <>
            <h1 className={`${styles.heading} ${styles.texto}`}>
                {children}
            </h1>
        </>
    )
}