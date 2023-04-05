import { useState } from 'react';
import '../App.css';
import { Movie } from '../types/movie';

function MovieList() {
  //fetch the data
  const [movieData, setMovieData] = useState<Movie[]>([]);

  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:4000/movie');
    const temp = await rsp.json();
    setMovieData(temp);
  };

  fetchMovie();

  //create the table

  return (
    <>
      <div className="row">
        <h4>Movies</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((f) => (
            <tr key={f.movieId}>
              <td>{f.category}</td>
              <td>{f.title}</td>
              <td>{f.year}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
