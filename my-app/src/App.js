import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes.js';

import './App.css';
import landing from './components/Landing/landing.js';
import NavBar from './components/NavBar/navbar.js';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path={ROUTES.LANDING} component={landing}/>
      </Router>
    )
  }
}

/*
 function App() {
     return (
       <Router>
         <navbar />
           <Route exact path={ROUTES.LANDING} component = {landing}/>
        
         <landing/>
       </Router>
     )
 }
*/
  

export default App;
