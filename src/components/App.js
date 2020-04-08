import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SingleMovie from '../pages/SingleMovie';
import Main from '../pages/Main';


const App = () => {
    return (
    <div className="App">
      <>
      <Header text="Movie Library"/>
      <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/single-movie/" component={SingleMovie}/>
      </Switch>
      </Router>
      <Footer text='Copyright © 2019 - 2025' />
      </>
    </div>
  );
};

export default App;