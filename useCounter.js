import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )
    
    const increment = ( value = 1 ) => {
        // la función toma el valor actual del estado cada vez que es llamada
        setCounter( (current) => current + value);
    }

    const decrement = ( value = 1 ) => {
        // if( counter === 0 )  return;  
        setCounter( (current) => current - value);
    }

    const reset = ( ) => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}