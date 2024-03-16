import Notiflix from 'notiflix';
import { showFilms } from './showFilms';

const searchForm = document.querySelector('#search-form');
const errorText = document.querySelector('.errorText');


searchForm.addEventListener('submit', evt => {
  evt.preventDefault();
  if (searchForm.elements.searchQuery.value.trim() == '') {
    Notiflix.Notify.warning('Enter some text...');
  } else {
    fetchFilmsByQuery(searchForm.elements.searchQuery.value.trim().split(' ').join(`%20`), 1)
      .then(res => {
        if (res.data.total_results == 0) {
          errorText.classList.remove('hiddenVisibility');
        } else {
          errorText.classList.add('hiddenVisibility');
          Notiflix.Notify.success(`Znaeziono: ${res.data.total_results}`);
          showFilms(res);
        }
      })
      .catch(error => {});
  }
});
