import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Videogames from "../Videogames/Videogames";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filter } from "../../components/Filter/Filter";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  //const loading = useSelector((state) => state.loading);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);
  let allVideogames;


  // Filter and Order
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames.slice())
    : (allVideogames = filteredVideogames.slice());
    

  //Pagination
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  let indexLastCard = page * videogamesPerPage;
  // index of the last element of each page
  let indexFirtsCard = indexLastCard - videogamesPerPage;
  // index of the first element of each page
  let currentPage = allVideogames.slice(indexFirtsCard, indexLastCard);
  // videogames of the current page

  return (
    <div className="home">
      <Filter />
      <Videogames videogames={currentPage} />
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogames={allVideogames.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;