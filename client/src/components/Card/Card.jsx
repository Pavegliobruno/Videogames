import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import "./Card.css"

function Card({ data }) {

return (
    <div className="card">
        <div className="name">{data.name}</div>
        <Link to={`/videogames/${data.id}`}>
            {data.image === null || !data.image ?
            <NotFound image={"noimage"} />
            : <img className="img" src={data.image} alt={data.name} />}
        </Link>
        <div className="genres">It's a {data.genres} game.</div>
    </div>
);
}

export default Card;