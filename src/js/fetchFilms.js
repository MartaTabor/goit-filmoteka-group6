'use strict';
// axios
import axios from 'axios';
// projekt fetch api movie
const API_KEY = 'AIzaSyDrsw02tJfVOg5942KrmMQDgPqT2tORfaM';
const BASE_URL = 'https://api.themoviedb.org/3';

// zapytanie o popularne filmy
const getTrendingMovies = async (page = 1) => {
  try {
    const resp = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`,
    );

    if (!resp.ok) throw new Error(resp.status);

    return await resp.json();
  } catch (err) {
    console.error(err.message);
  }
};
// zapytanie o gatunki
export async function getGenres() {
  try {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const respGenres = await response.json();

    return respGenres;
  } catch (error) {
    console.log(error.message);
  }
}
// zapytanie po id
export async function fetchTrailer(id) {
  try {
    const responce = await fetch(
      `${FilmsApi.BASE_URL}/movie/${id}/videos?api_key=${FilmsApi.API_KEY}`,
    );
    const data = await responce.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// query
export async function fetchFilmsByQuery() {
  const searchParams = {
    params: {
      page: this.page,
      api_key: FilmsApi.API_KEY,
      query: this.query,
    },
  };

  return axios.get(`${FilmsApi.BASE_URL}search/movie`, searchParams);
}

// export
