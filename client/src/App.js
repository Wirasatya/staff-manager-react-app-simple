import { useContext, useEffect, useState } from "react";
import "./app.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Alert from "./components/alert/ALert";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import { GLOBALTYPES } from "./context/globalTypes";
import { StateContext } from "./context/StateProvider";
import Staff from "./pages/staff";

function App() {
  const [, dispatch] = useContext(StateContext);
  const [matchs, setMatchs] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  const [mobiles, setMobiles] = useState(
    window.matchMedia("(max-width: 426px)").matches
  );

  useEffect(() => {
    const handler = (e) => setMatchs(e.matches);
    window.matchMedia("(max-width: 768px)").addListener(handler);
    dispatch({ type: GLOBALTYPES.TABLET, payload: matchs });
  }, [dispatch, matchs]);

  useEffect(() => {
    const handler = (e) => setMobiles(e.matches);
    window.matchMedia("(max-width: 426px)").addListener(handler);
    dispatch({ type: GLOBALTYPES.MOBILE, payload: mobiles });
  }, [dispatch, mobiles]);

  return (
    <Router>
      <div className="app">
        <Alert></Alert>
        <Header></Header>
        <div className="main">
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/staff">
              <Staff></Staff>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
