import styles from './styles.module.css';

type cotainerPropsapp = {
    children: React.ReactNode
}

export function Container ({ children }:cotainerPropsapp){
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                { children }
            </div>
        </div>
    )
}