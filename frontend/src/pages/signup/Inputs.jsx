export default function Inputs({type, text}) {
    return(
        <>  
            
            <input 
                type={type} 
                placeholder={text} />
        </>
    )
}