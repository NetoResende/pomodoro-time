
import { useTaskContext } from '../../contexts/taskContext/useTaskContext';
import styles from './styles.module.css';


export function CountDown(){
    const {state} = useTaskContext();
    
    const {formattedsecondsRemaining} = state;
    
    return <h1 className={styles.container}>{formattedsecondsRemaining}</h1>
}