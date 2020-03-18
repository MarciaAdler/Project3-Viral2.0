import React from "react";
import LoginLayout from "./pages/LoginLayout";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/assets/styles/Styles.css";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginLayout} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/industries" component={Industries} />
      </Switch>
    </Router>

  );
}

export default App;
