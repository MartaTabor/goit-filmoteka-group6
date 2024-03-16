import axios from 'axios';
import { showFilms } from './showFilms';

let itemsPerPage = 20;
let totalPages = 500;

export const fetchData = async (currPage = 1, pageCallback) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN&per_page=${itemsPerPage}&page=${currPage}`,
    );
    showFilms(response);
    const data = response.data;
    currPage = data.page;
    if (typeof pageCallback === 'function') {
      pageCallback(currPage, totalPages);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Wywołanie funkcji fetchData, aby pobrać dane i wygenerować markup filmów
fetchData();
