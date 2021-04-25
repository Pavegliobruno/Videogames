import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createVideogame, getGenres, getVideogames } from "../../actions/index";
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

    const randomPlatforms = ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox',]

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

    useEffect(() => {
        dispatch(getGenres());
    }, []);

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
            alert("Hey! Don't forget the name")
            return
        }
        if (!obj.description) {
            alert("Hey! Don't forget the description")
            return
        }

        dispatch(createVideogame(obj));
        e.target.reset();
        alert('Videogame created successfully!');
        dispatch(getVideogames())

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

            <div className="divForm2">
                <div>
                    <label className="text-label">Name</label>
                    <input
                    className="label"
                    type="text"
                    name="name"
                    value={state.name}
                    ></input>
                </div>
                <div>
                    <label className="text-label">Description</label>
                    <input
                    className="label"
                    type="text"
                    name="description"
                    value={state.description}
                    ></input>
                </div>
                <div>
                    <label className="text-label">Released</label>
                    <input
                    className="label"
                    type="date"
                    name="released"
                    value={state.released}
                    ></input>
                </div>
                <div>
                    <label className="text-label">Rating</label>
                    <input
                    className="label"
                    type="number"
                    name="rating"
                    value={state.rating}
                    ></input>
                </div>
                </div>

                <div className="checkboxs">
                    <div className="genn">
                        <label className="text-label">Genres</label>
                        <div className="divGen">
                            <ul className="ulGen">
                                {genres.map((gen) => (
                                <div className="liGen" key={gen.name}>
                                    <input
                                    className="input"
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="platt">
                        <label className="text-platforms">Platforms</label>
                        <ul className="ulPla">
                            {randomPlatforms.map((P) => (
                            <div className="liPla" key={P}>
                                <input
                                className="input"
                                type="checkbox"
                                name="platforms"
                                value={P}
                                ></input>
                                <label name={P}>{P}</label>
                            </div>
                            ))}
                        </ul>
                    </div>
                    <button className="button" type="submit">
                    Upload videogame
                    </button>
                </div>
            </div>
        </form>
    </div>
);
}

