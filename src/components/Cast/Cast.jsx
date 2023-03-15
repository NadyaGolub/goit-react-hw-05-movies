import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { CastList, NoImage } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <h1>Cast</h1>
      <CastList>
        {cast.map(cast => (
          <li key={cast.cast_id}>
            {cast.profile_path ? (
            <img
              src={BASE_IMG_URL + cast.profile_path}
              alt={cast.original_name}
              width={200}
            ></img>
                ) : (
                  <NoImage>Image not find</NoImage>
                )}
            <p>{cast.original_name}</p>
          </li>
        ))}
      </CastList>
    </div>
  );
}
