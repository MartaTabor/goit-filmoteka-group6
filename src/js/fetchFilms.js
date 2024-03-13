'use strict';
// axios
import axios from 'axios';
// projekt fetch api movie
const API_KEY = 'c2f18aa0c4ee94c87f87834077fd721a';
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    include_adult: 'false',
    language: 'en-US',
    page: '1',
  },
  headers: { accept: 'application/json' },
};
// lista wyświetlanych elementów
const listElementSearch = document.querySelector('.home-film-list');
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
// zapytanie o popularne filmy
export async function getTrendingMovies() {
  const searchParams = {
    params: {
      page: this.page,
      api_key: filmsApi.API_KEY,
    },
  };

  return axios.get(`${filmsApi.BASE_URL}trending/movie/week`, searchParams);
}

// zapytanie o gatunki
export async function getGenres() {
  const searchParams = {
    params: {
      page: this.page,
      api_key: filmsApi.API_KEY,
    },
  };

  return axios.get(`${filmsApi.BASE_URL}genre/movie/list`, searchParams);
}

// zapytanie po id
export async function fetchTrailer(id) {
  const searchParams = {
    params: {
      page: this.page,
      api_key: filmsApi.API_KEY,
    },
  };

  return axios.get(`${filmsApi.BASE_URL}search/movie`, searchParams);
}

// query
export async function fetchFilmsByQuery() {
  const searchParams = {
    params: {
      page: this.page,
      api_key: filmsApi.API_KEY,
      query: this.query,
    },
  };

  return axios.get(`${FilmsApi.BASE_URL}search/movie`, searchParams);
}
