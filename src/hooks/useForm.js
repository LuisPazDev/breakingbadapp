import { useState, useEffect } from "react";

export const useForm = ( initialForm ) => {

  const [ inputValue , setInputValue ] = useState ( initialForm );


  const onValue = ({ target }) => {

    const { name, value }  = target 

    setInputValue({
      ...inputValue,
      [ name ]: value
    });
  };

  const onResetForm = () => {
    setInputValue( initialForm )
  };

  return {
    onValue,
    onResetForm
  }
  
};