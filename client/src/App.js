import React from "react";
import LoginLayout from "./pages/LoginLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LoginLayout} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      </Switch>
    </Router>


      // <LoginLayout />
    
    // <Home />
    // <Signup />

  );
}

export default App;
