import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './NavBar';
import MovieList from './movie/MovieList';
import Podcasts from './MyPodcasts';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/MovieList" element={<MovieList />} />
          <Route path="/MyPodcasts" element={<Podcasts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
