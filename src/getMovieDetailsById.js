// React Homework
// Day 01 In Class Challenge
// Allen P.
// 07/03/2022

// getMovieDetailsById.js
// ======================

// Use key from REACT_APP_OMDB_API_KEY in .env.local
const omdbapiKey = process.env.REACT_APP_OMDBAPI_KEY;

// getMovieDetailsById()
// =====================

const getMovieDetailsById = async (movieId) => {
    console.log(`Get Movie Id ${movieId}`);
    const url = `http://www.omdbapi.com/?apikey=${omdbapiKey}&i=${movieId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  return;
};

export default getMovieDetailsById;
