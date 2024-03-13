import axios from 'axios';
import { startParticleAnimation } from './buttonEfects.js';

let filmIndex = 0;
// Nasłuchiwanie kliknięć na całym ciele dokumentu
document.body.addEventListener('click', async function (event) {
  // Pobranie elementu modalu
  const modal = document.querySelector('[data-modal]');

  // Sprawdzenie, czy kliknięty element lub jego rodzic posiada atrybut [data-modal-open]
  if (event.target.closest('[data-modal-open]')) {
    // Pobranie indeksu filmu na podstawie klikniętego elementu
    filmIndex = event.target.closest('.home-film-item').dataset.index;
    console.log(`Index filmu: ${filmIndex}`);
    // Pobranie i wyświetlenie szczegółów filmu na podstawie indeksu
    await fetchFilmDetailsByIndex(filmIndex);
    // Usunięcie klasy ukrywającej modal, aby go wyświetlić
    modal.classList.remove('film-details-is-hidden');
  }
});

// Funkcja pobierająca i wyświetlająca szczegóły filmu na podstawie jego indeksu
async function fetchFilmDetailsByIndex(index) {
  try {
    // Pobranie listy filmów z API
    const response = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN',
    );
    // Wybranie konkretnego filmu na podstawie przekazanego indeksu
    let film = response.data.results[index];
    console.log(`Id danego filmu: ${film.id}`);
    // Pobranie szczegółowych informacji o filmie na podstawie jego ID
    const filmDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${film.id}?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN`,
    );

    const genresResponse = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN`,
    );
    const genresList = {};
    genresResponse.data.genres.forEach(genre => {
      genresList[genre.id] = genre.name;
    });
    const genreNames = film.genre_ids.map(genreId => genresList[genreId]).slice(0, 2);
    const genresMarkup = genreNames.join(', ');

    // Utworzenie zawartości modala na podstawie pobranych szczegółów filmu
    const modalWindow = document.querySelector('.film-details-modal-window');
    const modalContent = ` <a class="film-details-close" data-modal-close>
     <svg class="close-button" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
    </a>
            <div class="film-details-modal" data-index="${index}">
                <div class="modal-film-poster-div">
                    <img class="modal-film-poster" src="https://image.tmdb.org/t/p/original/${
                      filmDetails.data.poster_path
                    }" />
                </div>
                <div class="modal-film-details-div">
                    <h4 class="film-title">${filmDetails.data.title}</h4>
                    <div class="modal-film-details">
                      <div class="data">
                        <h5 class="types">Vote/Votes</h5>
                        <p class="avg">${filmDetails.data.vote_average.toFixed(1)}</p>
                        <span class="slash">/</span>
                        <p class="number">${filmDetails.data.vote_count}</p>
                      </div>
                      <div class="data">
                        <h5 class="types">Popularity</h5>
                        <p class="number">${filmDetails.data.popularity.toFixed(0)}</p>
                      </div>
                      <div class="data">
                        <h5 class="types">Original Title</h5>
                        <p class="number">${filmDetails.data.original_title}</p>
                      </div>
                      <div class="data">
                        <h5 class="types">Genre</h5>
                        <p class="number">${genresMarkup}</p>
                      </div>
                    </div>
                    <div class="film-overview">
                        <h5 class="about">About</h5>
                        <p class="film-desc">${filmDetails.data.overview}</p>
                    </div>
                    <div class="buttons">
                        <button class="button-watched modal-buttons">add to Watched</button>
                        <button class="button-queue modal-buttons">add to queue</button>
                    </div>
                </div>
            </div>
        `;
    // Ustawienie zawartości modala na utworzony wcześniej markup
    modalWindow.innerHTML = modalContent;

    const modalClose = document.querySelector('.film-details-close');
    const modal = document.querySelector('[data-modal]');

    // Zamykanie okna kliknieciem
    modalClose.addEventListener('click', async () => {
      modal.classList.add('film-details-is-hidden');
    });

    // Zamykanie okna escape
    document.addEventListener('keyup', async event => {
      if (event.key === 'Escape') {
        modal.classList.add('film-details-is-hidden');
      }
    });
    // Zamykanie okna poprzez klikniecie poza modal
    document.addEventListener('click', e => {
      const modal = document.querySelector('[data-modal]');
      const background = document.querySelector('.film-details-backdrop');

      if (e.target === background) {
        modal.classList.add('film-details-is-hidden');
      }
    });

    // Dodawanie nasłuchiwania na kliknięcie na przyciski
    const modalButtons = document.querySelectorAll('.modal-buttons');
    modalButtons.forEach(button => {
      button.addEventListener('click', startParticleAnimation);
    });
  } catch (error) {
    console.log('Error fetching film details:', error);
  }
}
