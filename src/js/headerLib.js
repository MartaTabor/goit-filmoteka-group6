// 'use strict';

// // Pobranie danych z localStorage dla klucza 'movies-watched'
// const watchedMovies = JSON.parse(localStorage.getItem('movies-watched')) || [];
// console.log('Watched Movies:');
// console.log(watchedMovies);

// // Pobranie danych z localStorage dla klucza 'movies-queue'
// const queueMovies = JSON.parse(localStorage.getItem('movies-queue')) || [];
// console.log('Queue Movies:');
// console.log(queueMovies);

// // Funkcja renderująca bibliotekę filmów
// function renderLibrary(libraryData) {
//   const galleryLibrary = document.querySelector('.gallery-library');

//   // Wyczyszczenie zawartości galerii przed dodaniem nowych elementów
//   galleryLibrary.innerHTML = '';

//   // Sprawdzenie czy dane istnieją i czy nie są puste
//   if (!libraryData || libraryData.length === 0) {
//     galleryLibrary.innerHTML = `
//           <div class="empty-library">
//               <p>Brak filmów w bibliotece</p>
//               <div class="lCatson"></div>
//           </div>`;
//     return;
//   }

//   // Iteracja po filmach z localStorage
//   libraryData.forEach(movie => {
//     // Wygenerowanie markupu filmu i dodanie go do galerii
//     const movieMarkup = createMovieMarkup(movie);
//     galleryLibrary.insertAdjacentHTML('beforeend', movieMarkup);
//   });
// }

// // Funkcja tworząca markup filmu
// function createMovieMarkup(movie) {
//   return `
//         <li class="library-film-item" data-modal-open>
//           <img class="library-film-image" src="https://image.tmdb.org/t/p/original/${
//             movie.poster_path
//           }" alt="${movie.title}">
//           <div class="library-film-details">
//             <h2 class="library-film-title">${movie.title}</h2>
//             <p class="library-film-info">
//               <span class="library-film-year">${movie.release_date.slice(0, 4)}</span>
//               <span class="library-film-rating">${movie.vote_average.toFixed(1)}</span>
//             </p>
//           </div>
//         </li>`;
// }

// // Funkcja wywołująca renderowanie biblioteki filmów po załadowaniu strony
// function loadLibraryOnPageLoad() {

//     // Wywołanie funkcji renderLibrary z danymi o filmach do obejrzenia
//     renderLibrary(watchedMovies);

//     // Symulowanie fizycznego kliknięcia na przycisku "Watched" przy pierwszym uruchomieniu strony
//     const buttonWatched = document.getElementById('btnWatched');
//     const clickEvent = new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//         view: window
//     });
//     buttonWatched.dispatchEvent(clickEvent);
// }

// // Nasłuchiwanie zdarzenia DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//     const buttonWatched = document.getElementById('btnWatched');
//     const buttonQueue = document.getElementById('btnQueue');

//     // Dodanie nasłuchiwania kliknięcia na przycisk "Watched"
//     buttonWatched.addEventListener('click', () => {
//         renderLibrary(watchedMovies);
//         buttonWatched.classList.add('isActive'); // Dodanie klasy CSS 'active' dla podświetlenia
//         buttonQueue.classList.remove('isActive'); // Usunięcie klasy CSS 'active' z drugiego przycisku
//     });

//     // Dodanie nasłuchiwania kliknięcia na przycisk "Queue"
//     buttonQueue.addEventListener('click', () => {
//         renderLibrary(queueMovies);
//         buttonQueue.classList.add('isActive'); // Dodanie klasy CSS 'active' dla podświetlenia
//         buttonWatched.classList.remove('isActive'); // Usunięcie klasy CSS 'active' z pierwszego przycisku
//     });

//     // Wywołanie funkcji renderującej bibliotekę filmów po załadowaniu strony
//     loadLibraryOnPageLoad();
// });

// -----------------------------------próba wyszukania filmu po id------------------------------

'use strict';

import axios from 'axios';

let currentFilmIndex = 0;

// Funkcja wyszukująca filmy na podstawie listy identyfikatorów
async function fetchFilmsByIds(movieIds) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie',
    params: {
      api_key: '5abbb3dbf9a78bf33887465dc33dbfa3', // Dodaj swój klucz API
      language: 'en-US',
      append_to_response: 'credits', // Jeśli chcesz pobierać również informacje o obsadzie, możesz to tutaj zdefiniować
    },
    headers: {
      accept: 'application/json',
    },
  };

  // Mapowanie listy identyfikatorów na listę zapytań do API
  const requests = movieIds.map(movieId =>
    axios.request({
      ...options,
      url: `${options.url}/${movieId}`, // Dodaj identyfikator filmu do URL-a
    }),
  );

  // Wykonaj równoległe zapytania do API dla każdego identyfikatora filmu
  const responses = await Promise.all(requests);

  return responses.map(response => response.data);
}

// Funkcja renderująca bibliotekę filmów
function renderLibrary(libraryData) {
  const galleryLibrary = document.querySelector('.gallery-library ');

  // Wyczyszczenie zawartości galerii przed dodaniem nowych elementów
  galleryLibrary.innerHTML = '';

  // Sprawdzenie czy dane istnieją i czy nie są puste
  if (!libraryData || libraryData.length === 0) {
    galleryLibrary.innerHTML = `
          <div class="empty-library">
              <p>Brak filmów w bibliotece</p>
              <div class="lCatson"></div>
          </div>`;
    return;
  }

  // Iteracja po filmach z danych z API
  libraryData.forEach(movie => {
    // Wygenerowanie markupu filmu i dodanie go do galerii
    const movieMarkup = createMovieMarkup(movie);
    galleryLibrary.insertAdjacentHTML('beforeend', movieMarkup);
  });
}

// Funkcja tworząca markup filmu
function createMovieMarkup(movie) {
  // Tworzenie markupu dla gatunków filmowych
  const genresMarkup = movie.genres
    .map(genre => `<span class="home-film-genre">${genre.name}</span>`)
    .join(' | ');

  // Tworzenie markupu dla pojedynczego filmu
  return `
        <li class="home-film-item" data-index="${movie.id}" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${
            movie.poster_path
          }" alt="${movie.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${movie.title}</h2>
            <p class="home-film-info">
              <span class="home-film-genres">${genresMarkup}</span> |
              <span class="home-film-year">${movie.release_date.slice(0, 4)}</span>
              <span class="home-film-rating">${movie.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`;
}

// Funkcja wywołująca renderowanie biblioteki filmów
async function loadLibraryOnPageLoad() {
  const buttonWatched = document.getElementById('btnWatched');
  const buttonQueue = document.getElementById('btnQueue');

  try {
    // Pobranie filmów obejrzanych z localStorage
    const watchedMovies = JSON.parse(localStorage.getItem('movies-watched')) || [];
    // Pobranie filmów w kolejce z localStorage
    const queueMovies = JSON.parse(localStorage.getItem('movies-queue')) || [];

    // Wybór, która biblioteka ma być wyświetlana na starcie
    if (buttonWatched.classList.contains('isActive')) {
      // Pobranie danych o filmach z API na podstawie identyfikatorów obejrzanych filmów
      const watchedMoviesData = await fetchFilmsByIds(watchedMovies.map(movie => movie.id));
      // Renderowanie biblioteki filmów obejrzanych
      renderLibrary(watchedMoviesData);
    } else if (buttonQueue.classList.contains('isActive')) {
      // Pobranie danych o filmach z API na podstawie identyfikatorów filmów w kolejce
      const queueMoviesData = await fetchFilmsByIds(queueMovies.map(movie => movie.id));
      // Renderowanie biblioteki filmów w kolejce
      renderLibrary(queueMoviesData);
    } else {
      // Domyślnie wyświetla bibliotekę obejrzanych filmów
      const watchedMoviesData = await fetchFilmsByIds(watchedMovies.map(movie => movie.id));
      renderLibrary(watchedMoviesData);
      buttonWatched.classList.add('isActive');
    }
  } catch (error) {
    console.error('Error rendering library:', error);
  }

  // Obsługa przycisku "Watched"
  buttonWatched.addEventListener('click', async () => {
    try {
      const watchedMovies = JSON.parse(localStorage.getItem('movies-watched')) || [];
      const watchedMoviesData = await fetchFilmsByIds(watchedMovies.map(movie => movie.id));
      renderLibrary(watchedMoviesData);
      buttonWatched.classList.add('isActive');
      buttonQueue.classList.remove('isActive');
    } catch (error) {
      console.error('Error rendering watched library:', error);
    }
  });

  // Obsługa przycisku "Queue"
  buttonQueue.addEventListener('click', async () => {
    try {
      const queueMovies = JSON.parse(localStorage.getItem('movies-queue')) || [];
      const queueMoviesData = await fetchFilmsByIds(queueMovies.map(movie => movie.id));
      renderLibrary(queueMoviesData);
      buttonQueue.classList.add('isActive');
      buttonWatched.classList.remove('isActive');
    } catch (error) {
      console.error('Error rendering queue library:', error);
    }
  });
}

// Nasłuchiwanie zdarzenia DOMContentLoaded
document.addEventListener('DOMContentLoaded', loadLibraryOnPageLoad);
