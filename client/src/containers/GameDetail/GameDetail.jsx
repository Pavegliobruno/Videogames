import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById, resetAll } from "../../actions/index";
import "./GameDetail.css";

function GameDetail({ id }) {
  const dispatch = useDispatch();
  const videogame = useSelector((store) => store.searchVideogame);
  console.log(videogame)

  useEffect(() => {
    /* dispatch(resetAll()); */
    dispatch(getVideogameById(id));
  }, []);

  return (    
    <div className="full">
      <div className="image">
            <img src={videogame.image} alt={videogame.name} />
            <div>
              <h1>{videogame.name} </h1>
              <h5>({videogame.released})</h5>
            </div>
            
      </div>
      <div className="details">

        <div className="text">
          <h2>About this game</h2>
          <p>{videogame.description}</p>
        </div>

        <div className="Genres">
          <div className="genres">
          It's an {videogame.genres} game ranked at {videogame.rating} points.
            
          </div>
        </div>

        <div className="Platforms">
          <div className="platforms">
            <p>Played it at {videogame.platforms}.</p>
          </div>
        </div>

                                         
        
        
      </div>
    </div>    
  );
}

export default GameDetail;