import React from "react";
import Card from "../../components/Card/Card";
import "./Videogames.css"

export default function Videogames (props) {
  return (
    <div className="showing">
      {props.videogames.length > 0 ?
      props.videogames.map((data) => (<Card data={data} />))
      : <h1>Loading...</h1>
      }
    </div>
  );
};

