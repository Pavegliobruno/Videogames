import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, resetAll } from "../../actions/index";
import Videogames from "../Videogames/Videogames";
import { Pagination } from "../../components/Pagination/Pagination";
import { Filter } from "../../components/Filter/Filter";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);


  useEffect(() => {
    dispatch(resetAll());
    dispatch(getVideogames());
  }, []);


  // Filtrado y Ordenado
  let allVideogames;
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames.slice())
    : (allVideogames = filteredVideogames.slice());
    

  // Paginacion
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