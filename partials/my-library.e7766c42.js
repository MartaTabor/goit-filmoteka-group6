var e=globalThis,t={},l={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in l){var r=l[e];delete l[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},e.parcelRequired7c6=r),r.register;const i=JSON.parse(localStorage.getItem("movies-watched"))||[];console.log("Watched Movies:"),console.log(i);const a=JSON.parse(localStorage.getItem("movies-queue"))||[];function o(e){let t=document.querySelector(".gallery-library");if(t.innerHTML="",!e||0===e.length){t.innerHTML=`
          <div class="empty-library">
              <p>Brak film\xf3w w bibliotece</p>
              <div class="lCatson"></div>
          </div>`;return}e.forEach(e=>{let l=` 
        <li class="library-film-item" data-modal-open>
          <img class="library-film-image" src="https://image.tmdb.org/t/p/original/${e.backdrop_path}" alt="${e.title}">
          <div class="library-film-details">
            <h2 class="library-film-title">${e.title}</h2>
            <p class="library-film-info">
              <span class="library-film-year">${e.release_date.slice(0,4)}</span>
              <span class="library-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`;t.insertAdjacentHTML("beforeend",l)})}console.log("Queue Movies:"),console.log(a),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("btnWatched"),t=document.getElementById("btnQueue");e.addEventListener("click",()=>{o(i)}),t.addEventListener("click",()=>{o(a)})}),r("g1uI7"),r("40lI0"),r("bMpwc"),r("7UJs8"),r("kBG4Y"),r("4boOf"),r("hHD3f"),r("2AKVI"),r("46SdE");
//# sourceMappingURL=my-library.e7766c42.js.map
