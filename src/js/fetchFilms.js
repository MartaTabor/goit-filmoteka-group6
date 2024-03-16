
// axios
import axios from 'axios';
import Notiflix from 'notiflix';

import { showFilms } from "./showFilms";


const searchForm = document.querySelector('#search-form');
const errorText = document.querySelector('.errorText');


// export async function getGenres() {
//     return axios.get(
//       `https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN`,
//     );
// } 


// export async function showFilms(res) { 
//     const loader = document.querySelector('.loader-container');
//     const filmList = document.querySelector('.home-film-list');
//   let currentFilmIndex = 0;
//   const movies = res.data.results;
//   loader.classList.remove('visually-hidden');
//   // Pobieranie gatunków filmowych
// let src_img 
//   const genresResponse = await getGenres();
//     const genresMap = {};
//     genresResponse.data.genres.forEach(genre => {
//       genresMap[genre.id] = genre.name;
//     });
//     // Tworzenie markupu dla każdego filmu
//     const markupArray = movies.map(movie => {
//       const genreNames = movie.genre_ids.map(genreId => genresMap[genreId]).slice(0, 2);
//         const genresMarkup = genreNames.join(', ');
//         if (movie.poster_path!=null) {
//             src_img = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
//         }
//         else {
//             src_img = '../image/noImage.jpg';
//         }
//       return `
//         <li class="home-film-item" data-index="${currentFilmIndex++}" data-modal-open>
//           <img class="home-film-image" src="${src_img}" alt="${movie.title}">
//           <div class="home-film-details">
//             <h2 class="home-film-title">${movie.title}</h2>
//             <p class="home-film-info">
//               <span class="home-film-type">${genresMarkup}</span> |
//               <span class="home-film-year">${movie.release_date.slice(0, 4)}</span>
//               <span class="home-film-rating">${movie.vote_average.toFixed(1)}</span>
//             </p>
//           </div>
//         </li>`;
//     });
//     loader.classList.add('visually-hidden');
//     // Wstawianie wygenerowanego markupu do elementu HTML      
//     filmList.innerHTML = markupArray.join('');



// }; 


// query
export async function fetchFilmsByQuery(qwery, page) {
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    query: `${qwery}`,
    include_adult: 'false',
    language: 'en-US',
    page: `${page}`
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRiYzVmYTA0ZTcwZWUwNmI1YmZjZmZkZDAwMjhmZiIsInN1YiI6IjY1ZjFiYzIwZDY0YWMyMDBjYTVkMWU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSA66Srxuh9huCM-91QWv-1PAFYBxqjt-fFzzJb4bmg'
  }
};
  
  

  const res = await axios.request(options);
  return res;

}

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if(searchForm.elements.searchQuery.value.trim()==""){
      Notiflix.Notify.warning('Enter some text...');

  }else{

  fetchFilmsByQuery(searchForm.elements.searchQuery.value.trim().split(" ").join(`%20`),1)
    .then((res) => {
      if (res.data.total_results == 0) {
        errorText.classList.remove("hiddenVisibility");
      }
      else {
        errorText.classList.add("hiddenVisibility");
        Notiflix.Notify.success(`Znaeziono: ${res.data.total_results}` )
        showFilms(res);
      }
      
    })
    .catch((error) => {
      
      });
  }
});




