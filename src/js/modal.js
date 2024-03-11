document.addEventListener('DOMContentLoaded', function () {
  const closeModalButton = document.querySelector('[data-modal-close]');
  const filmPoster = document.querySelector('.film-poster');

  closeModalButton.addEventListener('click', function () {
    modal.classList.add('film-details-is-hidden');
  });
});

document.body.addEventListener('click', function (event) {
  const modal = document.querySelector('[data-modal]');
  if (event.target.closest('[data-modal-open]')) {
    modal.classList.remove('film-details-is-hidden');
    fetchFilmDetails(filmId);
  }
});

async function fetchFilmDetails() {
  try {
    const responseDetails = await axios.get(
      '`https://api.themoviedb.org/3/movie/${filmId}?api_key=c2f18aa0c4ee94c87f87834077fd721a',
    );
    const filmDetails = responseDetails.data;

    const modalWindow = document.querySelector('.film-details-modal-window');
    modalWindow.innerHTML = ` <div class="film-details-modal">
                   <div class="modal-film-poster-div">
            <img class="modal-film-poster" src="${filmDetails.poster_path}"/>
          </div>
          <div class="modal-film-details-div">
            <h4 class="film-title">${filmDetails.title}</h4>
            <div class="modal-film-details">
              <h5 class="types">Vote/Votes</h5>
              <p class="avg">${filmDetails.vote_average}</p>
              <span class="slash">/</span>
              <p class="number">${filmDetails.vote_count}</p>
              <h5 class="types">Popularity</h5>
              <p class="number">${filmDetails.popularity}</p>
              <h5 class="types">Original Title</h5>
              <p class="number">${filmDetails.original_title}</p>
              <h5 class="types">Genre</h5>
              <p class="number">${filmDetails.genresname}</p>
            </div>
            <div class="film-overview">
              <h5 class="about">About</h5>
              <p class="film-desc">${filmDetails.overview}
              </p>
            </div>
            <div class="buttons">
              <button class="button-watched">add to Watched</button
              ><button class="button-queue">add to queue</button>
            </div>
          </div>
        </div>
       
    `;
  } catch (error) {
    console.log('Error fetching film details:', error);
  }
}

/*Kod nr 2:
document.addEventListener('DOMContentLoaded', function () {
  const closeModalButton = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const filmPoster = document.querySelector('.film-poster');
  const modalWindow = document.querySelector('#modal-window');

  document.body.addEventListener('click', function (event) {
    const modalOpenTrigger = event.target.closest('[data-modal-open]');

    if (modalOpenTrigger) {
      modal.classList.remove('film-details-is-hidden');
      const movie_id = modalOpenTrigger.getAttribute('data-movie-id');
      fetchDetails(movie_id);
    }
  });
  async function fetchDetails(movie_id) {
    try {
      const responseDetails = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=c2f18aa0c4ee94c87f87834077fd721a`,
      );
      const dataDetail = responseDetails.data;

      const filmDetail = ` <div class="film-details-modal">
          <a class="film-details-close" film-details-modal-close>
            <svg
              class="close-button"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 50 50"
            >
              <path
                d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"
              ></path>
            </svg>
          </a>
          <div class="modal-film-poster-div">
            <img class="modal-film-poster" src="${dataDetail.poster_path}"/>
          </div>
          <div class="modal-film-details-div">
            <h4 class="film-title">${dataDetail.title}</h4>
            <div class="modal-film-details">
              <h5 class="types">Vote/Votes</h5>
              <p class="avg">${dataDetail.vote_average}</p>
              <span class="slash">/</span>
              <p class="number">${dataDetail.vote_count}</p>
              <h5 class="types">Popularity</h5>
              <p class="number">${dataDetail.popularity}</p>
              <h5 class="types">Original Title</h5>
              <p class="number">${dataDetail.original_title}</p>
              <h5 class="types">Genre</h5>
              <p class="number">${dataDetail.genresname}</p>
            </div>
            <div class="film-overview">
              <h5 class="about">About</h5>
              <p class="film-desc">${dataDetail.overview}
              </p>
            </div>
            <div class="buttons">
              <button class="button-watched">add to Watched</button
              ><button class="button-queue">add to queue</button>
            </div>
          </div>
        </div>
       
    `;

      modalWindow.innerHTML = filmDetail;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
});
*/
