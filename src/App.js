import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Resume from "./Component/Resume/Resume";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import GA from "./GoogleAnalytics";

function App() {
  return (
    <BrowserRouter>
    {GA.init()}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume} />
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
