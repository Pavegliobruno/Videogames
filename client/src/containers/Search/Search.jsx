import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogames, resetAll } from "../../actions/index";
import Videogames from "../Videogames/Videogames";
import { useParams } from "react-router";
import { Pagination } from "../../components/Pagination/Pagination";
import "./Search.css";


export default function Search() {

  const searchVideogame = useSelector((state) => state.searchVideogameByName);


  let { name } = useParams()


  //Pagination
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(9);

  useEffect(() => {
    /* dispatch(resetAll()); */
    dispatch(searchVideogames(name));
  }, [name]);

  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  let indexLastPage = page * videogamesPerPage;
  // index of the last element of each page
  let indexFirtsPage = indexLastPage - videogamesPerPage;
  // index of the first element of each page
  let currentPage = searchVideogame.slice(indexFirtsPage, indexLastPage);
  // videogames of the current page

  return (
    <div className="search">
        <h1>Results with {name}.</h1>
        <Videogames videogames={currentPage} />
        <Pagination
          videogamesPerPage={videogamesPerPage}
          totalVideogames={searchVideogame.length}
          paginate={paginate}
        />
    </div>
  )
};

