function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,a={},i={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var l={id:e,exports:{}};return a[e]=l,t.call(l.exports,l,l.exports),l.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequired7c6=l),l.register;var n=l("hGVxz"),s=l("lzX4I"),n=l("hGVxz");async function o(){return(0,n.default).get("https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN")}async function r(e){let t;let a=document.querySelector(".loader-container"),i=document.querySelector(".home-film-list"),l=0,n=e.data.results;a.classList.remove("visually-hidden");let s=await o(),r={};s.data.genres.forEach(e=>{r[e.id]=e.name});let d=n.map(e=>{let a=e.genre_ids.map(e=>r[e]).slice(0,2).join(", ");return t=null!=e.poster_path?`https://image.tmdb.org/t/p/original/${e.poster_path}`:"../image/noImage.jpg",`
        <li class="home-film-item" data-index="${l++}" data-modal-open>
          <img class="home-film-image" src="${t}" alt="${e.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${e.title}</h2>
            <p class="home-film-info">
              <span class="home-film-type">${a}</span> |
              <span class="home-film-year">${e.release_date.slice(0,4)}</span>
              <span class="home-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`});a.classList.add("visually-hidden"),i.innerHTML=d.join("")}const d=document.querySelector("#search-form"),c=document.querySelector(".errorText");async function m(e,t){let a={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:`${e}`,include_adult:"false",language:"en-US",page:`${t}`},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRiYzVmYTA0ZTcwZWUwNmI1YmZjZmZkZDAwMjhmZiIsInN1YiI6IjY1ZjFiYzIwZDY0YWMyMDBjYTVkMWU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSA66Srxuh9huCM-91QWv-1PAFYBxqjt-fFzzJb4bmg"}};return await (0,n.default).request(a)}d.addEventListener("submit",t=>{t.preventDefault(),""==d.elements.searchQuery.value.trim()?e(s).Notify.warning("Enter some text..."):m(d.elements.searchQuery.value.trim().split(" ").join("%20"),1).then(t=>{0==t.data.total_results?c.classList.remove("hiddenVisibility"):(c.classList.add("hiddenVisibility"),e(s).Notify.success(`Znaeziono: ${t.data.total_results}`),r(t))}).catch(e=>{})}),l("kBG4Y"),l("4boOf"),l("40lI0"),l("bMpwc");var n=l("hGVxz");document.querySelector(".home-film-list"),document.querySelector(".loader-container");const u=async(e=1,t)=>{try{let a=await (0,n.default).get(`https://api.themoviedb.org/3/movie/popular?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN&per_page=20&page=${e}`);r(a);let i=a.data;e=i.page,totalPages=i.total_pages,t(e,totalPages)}catch(e){console.error("Error fetching data:",e)}};u();const p=document.getElementById("prev"),h=document.getElementById("next"),f=document.getElementById("pagination");let g=1;function v(e){f.innerHTML="";let t=document.createDocumentFragment(),a=i("1",1);1===e&&a.classList.add("active"),t.appendChild(a);{if(e>2){let e=document.createElement("span");e.textContent="...",t.appendChild(e)}for(let a=Math.max(2,e-2);a<=Math.min(e+2,499);a++){let l=i(a.toString(),a);a===e&&l.classList.add("active"),t.appendChild(l)}if(e>=1){let e=document.createElement("span");e.textContent="...",t.appendChild(e)}else for(let a=2;a<=499;a++){let l=i(a.toString(),a);a===e&&l.classList.add("active"),t.appendChild(l)}let a=i("500",500);500===e&&a.classList.add("active"),t.appendChild(a),f.appendChild(t)}function i(e,t){let a=document.createElement("button");return a.textContent=e,a.addEventListener("click",()=>{y(t)}),a}e>1?p.classList.remove("disabled"):p.classList.add("disabled"),500===e?h.classList.add("disabled"):h.classList.remove("disabled")}async function y(e){g=e,u(e,L)}function L(e){v(e)}h.addEventListener("click",()=>{g<500&&y(g+1)}),p.addEventListener("click",()=>{g>1&&y(g-1)}),v(1),l("7UJs8"),l("hHD3f");const E=document.querySelector(".to-top");window.addEventListener("scroll",()=>{if(document.querySelector("[data-modal]:not(.film-details-is-hidden)")){E.classList.remove("active");return}window.scrollY>215?E.classList.add("active"):E.classList.remove("active")}),document.body.addEventListener("click",e=>{e.target.closest("[data-modal-open]")&&E.classList.remove("active")}),document.addEventListener("click",e=>{let t=e.target.closest(".film-details-close"),a=document.querySelector("[data-modal]");(t||e.target===a)&&window.scrollY>215&&E.classList.add("active")}),l("cB4zx"),l("2AKVI"),l("46SdE");
//# sourceMappingURL=index.64ff9469.js.map
