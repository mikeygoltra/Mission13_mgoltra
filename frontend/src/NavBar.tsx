import React from 'react';
import './App.css';

//this is the file that creates the navbar that is shown on each page

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/MyPodcasts">My Podcasts</a>
          </li>
          <li>
            <a href="/movie/MovieList">Movie Database</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
