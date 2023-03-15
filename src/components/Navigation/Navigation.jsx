import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import { BoxHome, TitleNav } from './Navigation.styled';


function Navigation() {
  return (
    <BoxHome>
      <nav>
        <TitleNav to="/">Home</TitleNav>
        <TitleNav to="/movies">Movies</TitleNav>
      </nav>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </BoxHome>
  );
}

export default Navigation;