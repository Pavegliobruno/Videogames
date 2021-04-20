import React from "react";
import { Link } from "react-router-dom";
//import "./Card.css"

function Card({ data }) {

return (
    <div className="card">
        <div className="image"> 
        <img src={data.image} alt={data.name} />
        </div>
        <div className="detail"> 
            <h3>{data.name}</h3>
            <h4>{data.genres && data.genres.join(', ')}</h4>
            <div className="button">
                <Link to={`/videogames/${data.id}`}>
                    <button type="submit">More info!</button>
                </Link>
            </div>
        </div>
    </div>
);
}

export default Card;