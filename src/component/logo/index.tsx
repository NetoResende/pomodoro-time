import { TimerIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Logo(){

    return (
        <>
            <h1 className={`${styles.logo} ${styles.texto}`}>
                <a href="##" className={styles.logoLink}>
                    <TimerIcon/>
                    <span>tarefas </span>
                </a>
                
            </h1>
        </>
    )
}