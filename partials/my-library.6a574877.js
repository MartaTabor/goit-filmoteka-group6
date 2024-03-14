var e=globalThis,t={},l={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in l){var o=l[e];delete l[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},e.parcelRequired7c6=o),o.register;const i=JSON.parse(localStorage.getItem("movies-watched"))||[];console.log("Watched Movies:"),console.log(i);const a=JSON.parse(localStorage.getItem("movies-queue"))||[];function n(e){let t=document.querySelector(".gallery-library");if(t.innerHTML="",!e||0===e.length){t.innerHTML="<p>Brak filmów w bibliotece<p>";return}e.forEach(e=>{let l=` 
    
        <li class="home-film-item" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${e.backdrop_path}" alt="${e.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${e.title}</h2>
            <p class="home-film-info">
              <span class="home-film-year">${e.release_date.slice(0,4)}</span>
              <span class="home-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`;t.insertAdjacentHTML("beforeend",l)})}console.log("Queue Movies:"),console.log(a),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("btnWatched"),t=document.getElementById("btnQueue");e.addEventListener("click",()=>{n(i)}),t.addEventListener("click",()=>{n(a)})}),o("g1uI7"),o("40lI0"),o("bMpwc"),o("7UJs8"),o("kBG4Y"),o("4boOf"),o("hHD3f"),o("2AKVI"),o("46SdE");
//# sourceMappingURL=my-library.6a574877.js.map
