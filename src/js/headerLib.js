
// Podpinamy się pod referencje
const btnWatched = document.getElementById('btnWatched');
const btnQueue = document.getElementById('btnQueue');

// Kontener na wyświetlenie wybranej biblioteki
const filmLibraryContainer = document.getElementById('filmLibraryContainer');

// Tworzymy dwie tablice na localStorage
let watchedFilms = JSON.parse(localStorage.getItem('watchedFilms')) || [];
let queueFilms = JSON.parse(localStorage.getItem('queueFilms')) || [];

// Funkcja dodawania filmów do odpowiedniej tablicy
function addFilmToLibrary(film, libraryKey) {
    const library = JSON.parse(localStorage.getItem(libraryKey)) || [];
    library.push(film);
    localStorage.setItem(libraryKey, JSON.stringify(library));
};

// Renderujemy filmy
function renderFilm(library) {
    filmLibraryContainer.innerHTML = '';

    library.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.classList.add('film');
        filmElement.textContent = film.title;
        filmLibraryContainer.appendChild(filmElement);
    });
}

btnWatched.addEventListener('click', () => {
    renderFilm(watchedFilms);
});

btnQueue.addEventListener('click', () => {
    renderFilm(queueFilms);
});

// Dodawanie przykładowego filmu
const exampleFilm = { title: 'test' };
addFilmToLibrary(exampleFilm, 'watchedFilms');