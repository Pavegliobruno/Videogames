import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Signature.css"

function NavBar() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

    return (
        <div>
        <hr/>
        <h5>Built by Bruno Paveglio</h5>
        </div>
    );
}


export default NavBar;