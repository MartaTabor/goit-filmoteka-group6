var e=globalThis,t={},i={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in i){var l=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequired7c6=l),l.register,document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".gallery-library"),t=document.getElementById("btnWatched"),i=document.getElementById("btnQueue"),l=JSON.parse(localStorage.getItem("watchedMovies"))||[],a=JSON.parse(localStorage.getItem("queueMovies"))||[];function o(t){e.innerHTML=t.map(e=>`
            <li class="home-film-item" data-id="${e.id}">
                <img class="home-film-image" src="${e.poster_path}" alt="${e.title}">
                <div class="home-film-details">
                    <h2 class="home-film-title">${e.title}</h2>
                    <p class="home-film-info">${e.release_date.slice(0,4)}</p>
                </div>
                <button class="remove-button">Usu\u{144}</button>
            </li>`).join("")}t.addEventListener("click",()=>{o(l)}),i.addEventListener("click",()=>{o(a)}),e.addEventListener("click",e=>{let i=e.target;if(i.classList.contains("remove-button")){let e=i.closest(".home-film-item").dataset.id;l=l.filter(t=>t.id!==e),a=a.filter(t=>t.id!==e),localStorage.setItem("watchedMovies",JSON.stringify(l)),localStorage.setItem("queueMovies",JSON.stringify(a)),o(t.classList.contains("active")?l:a)}}),o(l)}),l("g1uI7"),l("40lI0"),l("bMpwc"),l("7UJs8"),l("kBG4Y"),l("4boOf"),l("2AKVI"),l("46SdE");
//# sourceMappingURL=my-library.155172ef.js.map
