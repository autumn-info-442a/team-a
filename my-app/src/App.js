// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes.js';

import './App.css';
import LandingPageView from './components/Landing/LandingPageView.js';
import NavBarView from './components/NavMenu/NavBarView.js';

 function App() {
     return (
       <Router>
         <NavBarView>
           <Route exact path={ROUTES.LANDING} component = {LandingPageView}/>
         </NavBarView>
         <LandingPageView/>
       </Router>
     )
 }

/*
function App() {
  return <div className="App">
    <NavBarView/>
    <LandingPageView/>
  </div>;
  */

export default App;
