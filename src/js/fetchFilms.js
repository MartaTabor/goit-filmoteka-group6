
// axios
import axios from 'axios';
import Notiflix from 'notiflix';
// // projekt fetch api movie
// const API_KEY = 'AIzaSyDrsw02tJfVOg5942KrmMQDgPqT2tORfaM';
// const BASE_URL = 'https://api.themoviedb.org/3';

// 
// // searchBtm = document


// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/search/movie',
//   params: {
//     include_adult: 'false',
//     language: 'en-US',
//     page: '1',
//   },
//   headers: { accept: 'application/json' },
// };

// // axios
// //   .request(options)
// //   .then(function (response) {
// //     console.log(response.data);
// //   })
// //   .catch(function (error) {
// //     console.error(error);
// //   });
// // zapytanie o popularne filmy
// export async function getTrendingMovies() {
//   const searchParams = {
//     params: {
//       page: this.page,
//       api_key: API_KEY,
//     },
//   };

//   return axios.get(`${BASE_URL}trending/movie/week`, searchParams);
// }
// // try {
// //   const resp = await fetch(
// //     `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`,
// //   );

// //   if (!resp.ok) throw new Error(resp.status);

// //   return await resp.json();
// // } catch (err) {
// //   console.error(err.message);
// // }
// // zapytanie o gatunki
// export async function getGenres() {
//   const searchParams = {
//     params: {
//       page: this.page,
//       api_key: API_KEY,
//     },
//   };

//   return axios.get(`${BASE_URL}genre/movie/list`, searchParams);
// }
// // try {
// //   const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
// //   const respGenres = await response.json();

// //   return respGenres;
// // } catch (error) {
// //   console.log(error.message);
// // }

// // zapytanie po id
// export async function fetchTrailer(id) {
//   try {
//     const responce = await fetch(
//       `${BASE_URL}/movie/${id}/videos?api_key =${API_KEY}`,
//     );
//     const data = await responce.json();

//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
const searchForm = document.querySelector('#search-form');
// query
export async function fetchFilmsByQuery() {
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    query: `${searchForm.elements.searchQuery.value.trim().split(" ").join(`%20`)}`,
    include_adult: 'false',
    language: 'en-US',
    page: '1'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRiYzVmYTA0ZTcwZWUwNmI1YmZjZmZkZDAwMjhmZiIsInN1YiI6IjY1ZjFiYzIwZDY0YWMyMDBjYTVkMWU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSA66Srxuh9huCM-91QWv-1PAFYBxqjt-fFzzJb4bmg'
  }
};

axios.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
}

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if(searchForm.elements.searchQuery.value.trim()==""){
      Notiflix.Notify.warning('Enter some text...');

  }else{

  fetchFilmsByQuery();

  }
});