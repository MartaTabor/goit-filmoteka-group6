
// axios
import axios from 'axios';
import Notiflix from 'notiflix';

import { showFilms } from "./showFilms";


const searchForm = document.querySelector('#search-form');
const errorText = document.querySelector('.errorText');

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




