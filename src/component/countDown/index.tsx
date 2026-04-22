import { useContext } from 'react';
import styles from './styles.module.css';
import { TaskContext } from '../../contexts/taskContext';

export function CountDown(){
    const taskContex = useContext(TaskContext)
    console.log('teste', taskContex);
    
    return <h1 className={styles.container}>00:00</h1>
}