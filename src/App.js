import logo from './spinningpic.ico';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    var displayJoke = function() {
      fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var joke = document.getElementById("joke-display");
        var mainJoke = data.setup;
        console.log(mainJoke);
        var punchline = data.punchline;
        console.log(punchline);
        joke.textContent = "The random joke is : " + mainJoke + "..." + punchline;
      })
    }
    var button = document.getElementById("generate");
    button.addEventListener("click", displayJoke);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="title">RANDOM JOKE GENERATOR!!!!!!!</h1>
        <button id="generate">GENERATE JOKE</button>
        <p id="joke-display">
          The random joke is :
        </p>
        <p>Hope you had fun!!! Visit my <a href="https://github.com/MikFlurry1" id="link">Github</a></p>
      </header>
    </div>
  );
}

export default App;
