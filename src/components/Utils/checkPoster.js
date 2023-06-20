import defaultPoster from '../Image/no-poster-available.jpg';

const checkPoster = img => {
  if (!img) {
    return defaultPoster;
  }
  return `https://image.tmdb.org/t/p/w500${img}`;
};

export default checkPoster;
