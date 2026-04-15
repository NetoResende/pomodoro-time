import type { AppProps } from '../../App'
import styles from './styles.module.css'

export function Container ({ children }:AppProps){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                { children }
            </div>
        </div>
    )
}