import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from '../Cast/Cast';
import { GlobalStyle } from '../GlobalStyle';
import Navigation from '../Navigation/Navigation';
import { Box } from '../App/App.styled';
import Reviews from '../Reviews';



function App() {
  return (
    <Box>
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
      <GlobalStyle/>
    </Box>
  );
}

export default App;
