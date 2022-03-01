import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/Navbar";
import Starship from "./components/Starship";

function App() {
  const [starShip, setStarShip] = useState([]);

  //fetch api w/ axios
  useEffect(() => {
    async function fetchStarship() {
      let res = await axios.get("https://swapi.dev/api/starships/9/");
      let data = await res.json;
      setStarShip(data.results);
    }
    fetchStarship();
  }, []);
  // console.log("starShip", starShip);
  // console.log("data", starShip);
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            {/* Pass in the starShip State! In order to pass Props on Starship.js*/}
            <Starship dataShip={starShip} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
