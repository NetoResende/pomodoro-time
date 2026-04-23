
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/taskContext';

export function CountDown(){
    const {state} = useTaskContext();
    
    const {formattedsecondsRemaining} = state;
    
    return <h1 className={styles.container}>{formattedsecondsRemaining}</h1>
}