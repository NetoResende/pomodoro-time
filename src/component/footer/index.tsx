import styles from './styles.module.css';

export function Footer(){

    return (
        <footer className={styles.footer}>
            <a>Entenda como funciona a técnica pomodoro</a>
            <a href="##">
                Tarefas pomodoro &copy; {new Date().getFullYear()} - feito de coração!
            </a>
        </footer>
    )
}