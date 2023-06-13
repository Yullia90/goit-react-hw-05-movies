import { NavLink, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Movies from './pages/Movies';


export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink> 
      </nav>
      <Routes>
        <Route path="/" element={<div>Layout</div>} />
        <Route index element={<div>HomePage</div>} />
        <Route path="/movies" element={<div>Movies</div>}>
          <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
