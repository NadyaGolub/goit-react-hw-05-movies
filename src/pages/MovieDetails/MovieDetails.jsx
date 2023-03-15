import { Loader } from 'components/Loader';
import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { getMoviesDetailsById } from 'services/api';
import { Btn, MoreInfoLink, Section } from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getMoviesDetailsById(id).then(setMovie);
  }, [id]);

  if (!movie) {
    return (
      <p>
        <Loader />
      </p>
    );
  }

  return (
    <div>
      <Btn type="button" onClick={handleGoBack}>
        Go back
      </Btn>
      <Section>
        
              <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
              <di>
        <h1>{movie.title}</h1>
             
            <h2>Overview</h2>
         
            <p>{movie.overview}</p>
              </di>
              </Section>
      <MoreInfoLink state={{ from: location?.state?.from ?? '/' }} to="cast">
        Cast
      </MoreInfoLink>
      <MoreInfoLink state={{ from: location?.state?.from ?? '/' }} to="reviews">
        Reviews
      </MoreInfoLink>
      <Suspense
        fallback={
          <p>
            <Loader />
          </p>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
