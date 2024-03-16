var e=globalThis,t={},i={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in i){var l=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequired7c6=l),l.register;const a=JSON.parse(localStorage.getItem("movies-watched"))||[];console.log("Watched Movies:"),console.log(a);const s=JSON.parse(localStorage.getItem("movies-queue"))||[];function r(e){let t=document.querySelector(".gallery-library");if(t.innerHTML="",!e||0===e.length){t.innerHTML=`
          <div class="empty-library">
              <p>Brak film\xf3w w bibliotece</p>
              <div class="lCatson"></div>
          </div>`;return}e.forEach(e=>{let i=`
        <li class="library-film-item" data-modal-open>
          <img class="library-film-image" src="https://image.tmdb.org/t/p/original/${e.poster_path}" alt="${e.title}">
          <div class="library-film-details">
            <h2 class="library-film-title">${e.title}</h2>
            <p class="library-film-info">
              <span class="library-film-year">${e.release_date.slice(0,4)}</span>
              <span class="library-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`;t.insertAdjacentHTML("beforeend",i)})}console.log("Queue Movies:"),console.log(s),document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("btnWatched"),t=document.getElementById("btnQueue");e.addEventListener("click",()=>{r(a),e.classList.add("isActive"),t.classList.remove("isActive")}),t.addEventListener("click",()=>{r(s),t.classList.add("isActive"),e.classList.remove("isActive")}),function(){r(a);let e=document.getElementById("btnWatched"),t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}()}),l("40lI0"),l("bMpwc"),l("7UJs8"),l("kBG4Y"),l("4boOf"),l("hHD3f"),l("2AKVI"),l("46SdE");
//# sourceMappingURL=my-library.4f8a5836.js.map
