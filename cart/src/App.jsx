import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import "./css/Header.css";


class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    )
  };
}

export default App;