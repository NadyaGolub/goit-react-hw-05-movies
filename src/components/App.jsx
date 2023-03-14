import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Navigation from './Navigation';
import Reviews from './Reviews';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} >
            <Route path="cast" element={ <Cast/>} />
            <Route path="reviews" element={ <Reviews/>} />
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
