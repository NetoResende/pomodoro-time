import type { HomeProps } from '../../pages/home';
import styles from './styles.module.css';

export function CountDown({state}: HomeProps){
    const { formattedsecondsRemaining } = state;
    return <h1 className={styles.container}>{formattedsecondsRemaining}</h1>
}