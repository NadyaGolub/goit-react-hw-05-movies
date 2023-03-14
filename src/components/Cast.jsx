import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

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
      <ul>
        {cast.map(cast => (
          <li key={cast.cast_id}>
            <img
              src={BASE_IMG_URL + cast.profile_path}
              alt={cast.original_name}
            />
            <p>{cast.original_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
