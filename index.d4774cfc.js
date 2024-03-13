var e=globalThis,a={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,i.call(l.exports,l,l.exports),l.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){t[e]=a},e.parcelRequired7c6=i),i.register;var l=i("hGVxz");i("kBG4Y"),i("4boOf"),i("40lI0"),i("bMpwc"),i("g1uI7");var l=i("hGVxz");const r=document.querySelector(".home-film-list");(async(e=1)=>{try{let a=await (0,l.default).get(`https://api.themoviedb.org/3/movie/popular?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN&per_page=20&page=${e}`),t=0,i=a.data.results;console.log(i);let o=await (0,l.default).get("https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN"),s={};o.data.genres.forEach(e=>{s[e.id]=e.name});let n=i.map(e=>{let a=e.genre_ids.map(e=>s[e]).slice(0,2).join(", ");return`
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
        </li>`});r.innerHTML=n.join("")}catch(e){console.error("Error fetching data:",e)}})(),i("7UJs8"),i("cB4zx"),i("2AKVI"),i("46SdE");
//# sourceMappingURL=index.d4774cfc.js.map
