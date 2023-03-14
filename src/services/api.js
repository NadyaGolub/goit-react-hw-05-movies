import axios from 'axios';

// API_KEY = 'f82dae993797da8cb5a149198d922fee';

const agent = axios.create({
  
    baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: 'f82dae993797da8cb5a149198d922fee' },
});

export async function getMoviesByQuery(query) {
  const movies = await agent
    .get('search/movie', {
      params: {
        query,
      },
    })
    return movies.data.results
}

export async function getTrendingMovies() {
  const movies = await agent
    .get('trending/all/day')
    return movies.data.results
}

export async function getMoviesDetailsById(id) {
    const movies = await agent
        .get(`movie/${id}`);
    return movies.data;
}

export async function getMovieCast(id) {
    const actors = await agent
        .get(`movie/${id}/credits`);
    return actors.data.cast;
}

export async function getMovieReviews(id) {
    const reviews = await agent
        .get(`movie/${id}/reviews`);
    return reviews.data.results;
}