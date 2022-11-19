import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">
    <Weather defaultCity ="Toronto"/>
    <footer>
  This project was created by <a href ="https://www.linkedin.com/in/sasha-munroe-446a14a1/" target="_blank" rel="noreferrer">Sasha Munroe</a> and is {""}
  <a href = "https://github.com/smunroe34/react-assignment"
  target= "_blank" rel="noreferrer">
    open-sourced on Github
  </a>
  </footer>
    </div>
    </div>
  );
}


