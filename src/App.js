// React Homework
// Day 01 In Class Challenge
// Allen P.
// 07/03/2022

// App.js
// ======

// External Links
import logo from './logo.svg';
import './App.css';
import getMoviesByName from './getMoviesByName';
import getMovieDetailsById from './getMovieDetailsById';

// App()
// ======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => getMoviesByName("Avengers")}>Get Movies</button>
        <br />
        <button onClick={() => getMovieDetailsById("tt0118661")}>
          Get A Movie
        </button>
        <p>Use Chrome Inspector to view response.</p>
      </header>
    </div>
  );
}

export default App;
