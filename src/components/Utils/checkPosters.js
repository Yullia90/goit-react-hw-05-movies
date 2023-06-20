import defaultPhoto from '../Image/no-photo.jpg';

const checkPosters = img => {
  if (!img) {
    return defaultPhoto;
  }
  return `https://image.tmdb.org/t/p/w500${img}`;
};

export default checkPosters;
