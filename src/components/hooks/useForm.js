import { useState } from "react";

// Quiero manejar el estado de mis formulari
export const useForm = (initialState = {}) => { 

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    // Retorna un array 
    return [values, handleInputChange, reset];
}