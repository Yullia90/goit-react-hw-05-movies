// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import("../pages/home/Home"));
// const Movies = lazy(() => import('../pages/movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/movies/MovieDetails'));
// // const Cast = lazy(() => import(''));
// const Reviews = lazy(() => import(''));
// const Layout = lazy(() => import(''));
// const PageNotFound = lazy(() => import(''));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Layout</div>} >
         <Route path="error" element={<div>PageNotFound</div>} />
         <Route index element={<div>Home</div>} />
         <Route path="movies" element={<div>Movies</div>}/>
         <Route path="movies/:movieId" element={<div>MovieDetails</div>} >
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
         </Route>
        </Route>
      </Routes>
    </div>
  );
};
