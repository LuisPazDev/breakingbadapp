import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import '../components/BreakingBadApp.css'


export const BreakingBadApp = () => {

  const [ counter, setCounter ] = useState(1);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1)

  const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

  return(
    <div className="container">

        <span className="img"> </span>  

        {
          loading
              ? 
                <div> <h2> Loading ... </h2></div>
              : 
                <div>
                  <div className="container-quote">
                    <p className="p-quote"> { data[0].quote } </p>
                    <p className="p-author"> { data[0].author } </p>
                  </div>

                  <div className="container-button">
                    <button className="btn-increment" onClick={ incrementCounter }
                    > Next </button> 
                    { 
                      counter > 1 && 
                        <button id="btn" className="btn-decrement" onClick={ decrementCounter }
                        > Backward </button>
                    }
                  </div>    
                </div>   
        } 
    </div>
  )
}; 