type defaultInputProps = { id: string } & React.ComponentProps<'input'> // intersection

export function DefaultInput({ id, type }: defaultInputProps){
    return (
        <>
            <label htmlFor={id}>task</label>
            <input type={type} id={id} />
        </>
    )
}