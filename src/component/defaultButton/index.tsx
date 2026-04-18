import styles from './defaultButton.module.css'

type defaultButtonProps = { 
    icon: React.ReactNode
    color?: 'green'| 'red'
} & React.ComponentProps<'button'> // intersection

export function DefaultButton({ icon, color='green', ...props }: defaultButtonProps){
    return (
        <>
            <button type='button' className={`${styles.button} ${styles[color]}`} {...props}>
                {icon}
            </button>
        </>
    )
}