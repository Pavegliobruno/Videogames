import React from 'react';
import { Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage.jsx"
import Home from "./containers/Home/Home.jsx"
import NavBar from "./components/Navbar/Navbar.jsx"
import Create from "./components/Create/Create.jsx"
import About from "./components/About/About.jsx"
import Search from "./containers/Search/Search";
import GameDetail from "./containers/GameDetail/GameDetail.jsx";
import "./App.css";


function App() {

  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />

        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />

        <Route path="/results" component={NavBar} />
        <Route
          exact path="/results/:name"
          render={({ match }) => <Search props={match.params} />}
        />

        <Route path="/videogames" component={NavBar} />
        <Route
          exact path="/videogames/:id"
          render={({ match }) => < GameDetail id={match.params.id} />}
        />

        <Route path="/create" component={NavBar} />
        <Route path="/create" exact component={Create} />

        <Route path="/about" component={NavBar} />
        <Route path="/about" component={About} />
        
      </React.Fragment>
    </div>
  );
}

export default App;