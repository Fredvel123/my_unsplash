import { Input } from "../../styles/login/form";

export default function Inputs({text, type, state, setState}) {
    const handlerChange = e => {
        setState(e.target.value);
    }
    return (
        <>
            <Input 
                type={type} 
                placeholder={text}
                onChange={handlerChange} />
        </>
    )
}