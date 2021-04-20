import "./App.css";
import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage.jsx"
import Home from "./containers/Home/Home.jsx"
import NavBar from "./components/Navbar/Navbar.jsx"
import Form from "./components/Form/Form.jsx"

import GameDetail from "./containers/GameDetail/GameDetail.jsx";


function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />

        <Route path="/videogames" component={NavBar} />
        <Route
          exact path="/videogames/:id"
          render={({ match }) => < GameDetail id={match.params.id} />}
        />

        <Route path="/create" component={NavBar} />
        <Route path="/create" exact component={Form} />

        <Route path="/about" component={NavBar} />
        
      </React.Fragment>
    </div>
  );
}

export default App;