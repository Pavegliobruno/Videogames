import React from "react";
import "./Pagination.css";

export const Pagination = ({ videogamesPerPage, totalVideogames, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideogames / videogamesPerPage); i++) {
    //The Math.ceil () function returns the closest integer greater than or equal to a given number.
    pageNumbers.push(i); // Number of pages
  }

  return (
    <nav className="navPag">
        {pageNumbers.map((num) => (
          <div key={num} className="item">
            <button
              onClick={(e) => paginate(e, num)}
              className="page-link"
            >
              {num}
            </button>
            
          </div>
        ))}
    </nav>
  );
};