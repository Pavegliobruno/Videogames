import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, orderByGenre, orderByCreator, orderAsc, orderDesc } from "../../actions/index";
import "./Filter.css";

export function Filter() {
  const dispatch = useDispatch()
  const genres = useSelector((store) => store.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, []);


  // Filtrado por genre
  const handleFilter = (e) => {
    dispatch(orderByGenre(e.target.value));
  };


  // Filtrado por API/DB
  const handleCreator = (e) => {
    dispatch(orderByCreator(e.target.value));
  };


  // Ordenado
  const handleOrder = (e) => {
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(orderAsc(e.target.value));
    } else {
      dispatch(orderDesc(e.target.value));
    }
  };

  return (
    <div className="filter">
      <div>
        <div>Filter by Genre</div>
        <select onChange={(e) => handleFilter(e)}>
          <option default>All</option>
          {genres.map((G) => (
            <option value={G.name}>{G.name}</option>
          ))}
        </select>
      </div>
      <div>
        <div>Filter by Creator</div>
        <select onChange={(e) => handleCreator(e)} >
          <option default>All</option>
          <option value="Api">Api videogames</option>
          <option value="Created">User videogames</option>
        </select>
      </div>
      <div>
        <div>Order</div>
        <select onChange={(e) => handleOrder(e)}>
          <option default>Select</option>
          <option value="asc_name">Alphabetically (A-Z)</option>
          <option value="desc_name">Alphabetically (Z-A)</option>
          <option value="asc_rating">Rating (Lower-Higher)</option>
          <option value="desc_rating">Rating (Higher-Lower)</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;