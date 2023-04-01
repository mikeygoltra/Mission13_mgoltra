import React from 'react';
import './App.css';
import data from './MovieData.json';

//this is the file that displays the movie database

const mds = data.MovieData; //this isn't the name of the file, it is the name of the dictionary in the JSON file

function MovieList() {
  return (
    <>
      <div>
        <br></br>
        <h3>Joel Hilton's Movie Collection</h3>
        <br></br>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {mds.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
