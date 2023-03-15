import { NavLink, useLocation } from 'react-router-dom';
import { Container, Item, Title } from './MoviesList.styled';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <Container>
      {movies.map(movie => (
        <Item key={movie.id}>
          <NavLink state={{ from: location }} to={`/movies/${movie.id}`}>
            <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} width={400} height={ 600} />
            <Title>{movie.original_title ?? movie.name}</Title>
          </NavLink>
        </Item>
      ))}
    </Container>
  );
}
