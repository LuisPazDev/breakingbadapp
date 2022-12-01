import { useFetch} from "../hooks/useFetch";
import { useState } from "react";
import '../components/Episodes.css';


export const Episodes = () => {

  const [ episode, setEpisode ] = useState(1);

  const nextEpisode = () => setEpisode(episode + 1);
  const backEpisode = () => setEpisode(episode - 1)

  const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/episodes/${episode}`);


return (
  <div className="container">

    <span className="img-episodes"></span>
  {
    loading
        ? 
          <div> <h2> Loading ... </h2></div>
        : 
          <div className="container-episodes">
              <h5> Episode </h5>
              <p className="p-title">{ data[0].title } </p> 
              <h5> Season: </h5>
              <p className="p-episodes">{ data[0].season } </p>
              <h5> Cap: </h5>
              <p className="p-episodes"> { data[0].episode } </p>
              <h5> Released: </h5>
              <p className="p-episodes"> { data[0].air_date } </p>
            <div className="container-button">
              <button className="btn-increment" onClick={ nextEpisode }
              > Next </button> 
              { 
                episode > 1 && 
                  <button id="btn" className="btn-decrement" onClick={ backEpisode }
                  > Backward </button>
              }
            </div>    
          </div>          
  } 
  </div>
)

};