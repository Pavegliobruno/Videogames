import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createVideogame, getGenres } from "../../actions/index";
import "./Create.css";

export default function Create() {
    const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);

    const [state, setState] = useState({
        name: "",
        description: "",
        released: "",
        rating: 0,
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        dispatch(getGenres());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const randomPlatforms = ["PC", "iOS", "Android", "macOS",  "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"]

    const ChangeInput = (e) => {
        if (e.target.name === "genres" || e.target.name === "platforms") {
        const arr = state[e.target.name];
        setState({
            ...state,
            [e.target.name]: arr.concat(e.target.value),
        });
    } else {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
        name: state.name,
        description: state.description,
        released: state.released,
        rating: state.rating,
        genres: state.genres,
        platforms: state.platforms,
        };

        // Validaciones
        if (!obj.name) {
            alert("Hey! Don't forget the name.")
            return
        }
        if (!obj.description) {
            alert("Hey! Don't forget the description.")
            return
        }if (obj.rating > 5) {
            alert("Hey! The rating should be less than 5.")
            return
        }

        dispatch(createVideogame(obj));
        e.target.reset();
        alert("Videogame created successfully!");
        /* dispatch(getVideogames()) */

        setState({
            name: "",
            description: "",
            released: "",
            rating: 0,
            genres: [],
            platforms: [],
        });
    };

return (
    <div className="container">
        <h1>Create you Videogame!</h1>
        <form
            id="survey-form"
            className="form"
            noValidate
            onChange={(e) => ChangeInput(e)}
            onSubmit={(e) => handleSubmit(e)}
        >
            <div>
                <div className="divTitles">
                    <div>
                        <label>-Name-</label>
                        <input
                        className="label"
                        type="text"
                        name="name"
                        value={state.name}
                        ></input>
                    </div>
                    <div>
                        <label>-Description-</label>
                        <input
                        className="label"
                        type="text"
                        name="description"
                        value={state.description}
                        ></input>
                    </div>
                    <div>
                        <label>-Released-</label>
                        <input
                        className="label"
                        type="date"
                        name="released"
                        value={state.released}
                        ></input>
                    </div>
                    <div>
                        <label>-Rating-</label>
                        <input
                        className="label"
                        type="number"
                        name="rating"
                        value={state.rating}
                        ></input>
                    </div>
                </div>
                <div className="checkboxs">
                    <div className="checks">
                        <label>-Genres-</label>
                        <div>
                            <div>
                                {genres.map((gen) => (
                                <div key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="checks">
                        <label>-Platforms-</label>
                        <div >
                            {randomPlatforms.map((P) => (
                            <div key={P}>
                                <input
                                type="checkbox"
                                name="platforms"
                                value={P}
                                ></input>
                                <label name={P}>{P}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                    <button className="button" type="submit">
                        Upload videogame
                    </button>
                </div>
            </div>
        </form>
        <Link to="/home">
            <button className="button2" type="submit">🡸</button>
        </Link>
    </div>
);
}

