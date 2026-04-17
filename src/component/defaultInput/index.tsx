import styles from './defaultInput.module.css'

type defaultInputProps = { 
    id: string 
    labelText: string
} & React.ComponentProps<'input'> // intersection

export function DefaultInput({ id, type, labelText, ...rest }: defaultInputProps){
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input 
                className={styles.input} 
                type={type} 
                id={id}
                {...rest} />
        </>
    )
}