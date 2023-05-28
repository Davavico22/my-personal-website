import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Resume from './Component/Resume/Resume';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

// import GA from "./GoogleAnalytics";

function App() {
  return (
    <BrowserRouter>
    {/* {GA.init()} */}
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/resume' element = {<Resume/>} />
        <Route element = {<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
