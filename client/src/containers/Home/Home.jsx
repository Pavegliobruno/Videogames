import React, { useEffect, useState } from "react"; 
import { Link, NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../actions/index";
import "./Home.css"


export default function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((store) => store.videogames)

  useEffect(() => {
    dispatch(getVideogames());
  }, []);


  return (   
    <div className="home">
        <h2>All our Videogames!</h2>
        <div className="jueguitos">
          {videogames.map((vg) => (
            <div key={vg.name}>
              <h3>{vg.name}</h3>
              <NavLink to={`/videogames/${vg.id}`}>
                <img src={vg.image}></img>
               
              </NavLink>
              <h5>{vg.genres.join(', ')}</h5>
            </div>
          ))}
        </div>
        
        <h5 className="signature">Built by Bruno Paveglio</h5>
        
    </div>
  );
}

