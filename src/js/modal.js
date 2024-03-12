import axios from 'axios';

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
    // Utworzenie zawartości modala na podstawie pobranych szczegółów filmu
    const modalWindow = document.querySelector('.film-details-modal-window');
    const modalContent = `
            <div class="film-details-modal" data-index="${index}">
                <div class="modal-film-poster-div">
                    <img class="modal-film-poster" src="https://image.tmdb.org/t/p/original/${
                      filmDetails.data.poster_path
                    }"/>
                </div>
                <div class="modal-film-details-div">
                    <h4 class="film-title">${filmDetails.data.title}</h4>
                    <div class="modal-film-details">
                        <h5 class="types">Vote/Votes</h5>
                        <p class="avg">${filmDetails.data.vote_average.toFixed(1)}</p>
                        <span class="slash">/</span>
                        <p class="number">${filmDetails.data.vote_count}</p>
                        <h5 class="types">Popularity</h5>
                        <p class="number">${filmDetails.data.popularity.toFixed(0)}</p>
                        <h5 class="types">Original Title</h5>
                        <p class="number">${filmDetails.data.original_title}</p>
                        <h5 class="types">Genre</h5>
                        <p class="number">${filmDetails.data.genre_ids}</p>
                    </div>
                    <div class="film-overview">
                        <h5 class="about">About</h5>
                        <p class="film-desc">${filmDetails.data.overview}</p>
                    </div>
                    <div class="buttons">
                        <button class="button-watched">add to Watched</button>
                        <button class="button-queue">add to queue</button>
                    </div>
                </div>
            </div>
        `;
    // Ustawienie zawartości modala na utworzony wcześniej markup
    modalWindow.innerHTML = modalContent;
  } catch (error) {
    console.log('Error fetching film details:', error);
  }
}
