import { Input } from "../../styles/signup/form";

export default function Inputs({type, text, state, setState, expression, callback}) {
    const validations = () => {
        if(expression) {
          if (expression.test(state.value)) {
            setState({...state, isValid: true})
          } else {
            setState({...state, isValid: false})
          }
        }
		if(state.value.length === 0) {
			setState({...state, isValid: null})
		}
		if(callback) {
			callback();
		}
      }
    const handlerInput = e => {
        setState({...state, value: e.target.value})
    }
    return(
        <>  
            <Input
				state={state} 
                type={type} 
                placeholder={text}
                onKeyUp={validations}
                onBlur={validations}
                onChange={handlerInput} />
            
        </>
    )
}