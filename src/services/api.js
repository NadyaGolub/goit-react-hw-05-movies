import axios from 'axios';
import { toast } from 'react-toastify';

// API_KEY = 'f82dae993797da8cb5a149198d922fee';

const agent = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: 'f82dae993797da8cb5a149198d922fee' },
});

export async function getMoviesByQuery(query, controller) {
  try {
    const movies = await agent.get('search/movie', {
      params: {
        query,
        signal: controller.signal,
      },
    });
    return movies?.data?.results;
  } catch (error) {
    toast.error('Sorry, somesing went wrong');
    console.log(error);
  }
}

export async function getTrendingMovies() {
  try {
    const movies = await agent.get('trending/all/day', {
      params: {
        language: 'en-US',
      },
    });
    return movies?.data?.results;
  } catch (error) {
    toast.error('Sorry, somesing went wrong');
    console.log(error);
  }
}

export async function getMoviesDetailsById(id, controller) {
  try {
    const movies = await agent.get(`movie/${id}`, {
      params: {
        signal: controller.signal,
      },
    });

    return movies.data;
  } catch (error) {
    toast.error('Sorry, somesing went wrong');
    console.log(error);
  }
}

export async function getMovieCast(id, controller) {
  try {
    const actors = await agent.get(`movie/${id}/credits`, {
      params: {
        signal: controller.signal,
      },
    });
    return actors.data.cast;
  } catch (error) {
    toast.error('Sorry, somesing went wrong');
    console.log(error);
  }
}

export async function getMovieReviews(id, controller) {
  try {
    const reviews = await agent.get(`movie/${id}/reviews`, {
      params: {
        signal: controller.signal,
      },
    });
    return reviews.data.results;
  } catch (error) {
    toast.error('Sorry, somesing went wrong');
    console.log(error);
  }
}
