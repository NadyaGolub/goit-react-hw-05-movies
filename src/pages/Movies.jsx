import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';

export default function Movies() {
    
    const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
    const query = params.get('query');
    const [value, setValue] = useState(query ?? '');

  useEffect(() => {
      if (!query) {
          return;
      }
      getMoviesByQuery(query).then(setMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    setParams({ query: e.target.query.value });
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} type="text" name="query" />
        <button type="submit">Search</button>
          </form>
          <MoviesList movies={movies} />
    </div>
  );
}
