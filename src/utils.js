// React Homework
// Day 01 Take Home Challenge
// Allen P.
// 07/06/2022

// utils.js
// ========

// Use key from REACT_APP_OMDB_API_KEY in .env.local
const omdbapiKey = process.env.REACT_APP_OMDBAPI_KEY;

// getMoviesByName()
// =================

const getMoviesByName = async (searchPhrase) => {
    console.log(`Get Movies Matching "${searchPhrase}"`);
    const url = `http://www.omdbapi.com/?apikey=${omdbapiKey}&s=${searchPhrase}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  return;
};

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

export {getMoviesByName, getMovieDetailsById};