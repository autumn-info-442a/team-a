// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LandingPageView from './LandingPageView';
import NavBarView from './NavBarView';

function App() {
  return <div className="App">
    <NavBarView/>
    <LandingPageView/>
  </div>;
}

export default App;
