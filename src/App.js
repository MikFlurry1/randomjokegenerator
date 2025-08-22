import logo from './spinningpic.ico';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const displayJoke = () => {
    setJoke("Loading....")
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup + "..." + data.punchline);
      })
  }
  const addToFavorites = () => {
    // var favorites = [];
    // var i = 0;
    // favorites[i] = joke;
    // console.log(favorites);
    // i++; 
    if (joke && !favorites.includes(joke)) {
      const newFavorites = [...favorites, joke];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
    console.log(favorites);
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
        <button id="favoratize" onClick={addToFavorites}>Add this joke to favorites (max 5)</button>
        <h3 id="listtitle">Favorites</h3>
        <ul id="list">
          <li>{favorites[0]}</li>
          <li>{favorites[1]}</li>
          <li>{favorites[2]}</li>
          <li>{favorites[3]}</li>
          <li>{favorites[4]}</li>
        </ul>
        <p>Hope you had fun!!! Visit my <a href="https://github.com/MikFlurry1" id="link">Github</a></p>
      </header>
    </div>
  );
}

export default App;
