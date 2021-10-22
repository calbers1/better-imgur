import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
