import { Link } from "react-router-dom";
import "./LandingPage.css"
          import { getVideogames, resetAll } from "../../actions/index";
          
            import { useDispatch } from "react-redux";
            import React, { useEffect } from "react";
          

export default function LandingPage() {

          const dispatch = useDispatch();
                useEffect(() => {
                  dispatch(resetAll());
                  dispatch(getVideogames());
                }, []);


  return (
    <div class="background">
      <div class="title" >
        <h2>Welcome to Videogames</h2>
        <Link to="/home">
          <button type="submit">Enter</button>
        </Link>
      </div>
      
    </div>
  );
}


