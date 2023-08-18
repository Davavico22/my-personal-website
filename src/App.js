import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Resume from "./Component/Resume/Resume";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import AppAdsTxt from './Component/AppAds/AppAds';
// import GA from "./GoogleAnalytics";

function App() {
  return (
    <BrowserRouter>
    {/* {GA.init()} */}
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/resume' element = {<Resume/>} />
        <Route exact path='/app' element = {<AppAdsTxt/>}/>
        <Route exact path='/verificacion' element = {<VerificacionTxt/>}/>
        <Route element = {<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
