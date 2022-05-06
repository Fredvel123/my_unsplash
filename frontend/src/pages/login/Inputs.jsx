export default function Inputs({text, type, state, setState}) {
    const handlerChange = e => {
        setState(e.target.value);
    }
    return (
        <>
            <input 
                type={type} 
                placeholder={text}
                onChange={handlerChange} />
        </>
    )
}