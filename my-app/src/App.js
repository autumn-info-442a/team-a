import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes.js';

import './App.css';
import landing from './components/Landing/landing';
import NavBar from './components/NavBar/navbar';
import submitOrg from './components/SubmitOrg/submitOrg'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path={ROUTES.LANDING} component={landing}/>
        <Route exact path={ROUTES.SUBMIT_ORG} component={submitOrg}/>
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
