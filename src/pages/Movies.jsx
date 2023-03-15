import Loader from 'components/Loader';
import Error from 'components/Error';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API  from 'services/api';


 function Movies() {
    
    
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query ?? '');

  
  
  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');
    const abortConroller = new AbortController();
    API.getMoviesByQuery(query, abortConroller)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });

    return () => {
      abortConroller.abort();
    };
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const nextParams = query !== '' ? { query: e.target.query.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} type="text" name="query" />
        <button type="submit">Search</button>
        
      </form>
      {status === 'pending' && <Loader/>}
      {status === 'resolved' && <MoviesList movies={movies} />} 
      {status === 'rejected' && <Error error={error.message} />}
    </div>
  );
}

export default Movies;