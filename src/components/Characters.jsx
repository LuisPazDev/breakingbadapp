import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import '../components/Characters.css'


export const Characters = () => {

  const [ character, setCharacter ] = useState(1);

  const nextCharacter = () => setCharacter(character + 1);
  const backCharacter = () => setCharacter(character - 1)

  const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/characters/${character}`);

  return(

    <div className="container">

    {
      loading
          ? 
            <div> <h2> Loading ... </h2></div>
          : 
            <div>
              <div className="container-img">
                <img src={ data[0].img } alt="Character" />
                <p className="p-title">{ data[0].name } </p>  
              </div>
              <div className="container-title">
                <h5> Occupation: </h5>
                <p className="p-character">{ data[0].occupation } </p>
                <h5> NickName: </h5>
                <p className="p-character"> { data[0].nickname } </p>
                <h5> Status: </h5>
                <p className="p-character"> { data[0].status } </p>
                <h5> Portrayed: </h5>
                <p className="p-character"> { data[0].portrayed } </p>  
              </div>

              <div className="container-button">
                <button className="btn-increment" onClick={ nextCharacter }
                > Next </button> 
                { 
                  character > 1 && 
                    <button id="btn" className="btn-decrement" onClick={ backCharacter }
                    > Backward </button>
                }
              </div>    
            </div>   
    } 
    </div>

  )
};