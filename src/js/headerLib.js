'use strict';

// Pobranie danych z localStorage dla klucza 'movies-watched'
const watchedMovies = JSON.parse(localStorage.getItem('movies-watched')) || [];
console.log("Watched Movies:");
console.log(watchedMovies);

// Pobranie danych z localStorage dla klucza 'movies-queue'
const queueMovies = JSON.parse(localStorage.getItem('movies-queue')) || [];
console.log("Queue Movies:");
console.log(queueMovies);

// Funkcja renderująca bibliotekę filmów
function renderLibrary(libraryData) {
    const galleryLibrary = document.querySelector('.gallery-library');
    
    // Wyczyszczenie zawartości galerii przed dodaniem nowych elementów
    galleryLibrary.innerHTML = '';

    // Sprawdzenie czy dane istnieją i czy nie są puste
    if (!libraryData || libraryData.length === 0) { 
        galleryLibrary.innerHTML = '<p>Brak filmów w bibliotece<p>'; 
        return;
    } 

    // Iteracja po filmach z localStorage
    libraryData.forEach(movie => {
        // Wygenerowanie markupu filmu i dodanie go do galerii
        const movieMarkup = createMovieMarkup(movie);
        galleryLibrary.insertAdjacentHTML('beforeend', movieMarkup);
    });
}

// Funkcja tworząca markup filmu
function createMovieMarkup(movie) {
    return ` 
    
        <li class="home-film-item" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${
            movie.backdrop_path
          }" alt="${movie.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${movie.title}</h2>
            <p class="home-film-info">
              <span class="home-film-year">${movie.release_date.slice(0, 4)}</span>
              <span class="home-film-rating">${movie.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`;
}

// Nasłuchiwanie zdarzenia DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => { 
    const buttonWatched = document.getElementById('btnWatched'); 
    const buttonQueue = document.getElementById('btnQueue'); 
    
    // Dodanie nasłuchiwania kliknięcia na przycisk "Watched"
    buttonWatched.addEventListener('click', () => { 
        renderLibrary(watchedMovies);
    }); 
    
    // Dodanie nasłuchiwania kliknięcia na przycisk "Queue"
    buttonQueue.addEventListener('click', () => { 
        renderLibrary(queueMovies);
    }); 
});
