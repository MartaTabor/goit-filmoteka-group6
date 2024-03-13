
// // Podpinamy się pod referencje
// const btnWatched = document.getElementById('btnWatched');
// const btnQueue = document.getElementById('btnQueue');

// // Kontener na wyświetlenie wybranej biblioteki
// const filmLibraryContainer = document.getElementById('filmLibraryContainer');

// // Tworzymy dwie tablice na localStorage
// let watchedFilms = JSON.parse(localStorage.getItem('watchedFilms')) || [];
// let queueFilms = JSON.parse(localStorage.getItem('queueFilms')) || [];

// // Funkcja dodawania filmów do odpowiedniej tablicy
// function addFilmToLibrary(film, libraryKey) {
//     const library = JSON.parse(localStorage.getItem(libraryKey)) || [];
//     library.push(film);
//     localStorage.setItem(libraryKey, JSON.stringify(library));
// };

// // Renderujemy filmy
// function renderFilm(library) {
//     filmLibraryContainer.innerHTML = '';

//     library.forEach(film => {
//         const filmElement = document.createElement('div');
//         filmElement.classList.add('film');
//         filmElement.textContent = film.title;
//         filmLibraryContainer.appendChild(filmElement);
//     });
// }

// btnWatched.addEventListener('click', () => {
//     renderFilm(watchedFilms);
// });

// btnQueue.addEventListener('click', () => {
//     renderFilm(queueFilms);
// });

// // Dodawanie przykładowego filmu
// const exampleFilm = { title: 'test' };
// addFilmToLibrary(exampleFilm, 'watchedFilms'); 
 

document.addEventListener('DOMContentLoaded', () => {
    const libraryContainer = document.querySelector('.gallery-library');
    const btnWatched = document.getElementById('btnWatched');
    const btnQueue = document.getElementById('btnQueue');

    // Pobieranie danych z localStorage lub ustawianie domyślnych wartości
    let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
    let queueMovies = JSON.parse(localStorage.getItem('queueMovies')) || [];

    // Generuj markup
    function generateFilmMarkup(movie) {
        return `
            <li class="home-film-item" data-id="${movie.id}">
                <img class="home-film-image" src="${movie.poster_path}" alt="${movie.title}">
                <div class="home-film-details">
                    <h2 class="home-film-title">${movie.title}</h2>
                    <p class="home-film-info">${movie.release_date.slice(0, 4)}</p>
                </div>
                <button class="remove-button">Usuń</button>
            </li>`;
    }

    // Funkcja renderująca bibliotekę filmów
    function renderLibrary(data) {
        libraryContainer.innerHTML = data.map(movie => generateFilmMarkup(movie)).join('');
    }

    // Obsługa przycisku "WATCHED"
    btnWatched.addEventListener('click', () => {
        renderLibrary(watchedMovies);
    });

    // Obsługa przycisku "QUEUE"
    btnQueue.addEventListener('click', () => {
        renderLibrary(queueMovies);
    });

    // Obsługa kliknięcia przycisków usuwania filmu
    libraryContainer.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('remove-button')) {
            const movieId = target.closest('.home-film-item').dataset.id;
            watchedMovies = watchedMovies.filter(movie => movie.id !== movieId);
            queueMovies = queueMovies.filter(movie => movie.id !== movieId);
            localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
            localStorage.setItem('queueMovies', JSON.stringify(queueMovies));
            renderLibrary(btnWatched.classList.contains('active') ? watchedMovies : queueMovies);
        }
    });

    renderLibrary(watchedMovies);
});