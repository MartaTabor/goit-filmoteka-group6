var e=globalThis,t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i),i.register;var l=i("hGVxz");i("kBG4Y"),i("4boOf"),i("40lI0"),i("bMpwc"),i("g1uI7");var l=i("hGVxz");const o=document.querySelector(".home-film-list");(async(e=1)=>{try{let t=await (0,l.default).get(`https://api.themoviedb.org/3/movie/popular?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN&per_page=20&page=${e}`),a=0,i=t.data.results;console.log(i);let s=await (0,l.default).get("https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN"),r={};s.data.genres.forEach(e=>{r[e.id]=e.name});let c=i.map(e=>{let t=e.genre_ids.map(e=>r[e]).slice(0,2).join(", ");return`
        <li class="home-film-item" data-index="${a++}" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${e.poster_path}" alt="${e.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${e.title}</h2>
            <p class="home-film-info">
              <span class="home-film-type">${t}</span> |
              <span class="home-film-year">${e.release_date.slice(0,4)}</span>
              <span class="home-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`});o.innerHTML=c.join("")}catch(e){console.error("Error fetching data:",e)}})(),i("7UJs8");const s=document.querySelector(".to-top");window.addEventListener("scroll",()=>{if(document.querySelector("[data-modal]:not(.film-details-is-hidden)")){s.classList.remove("active");return}window.scrollY>215?s.classList.add("active"):s.classList.remove("active")}),document.body.addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&s.classList.remove("active")}),document.addEventListener("click",e=>{let t=e.target.closest(".film-details-close"),a=document.querySelector("[data-modal]");(t||e.target===a)&&window.scrollY>215&&s.classList.add("active")}),i("cB4zx"),i("2AKVI"),i("46SdE");
//# sourceMappingURL=index.adc4fdec.js.map
