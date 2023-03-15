import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader';
import { BoxHome, TitleNav } from './Navigation.styled';


export default function Navigation() {
  return (
    <BoxHome>
      <nav>
        <TitleNav to="/">Home</TitleNav>
        <TitleNav to="/movies">Movies</TitleNav>
      </nav>
      <Suspense fallback={<p><Loader/></p>}>
        <Outlet />
      </Suspense>
    </BoxHome>
  );
}
