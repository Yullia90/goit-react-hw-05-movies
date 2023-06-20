import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("../pages/home/Home"));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movies/MovieDetails'));
const Cast = lazy(() => import('./Main/Cast'));
const Reviews = lazy(() => import('./Main/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));
const PageNotFound = lazy(() => import('./Error/PageNotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="error" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};