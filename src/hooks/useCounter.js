import { useState } from "react";

export const { useCounter } = () => {

  const [ counter , setCounter] = useState(1);

  const incrementCounter = setCounter( counter + 1)

  const dicrementCounter = setCounter( incrementCounter - 1 )

};






