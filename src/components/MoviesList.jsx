import { NavLink, useLocation } from 'react-router-dom';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink state={{ from: location }} to={`/movies/${movie.id}`}>
            <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
            <h2>{movie.original_title ?? movie.name}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
