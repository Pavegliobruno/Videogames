import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVideogame, getGenres } from "../../actions/index";
import "./Form.css";

function Form() {
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
    const [platforms, setPlatforms] = useState([]);

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

    //Validation
    if (!obj.name) {
        alert('Please, enter a name')
        return
    }
    if (!obj.description) {
        alert('Dont forget the description of your videogame')
        return
    }

    dispatch(createVideogame(obj));
    e.target.reset();
    alert('Videogame created successfully!');

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
        <header>
            <h1 id="title">Create your videogame</h1>
        </header>
        <form
            id="survey-form"
            className="form"
            noValidate
            onChange={(e) => ChangeInput(e)}
            onSubmit={(e) => handleSubmit(e)}
        >
            <div className="divForm">
                <div>
                    <label className="text-label">Name</label>
                    <input
                    className="btm"
                    type="text"
                    name="name"
                    value={state.name}
                    ></input>
                </div>
                <div>
                    <label className="text-label">Description</label>
                    <input
                    className="btm"
                    type="text"
                    name="description"
                    value={state.description}
                    ></input>
                </div>
                <div>
                    <label className="text-label">Released</label>
                    <input
                    className="btm"
                    type="date"
                    name="released"
                    value={state.released}
                    ></input>
                </div>
                <div>
                    <label className="text-label">Rating</label>
                    <input
                    className="btm"
                    type="number"
                    name="rating"
                    value={state.rating}
                    ></input>
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
                
                </div>
                <button className="submitForm" type="submit">
                    Upload videogame
                </button>
            </div>
        </form>
    </div>
);
}

export default Form;