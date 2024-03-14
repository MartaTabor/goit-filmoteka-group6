'use strict';

// Import axios
import axios from 'axios';

// API key and base URL
const API_KEY = '5abbb3dbf9a78bf33887465dc33dbfa3';
const BASE_URL = 'https://api.themoviedb.org/';

// Pobranie danych z localStorage dla klucza 'movies-watched'
const watchedMovies = JSON.parse(localStorage.getItem('movies-watched')) || [];
console.log("Watched Movies:");
console.log(watchedMovies);

// Wyodrębnienie ID filmów z danych zapisanych w localStorage
const watchedMovieIds = watchedMovies.map(movie => {
    const idMatch = movie.match(/ID: (\d+)/);
    return idMatch ? idMatch[1] : null;
}); 

console.log("Watched Movie IDs:");
console.log(watchedMovieIds);

// Pobranie danych z localStorage dla klucza 'movies-queue'
const queueMovies = JSON.parse(localStorage.getItem('movies-queue')) || [];
console.log("Queue Movies:");
console.log(queueMovies);

// Wyodrębnienie ID filmów z danych zapisanych w localStorage
const queueMovieIds = queueMovies.map(movie => {
    const idMatch = movie.match(/ID: (\d+)/);
    return idMatch ? idMatch[1] : null;
}); 

console.log("Queue Movie IDs:");
console.log(queueMovieIds);

// Nasłuchiwanie zdarzenia DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => { 
    const buttonWatched = document.getElementById('btnWatched'); 
    const buttonQueue = document.getElementById('btnQueue'); 
    const galleryLibrary = document.querySelector('.gallery-library'); 
    
    // Dodanie nasłuchiwania kliknięcia na przycisk "Watched"
    buttonWatched.addEventListener('click', () => { 
        renderLibrary('movies-watched');
    }); 
     
    // Dodanie nasłuchiwania kliknięcia na przycisk "Queue"
    buttonQueue.addEventListener('click', () => { 
        renderLibrary('movies-queue');
    }); 

    // Funkcja renderująca bibliotekę filmów
    async function renderLibrary(storageKey) { 
        const libraryData = JSON.parse(localStorage.getItem(storageKey)) || [];
        
        // Sprawdzenie czy dane istnieją i czy nie są puste
        if (!libraryData || libraryData.length === 0) { 
            galleryLibrary.innerHTML = '<p>Brak filmów w bibliotece<p>'; 
            return;
        } 
        
       
        try {
            // Iteracja po ID filmów i pobranie ich szczegółów
            for (const movieId of libraryData) {
                const movieDetails = await fetchMovieDetails(movieId);
                // Wygenerowanie markupu filmu i dodanie go do galerii
                const movieMarkup = createMovieMarkup(movieDetails);
                galleryLibrary.insertAdjacentHTML('beforeend', movieMarkup);
            }
        } catch (error) {
            console.error('Error rendering library:', error);
        }
    }

    // Funkcja pobierająca szczegóły filmu z API
    async function fetchMovieDetails(movieId) {
        try {
            // Wykonanie zapytania do API 
            const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-EN`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movie details:', error);
            throw new Error('Failed to fetch movie details');
        }
    }

    // Funkcja tworząca markup filmu
    function createMovieMarkup(movieDetails) {
        return `
            <div class="movie">
                <h2>${movieDetails.title}</h2>
                <p>${movieDetails.overview}</p>
            </div>
        `;
    }
});