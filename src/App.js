import logo from './spinningpic.ico';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState("");

  const displayJoke = () => {
    setJoke("Loading....")
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data.setup + "..." + data.punchline);
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="title">RANDOM JOKE GENERATOR!!!!!!!</h1>
        <button id="generate" onClick={displayJoke}>GENERATE JOKE</button>
        <p id="joke-display">
          The random joke is : {joke}
        </p>
        <p>Hope you had fun!!! Visit my <a href="https://github.com/MikFlurry1" id="link">Github</a></p>
      </header>
    </div>
  );
}

export default App;
