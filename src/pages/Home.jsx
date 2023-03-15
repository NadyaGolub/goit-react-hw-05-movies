import * as API from '../services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader';
import Error from 'components/Error';

 function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');

    API.getTrendingMovies()
      .then(data => {
        setStatus('resolved');
        setMovies(data);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <MoviesList movies={movies} />}
      {status === 'rejected' && <Error error={error.message}/>}
      
    </div>
  );
}

export default Home;