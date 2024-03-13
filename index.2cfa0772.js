var e=globalThis,a={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,i.call(l.exports,l,l.exports),l.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,a){t[e]=a},e.parcelRequired7c6=i),i.register;var l=i("hGVxz");i("kBG4Y"),i("4boOf"),i("40lI0"),i("bMpwc"),i("g1uI7");var l=i("hGVxz");const s=document.querySelector(".home-film-list"),o=document.querySelector(".loader-container");(async(e=1)=>{try{let a=await (0,l.default).get(`https://api.themoviedb.org/3/movie/popular?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN&per_page=20&page=${e}`),t=0,i=a.data.results;console.log(i),o.classList.remove("visually-hidden");let r=await (0,l.default).get("https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN"),c={};r.data.genres.forEach(e=>{c[e.id]=e.name});let d=i.map(e=>{let a=e.genre_ids.map(e=>c[e]).slice(0,2).join(", ");return`
        <li class="home-film-item" data-index="${t++}" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${e.poster_path}" alt="${e.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${e.title}</h2>
            <p class="home-film-info">
              <span class="home-film-type">${a}</span> |
              <span class="home-film-year">${e.release_date.slice(0,4)}</span>
              <span class="home-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`});o.classList.add("visually-hidden"),s.innerHTML=d.join("")}catch(e){console.error("Error fetching data:",e)}})(),i("7UJs8");const r=document.querySelector(".to-top");window.addEventListener("scroll",()=>{if(document.querySelector("[data-modal]:not(.film-details-is-hidden)")){r.classList.remove("active");return}window.scrollY>215?r.classList.add("active"):r.classList.remove("active")}),document.body.addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&r.classList.remove("active")}),document.addEventListener("click",e=>{let a=e.target.closest(".film-details-close"),t=document.querySelector("[data-modal]");(a||e.target===t)&&window.scrollY>215&&r.classList.add("active")}),i("cB4zx"),i("2AKVI"),i("46SdE");
//# sourceMappingURL=index.2cfa0772.js.map
