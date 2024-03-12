function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=globalThis,r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var s=i.register;s("g1uI7",function(e,t){}),s("40lI0",function(e,t){i("hGVxz");var r=i("9d9Fx");let n=0;async function s(e){try{let t=(await (0,r.default).get("https://api.themoviedb.org/3/discover/movie?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN")).data.results[e];console.log(`Id danego filmu: ${t.id}`);let n=await (0,r.default).get(`https://api.themoviedb.org/3/movie/${t.id}?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN`),i=await (0,r.default).get("https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN"),s={};i.data.genres.forEach(e=>{s[e.id]=e.name});let o=t.genre_ids.map(e=>s[e]).slice(0,2).join(", "),a=document.querySelector(".film-details-modal-window"),l=` <a class="film-details-close" data-modal-close>
     <svg class="close-button" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
    </a>
            <div class="film-details-modal" data-index="${e}">
                <div class="modal-film-poster-div">
                    <img class="modal-film-poster" src="https://image.tmdb.org/t/p/original/${n.data.poster_path}" />
                </div>
                <div class="modal-film-details-div">
                    <h4 class="film-title">${n.data.title}</h4>
                    <div class="modal-film-details">
                      <div class="data">
                        <h5 class="types">Vote/Votes</h5>
                        <p class="avg">${n.data.vote_average.toFixed(1)}</p>
                        <span class="slash">/</span>
                        <p class="number">${n.data.vote_count}</p>
                      </div>
                      <div class="data">
                        <h5 class="types">Popularity</h5>
                        <p class="number">${n.data.popularity.toFixed(0)}</p>
                      </div>
                      <div class="data">
                        <h5 class="types">Original Title</h5>
                        <p class="number">${n.data.original_title}</p>
                      </div>
                      <div class="data">
                        <h5 class="types">Genre</h5>
                        <p class="number">${o}</p>
                      </div>
                    </div>
                    <div class="film-overview">
                        <h5 class="about">About</h5>
                        <p class="film-desc">${n.data.overview}</p>
                    </div>
                    <div class="buttons">
                        <button class="button-watched">add to Watched</button>
                        <button class="button-queue">add to queue</button>
                    </div>
                </div>
            </div>
        `;a.innerHTML=l;let u=document.querySelector(".film-details-close"),c=document.querySelector("[data-modal]");u.addEventListener("click",async()=>{c.classList.add("film-details-is-hidden")}),document.addEventListener("keyup",async e=>{"Escape"===e.key&&c.classList.add("film-details-is-hidden")})}catch(e){console.log("Error fetching film details:",e)}}document.body.addEventListener("click",async function(e){let t=document.querySelector("[data-modal]");e.target.closest("[data-modal-open]")&&(n=e.target.closest(".home-film-item").dataset.index,console.log(`Index filmu: ${n}`),await s(n),t.classList.remove("film-details-is-hidden"))})}),s("hGVxz",function(t,r){e(t.exports,"default",()=>i("9d9Fx").default);let{Axios:n,AxiosError:s,CanceledError:o,isCancel:a,CancelToken:l,VERSION:u,all:c,Cancel:h,isAxiosError:d,spread:f,toFormData:p,AxiosHeaders:g,HttpStatusCode:m,formToJSON:y,getAdapter:v,mergeConfig:b}=i("9d9Fx").default}),s("9d9Fx",function(t,r){e(t.exports,"default",()=>I);var n=i("i4ijA"),s=i("lwbau"),o=i("eCrWh"),a=i("kSe7Y"),l=i("bJncD"),u=i("2eGDI"),c=i("7XT9I"),h=i("9GGcx"),d=i("5SIUr"),f=i("8WPkr"),p=i("gZZY4"),g=i("k5sPl"),m=i("4rx4g"),y=i("4Qexm"),v=i("fRBtE"),b=i("9o9qV"),E=i("dcCu5");let w=function e(t){let r=new o.default(t),i=(0,s.default)(o.default.prototype.request,r);return(0,n.default).extend(i,o.default.prototype,r,{allOwnKeys:!0}),(0,n.default).extend(i,r,null,{allOwnKeys:!0}),i.create=function(r){return e((0,a.default)(t,r))},i}(l.default);w.Axios=o.default,w.CanceledError=c.default,w.CancelToken=h.default,w.isCancel=d.default,w.VERSION=f.VERSION,w.toFormData=p.default,w.AxiosError=g.default,w.Cancel=w.CanceledError,w.all=function(e){return Promise.all(e)},w.spread=m.default,w.isAxiosError=y.default,w.mergeConfig=a.default,w.AxiosHeaders=v.default,w.formToJSON=e=>(0,u.default)((0,n.default).isHTMLForm(e)?new FormData(e):e),w.getAdapter=b.default.getAdapter,w.HttpStatusCode=E.default,w.default=w;var I=w}),s("i4ijA",function(r,n){let s,o;e(r.exports,"default",()=>j);var a=i("lwbau");let{toString:l}=Object.prototype,{getPrototypeOf:u}=Object,c=(s=Object.create(null),e=>{let t=l.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())}),h=e=>(e=e.toLowerCase(),t=>c(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,p=d("undefined"),g=h("ArrayBuffer"),m=d("string"),y=d("function"),v=d("number"),b=e=>null!==e&&"object"==typeof e,E=e=>{if("object"!==c(e))return!1;let t=u(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},w=h("Date"),I=h("File"),_=h("Blob"),T=h("FileList"),S=h("URLSearchParams");function A(e,t,{allOwnKeys:r=!1}={}){let n,i;if(null!=e){if("object"!=typeof e&&(e=[e]),f(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{let i;let s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;for(n=0;n<o;n++)i=s[n],t.call(null,e[i],i,e)}}}function O(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),i=n.length;for(;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}let R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,C=e=>!p(e)&&e!==R,k=(o="undefined"!=typeof Uint8Array&&u(Uint8Array),e=>o&&e instanceof o),N=h("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),L=h("RegExp"),D=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};A(r,(r,i)=>{let s;!1!==(s=t(r,i,e))&&(n[i]=s||r)}),Object.defineProperties(e,n)},x="abcdefghijklmnopqrstuvwxyz",U="0123456789",B={DIGIT:U,ALPHA:x,ALPHA_DIGIT:x+x.toUpperCase()+U},M=h("AsyncFunction");var j={isArray:f,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=c(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer)},isString:m,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:b,isPlainObject:E,isUndefined:p,isDate:w,isFile:I,isBlob:_,isRegExp:L,isFunction:y,isStream:e=>b(e)&&y(e.pipe),isURLSearchParams:S,isTypedArray:k,isFileList:T,forEach:A,merge:function e(){let{caseless:t}=C(this)&&this||{},r={},n=(n,i)=>{let s=t&&O(r,i)||i;E(r[s])&&E(n)?r[s]=e(r[s],n):E(n)?r[s]=e({},n):f(n)?r[s]=n.slice():r[s]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&A(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(A(t,(t,n)=>{r&&y(t)?e[n]=(0,a.default)(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,s,o;let a={};if(t=t||{},null==e)return t;do{for(s=(i=Object.getOwnPropertyNames(e)).length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=!1!==r&&u(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:c,kindOfTest:h,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!v(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=(e&&e[Symbol.iterator]).call(e);for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:N,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:D,freezeMethods:e=>{D(e,(t,r)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(y(e[r])){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(f(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:O,global:R,isContextDefined:C,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(b(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let i=f(e)?[]:{};return A(e,(e,t)=>{let s=r(e,n+1);p(s)||(i[t]=s)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:M,isThenable:e=>e&&(b(e)||y(e))&&y(e.then)&&y(e.catch)}}),s("lwbau",function(t,r){e(t.exports,"default",()=>n);function n(e,t){return function(){return e.apply(t,arguments)}}}),s("eCrWh",function(t,r){e(t.exports,"default",()=>p);var n=i("i4ijA"),s=i("h9Lf1"),o=i("itbxz"),a=i("2u9Ce"),l=i("kSe7Y"),u=i("kHvG3"),c=i("hd4Q7"),h=i("fRBtE");let d=c.default.validators;class f{constructor(e){this.defaults=e,this.interceptors={request:new o.default,response:new o.default}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=Error();let r=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?r&&!String(e.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+r):e.stack=r}throw e}}_request(e,t){let r,i;"string"==typeof e?(t=t||{}).url=e:t=e||{};let{transitional:s,paramsSerializer:o,headers:u}=t=(0,l.default)(this.defaults,t);void 0!==s&&(0,c.default).assertOptions(s,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=o&&((0,n.default).isFunction(o)?t.paramsSerializer={serialize:o}:(0,c.default).assertOptions(o,{encode:d.function,serialize:d.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let f=u&&(0,n.default).merge(u.common,u[t.method]);u&&(0,n.default).forEach(["delete","get","head","post","put","patch","common"],e=>{delete u[e]}),t.headers=(0,h.default).concat(f,u);let p=[],g=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(g=g&&e.synchronous,p.unshift(e.fulfilled,e.rejected))});let m=[];this.interceptors.response.forEach(function(e){m.push(e.fulfilled,e.rejected)});let y=0;if(!g){let e=[(0,a.default).bind(this),void 0];for(e.unshift.apply(e,p),e.push.apply(e,m),i=e.length,r=Promise.resolve(t);y<i;)r=r.then(e[y++],e[y++]);return r}i=p.length;let v=t;for(y=0;y<i;){let e=p[y++],t=p[y++];try{v=e(v)}catch(e){t.call(this,e);break}}try{r=(0,a.default).call(this,v)}catch(e){return Promise.reject(e)}for(y=0,i=m.length;y<i;)r=r.then(m[y++],m[y++]);return r}getUri(e){e=(0,l.default)(this.defaults,e);let t=(0,u.default)(e.baseURL,e.url);return(0,s.default)(t,e.params,e.paramsSerializer)}}(0,n.default).forEach(["delete","get","head","options"],function(e){f.prototype[e]=function(t,r){return this.request((0,l.default)(r||{},{method:e,url:t,data:(r||{}).data}))}}),(0,n.default).forEach(["post","put","patch"],function(e){function t(t){return function(r,n,i){return this.request((0,l.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)});var p=f}),s("h9Lf1",function(t,r){e(t.exports,"default",()=>a);var n=i("i4ijA"),s=i("5B7zY");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,r){let i;if(!t)return e;let a=r&&r.encode||o,l=r&&r.serialize;if(i=l?l(t,r):(0,n.default).isURLSearchParams(t)?t.toString():new(0,s.default)(t,r).toString(a)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}}),s("5B7zY",function(t,r){e(t.exports,"default",()=>l);var n=i("gZZY4");function s(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function o(e,t){this._pairs=[],e&&(0,n.default)(e,this,t)}let a=o.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){let t=e?function(t){return e.call(this,t,s)}:s;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var l=o}),s("gZZY4",function(t,r){e(t.exports,"default",()=>d);var n=i("i4ijA"),s=i("k5sPl"),o=i("l52nF"),a=i("cNvas").Buffer;function l(e){return(0,n.default).isPlainObject(e)||(0,n.default).isArray(e)}function u(e){return(0,n.default).endsWith(e,"[]")?e.slice(0,-2):e}function c(e,t,r){return e?e.concat(t).map(function(e,t){return e=u(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}let h=(0,n.default).toFlatObject(n.default,{},null,function(e){return/^is[A-Z]/.test(e)});var d=function(e,t,r){if(!(0,n.default).isObject(e))throw TypeError("target must be an object");t=t||new(o.default||FormData);let i=(r=(0,n.default).toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!(0,n.default).isUndefined(t[e])})).metaTokens,d=r.visitor||y,f=r.dots,p=r.indexes,g=(r.Blob||"undefined"!=typeof Blob&&Blob)&&(0,n.default).isSpecCompliantForm(t);if(!(0,n.default).isFunction(d))throw TypeError("visitor must be a function");function m(e){if(null===e)return"";if((0,n.default).isDate(e))return e.toISOString();if(!g&&(0,n.default).isBlob(e))throw new s.default("Blob is not supported. Use a Buffer instead.");return(0,n.default).isArrayBuffer(e)||(0,n.default).isTypedArray(e)?g&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function y(e,r,s){let o=e;if(e&&!s&&"object"==typeof e){if((0,n.default).endsWith(r,"{}"))r=i?r:r.slice(0,-2),e=JSON.stringify(e);else{var a;if((0,n.default).isArray(e)&&(a=e,(0,n.default).isArray(a)&&!a.some(l))||((0,n.default).isFileList(e)||(0,n.default).endsWith(r,"[]"))&&(o=(0,n.default).toArray(e)))return r=u(r),o.forEach(function(e,i){(0,n.default).isUndefined(e)||null===e||t.append(!0===p?c([r],i,f):null===p?r:r+"[]",m(e))}),!1}}return!!l(e)||(t.append(c(s,r,f),m(e)),!1)}let v=[],b=Object.assign(h,{defaultVisitor:y,convertValue:m,isVisitable:l});if(!(0,n.default).isObject(e))throw TypeError("data must be an object");return function e(r,i){if(!(0,n.default).isUndefined(r)){if(-1!==v.indexOf(r))throw Error("Circular reference detected in "+i.join("."));v.push(r),(0,n.default).forEach(r,function(r,s){!0===(!((0,n.default).isUndefined(r)||null===r)&&d.call(t,r,(0,n.default).isString(s)?s.trim():s,i,b))&&e(r,i?i.concat(s):[s])}),v.pop()}}(e),t}}),s("k5sPl",function(t,r){e(t.exports,"default",()=>l);var n=i("i4ijA");function s(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}(0,n.default).inherits(s,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:(0,n.default).toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let o=s.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{a[e]={value:e}}),Object.defineProperties(s,a),Object.defineProperty(o,"isAxiosError",{value:!0}),s.from=(e,t,r,i,a,l)=>{let u=Object.create(o);return(0,n.default).toFlatObject(e,u,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),s.call(u,e.message,t,r,i,a),u.cause=e,u.name=e.name,l&&Object.assign(u,l),u};var l=s}),s("l52nF",function(t,r){e(t.exports,"default",()=>n);var n=null}),s("cNvas",function(t,r){e(t.exports,"Buffer",()=>n,e=>n=e),e(t.exports,"INSPECT_MAX_BYTES",()=>s,e=>s=e);var n,s,o=i("3g1et"),a=i("1AWVL");let l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function u(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return f(e)}return h(e,t,r)}function h(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!c.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|y(e,t),n=u(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(F(e,Uint8Array)){let t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(F(e,ArrayBuffer)||e&&F(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(F(e,SharedArrayBuffer)||e&&F(e.buffer,SharedArrayBuffer)))return g(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);let i=function(e){var t;if(c.isBuffer(e)){let t=0|m(e.length),r=u(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?u(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return d(e),u(e<0?0:0|m(e))}function p(e){let t=e.length<0?0:0|m(e.length),r=u(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function g(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),c.prototype),n}function m(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function y(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||F(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return B(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return M(e).length;default:if(i)return n?-1:B(e).length;t=(""+t).toLowerCase(),i=!0}}function v(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=V[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return I(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var i,s;return i=t,s=r,0===i&&s===this.length?o.fromByteArray(this):o.fromByteArray(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function b(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function E(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(u(e,s+n)!==u(t,n)){r=!1;break}if(r)return s}return -1}function I(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function _(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function T(e,t,r,n,i,s){if(!c.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function S(e,t,r,n,i){L(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function A(e,t,r,n,i){L(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function O(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function R(e,t,r,n,i){return t=+t,r>>>=0,i||O(e,t,r,4,34028234663852886e22,-34028234663852886e22),a.write(e,t,r,n,23,4),r+4}function C(e,t,r,n,i){return t=+t,r>>>=0,i||O(e,t,r,8,17976931348623157e292,-17976931348623157e292),a.write(e,t,r,n,52,8),r+8}n=c,s=50,c.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return h(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return(d(e),e<=0)?u(e):void 0!==t?"string"==typeof r?u(e).fill(t,r):u(e).fill(t):u(e)},c.allocUnsafe=function(e){return f(e)},c.allocUnsafeSlow=function(e){return f(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(F(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),F(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=c.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(F(t,Uint8Array))i+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(c.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},c.byteLength=y,c.prototype._isBuffer=!0,c.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},c.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},c.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},c.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?I(this,0,e):v.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="",t=s;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(c.prototype[l]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,i){if(F(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let s=i-n,o=r-t,a=Math.min(s,o),l=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<a;++e)if(l[e]!==u[e]){s=l[e],o=u[e];break}return s<o?-1:o<s?1:0},c.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return E(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return E(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){var i,s,o,a,l,u,c,h;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,j(B(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,j(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,u=r,j(M(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,h=r,j(function(e,t){let r,n;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,h);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},c.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||_(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=H(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&x(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),c.prototype.readBigUInt64BE=H(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&x(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},c.prototype.readInt8=function(e,t){return(e>>>=0,t||_(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||_(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||_(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=H(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&x(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),c.prototype.readBigInt64BE=H(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&x(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||_(e,4,this.length),a.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||_(e,4,this.length),a.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||_(e,8,this.length),a.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||_(e,8,this.length),a.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;T(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;T(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=H(function(e,t=0){return S(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeBigUInt64BE=H(function(e,t=0){return A(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);T(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||T(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=H(function(e,t=0){return S(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeBigInt64BE=H(function(e,t=0){return A(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeFloatLE=function(e,t,r){return R(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return R(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return C(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return C(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},c.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let s=c.isBuffer(e)?e:c.from(e,n),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%o]}return this};let k={};function N(e,t,r){k[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function P(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function L(e,t,r,n,i,s){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new k.ERR_OUT_OF_RANGE("value",n,e)}D(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&x(i,n.length-(s+1))}function D(e,t){if("number"!=typeof e)throw new k.ERR_INVALID_ARG_TYPE(t,"number",e)}function x(e,t,r){if(Math.floor(e)!==e)throw D(e,r),new k.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new k.ERR_BUFFER_OUT_OF_BOUNDS;throw new k.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}N("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),N("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),N("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=P(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=P(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let U=/[^+/0-9A-Za-z-_]/g;function B(e,t){let r;t=t||1/0;let n=e.length,i=null,s=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function M(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(U,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function j(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function F(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let V=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function H(e){return"undefined"==typeof BigInt?$:e}function $(){throw Error("BigInt not supported")}}),s("3g1et",function(t,r){e(t.exports,"toByteArray",()=>n,e=>n=e),e(t.exports,"fromByteArray",()=>i,e=>i=e),n=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],l=new a((i+s)*3/4-s),u=0,c=s>0?i-4:i;for(r=0;r<c;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===s&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===s&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=0,a=r-n;o<a;o+=16383)i.push(function(e,t,r){for(var n,i=[],o=t;o<r;o+=3)i.push(s[(n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+s[n>>12&63]+s[n>>6&63]+s[63&n]);return i.join("")}(e,o,o+16383>a?a:o+16383));return 1===n?i.push(s[(t=e[r-1])>>2]+s[t<<4&63]+"=="):2===n&&i.push(s[(t=(e[r-2]<<8)+e[r-1])>>10]+s[t>>4&63]+s[t<<2&63]+"="),i.join("")};for(var n,i,s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,c=l.length;u<c;++u)s[u]=l[u],o[l.charCodeAt(u)]=u;o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}),s("1AWVL",function(t,r){var n,i;e(t.exports,"read",()=>n,e=>n=e),e(t.exports,"write",()=>i,e=>i=e),n=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,u=l>>1,c=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-c)-1,f>>=-c,c+=a;c>0;s=256*s+e[t+h],h+=d,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=n;c>0;o=256*o+e[t+h],h+=d,c-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),s-=u}return(f?-1:1)*o*Math.pow(2,s-n)},i=function(e,t,r,n,i,s){var o,a,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,d=23===i?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=c?(a=0,o=c):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[r+f]=255&o,f+=p,o/=256,u-=8);e[r+f-p]|=128*g}}),s("itbxz",function(t,r){e(t.exports,"default",()=>s);var n=i("i4ijA"),s=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){(0,n.default).forEach(this.handlers,function(t){null!==t&&e(t)})}}}),s("2u9Ce",function(t,r){e(t.exports,"default",()=>h);var n=i("iQhXV"),s=i("5SIUr"),o=i("bJncD"),a=i("7XT9I"),l=i("fRBtE"),u=i("9o9qV");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a.default(null,e)}function h(e){return c(e),e.headers=(0,l.default).from(e.headers),e.data=(0,n.default).call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),(0,u.default).getAdapter(e.adapter||o.default.adapter)(e).then(function(t){return c(e),t.data=(0,n.default).call(e,e.transformResponse,t),t.headers=(0,l.default).from(t.headers),t},function(t){return!(0,s.default)(t)&&(c(e),t&&t.response&&(t.response.data=(0,n.default).call(e,e.transformResponse,t.response),t.response.headers=(0,l.default).from(t.response.headers))),Promise.reject(t)})}}),s("iQhXV",function(t,r){e(t.exports,"default",()=>a);var n=i("i4ijA"),s=i("bJncD"),o=i("fRBtE");function a(e,t){let r=this||s.default,i=t||r,a=(0,o.default).from(i.headers),l=i.data;return(0,n.default).forEach(e,function(e){l=e.call(r,l,a.normalize(),t?t.status:void 0)}),a.normalize(),l}}),s("bJncD",function(t,r){e(t.exports,"default",()=>d);var n=i("i4ijA"),s=i("k5sPl"),o=i("fK4vu"),a=i("gZZY4"),l=i("aVTCj"),u=i("aispy"),c=i("2eGDI");let h={transitional:o.default,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let i=t.getContentType()||"",s=i.indexOf("application/json")>-1,o=(0,n.default).isObject(e);if(o&&(0,n.default).isHTMLForm(e)&&(e=new FormData(e)),(0,n.default).isFormData(e))return s?JSON.stringify((0,c.default)(e)):e;if((0,n.default).isArrayBuffer(e)||(0,n.default).isBuffer(e)||(0,n.default).isStream(e)||(0,n.default).isFile(e)||(0,n.default).isBlob(e))return e;if((0,n.default).isArrayBufferView(e))return e.buffer;if((0,n.default).isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return(0,l.default)(e,this.formSerializer).toString();if((r=(0,n.default).isFileList(e))||i.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return(0,a.default)(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||s?(t.setContentType("application/json",!1),function(e,t,r){if((0,n.default).isString(e))try{return(0,JSON.parse)(e),(0,n.default).trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||h.transitional,r=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&(0,n.default).isString(e)&&(r&&!this.responseType||i)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&i){if("SyntaxError"===e.name)throw(0,s.default).from(e,s.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:u.default.classes.FormData,Blob:u.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};(0,n.default).forEach(["delete","get","head","post","put","patch"],e=>{h.headers[e]={}});var d=h}),s("fK4vu",function(t,r){e(t.exports,"default",()=>n);var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),s("aVTCj",function(t,r){e(t.exports,"default",()=>a);var n=i("i4ijA"),s=i("gZZY4"),o=i("aispy");function a(e,t){return(0,s.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,i){return o.default.isNode&&(0,n.default).isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}}),s("aispy",function(t,r){e(t.exports,"default",()=>s);var n=i("8KDYS"),s={...i("jUKjb"),...n.default}}),s("8KDYS",function(t,r){e(t.exports,"default",()=>a);var n=i("hbIyF"),s=i("jDCoP"),o=i("cuQ85"),a={isBrowser:!0,classes:{URLSearchParams:n.default,FormData:s.default,Blob:o.default},protocols:["http","https","file","blob","url","data"]}}),s("hbIyF",function(t,r){e(t.exports,"default",()=>s);var n=i("5B7zY"),s="undefined"!=typeof URLSearchParams?URLSearchParams:n.default}),s("jDCoP",function(t,r){e(t.exports,"default",()=>n);var n="undefined"!=typeof FormData?FormData:null}),s("cuQ85",function(t,r){e(t.exports,"default",()=>n);var n="undefined"!=typeof Blob?Blob:null}),s("jUKjb",function(t,r){let n;e(t.exports,"hasBrowserEnv",()=>i),e(t.exports,"hasStandardBrowserEnv",()=>s),e(t.exports,"hasStandardBrowserWebWorkerEnv",()=>o);let i="undefined"!=typeof window&&"undefined"!=typeof document,s=(n="undefined"!=typeof navigator&&navigator.product,i&&0>["ReactNative","NativeScript","NS"].indexOf(n)),o="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts}),s("2eGDI",function(t,r){e(t.exports,"default",()=>s);var n=i("i4ijA"),s=function(e){if((0,n.default).isFormData(e)&&(0,n.default).isFunction(e.entries)){let t={};return(0,n.default).forEachEntry(e,(e,r)=>{!function e(t,r,i,s){let o=t[s++];if("__proto__"===o)return!0;let a=Number.isFinite(+o),l=s>=t.length;return(o=!o&&(0,n.default).isArray(i)?i.length:o,l)?(0,n.default).hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r:(i[o]&&(0,n.default).isObject(i[o])||(i[o]=[]),e(t,r,i[o],s)&&(0,n.default).isArray(i[o])&&(i[o]=function(e){let t,r;let n={},i=Object.keys(e),s=i.length;for(t=0;t<s;t++)n[r=i[t]]=e[r];return n}(i[o]))),!a}((0,n.default).matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null}}),s("fRBtE",function(t,r){e(t.exports,"default",()=>d);var n=i("i4ijA"),s=i("gwcWo");let o=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function l(e){return!1===e||null==e?e:(0,n.default).isArray(e)?e.map(l):String(e)}let u=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function c(e,t,r,i,s){if((0,n.default).isFunction(i))return i.call(this,t,r);if(s&&(t=r),(0,n.default).isString(t)){if((0,n.default).isString(i))return -1!==t.indexOf(i);if((0,n.default).isRegExp(i))return i.test(t)}}class h{constructor(e){e&&this.set(e)}set(e,t,r){let i=this;function o(e,t,r){let s=a(t);if(!s)throw Error("header name must be a non-empty string");let o=(0,n.default).findKey(i,s);o&&void 0!==i[o]&&!0!==r&&(void 0!==r||!1===i[o])||(i[o||t]=l(e))}let c=(e,t)=>(0,n.default).forEach(e,(e,r)=>o(e,r,t));return(0,n.default).isPlainObject(e)||e instanceof this.constructor?c(e,t):(0,n.default).isString(e)&&(e=e.trim())&&!u(e)?c((0,s.default)(e),t):null!=e&&o(t,e,r),this}get(e,t){if(e=a(e)){let r=(0,n.default).findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if((0,n.default).isFunction(t))return t.call(this,e,r);if((0,n.default).isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){let r=(0,n.default).findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||c(this,this[r],r,t)))}return!1}delete(e,t){let r=this,i=!1;function s(e){if(e=a(e)){let s=(0,n.default).findKey(r,e);s&&(!t||c(r,r[s],s,t))&&(delete r[s],i=!0)}}return(0,n.default).isArray(e)?e.forEach(s):s(e),i}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let i=t[r];(!e||c(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}normalize(e){let t=this,r={};return(0,n.default).forEach(this,(i,s)=>{let o=(0,n.default).findKey(r,s);if(o){t[o]=l(i),delete t[s];return}let a=e?s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(s).trim();a!==s&&delete t[s],t[a]=l(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return(0,n.default).forEach(this,(r,i)=>{null!=r&&!1!==r&&(t[i]=e&&(0,n.default).isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=(this[o]=this[o]={accessors:{}}).accessors,r=this.prototype;function i(e){let i=a(e);t[i]||(function(e,t){let r=(0,n.default).toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})})}(r,e),t[i]=!0)}return(0,n.default).isArray(e)?e.forEach(i):i(e),this}}h.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),(0,n.default).reduceDescriptors(h.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),(0,n.default).freezeMethods(h);var d=h}),s("gwcWo",function(t,r){e(t.exports,"default",()=>s);let n=(0,i("i4ijA").default).toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var s=e=>{let t,r,i;let s={};return e&&e.split("\n").forEach(function(e){i=e.indexOf(":"),t=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!t||s[t]&&n[t]||("set-cookie"===t?s[t]?s[t].push(r):s[t]=[r]:s[t]=s[t]?s[t]+", "+r:r)}),s}}),s("5SIUr",function(t,r){e(t.exports,"default",()=>n);function n(e){return!!(e&&e.__CANCEL__)}}),s("7XT9I",function(t,r){e(t.exports,"default",()=>o);var n=i("k5sPl");function s(e,t,r){(0,n.default).call(this,null==e?"canceled":e,n.default.ERR_CANCELED,t,r),this.name="CanceledError"}(0,i("i4ijA").default).inherits(s,n.default,{__CANCEL__:!0});var o=s}),s("9o9qV",function(t,r){e(t.exports,"default",()=>h);var n=i("i4ijA"),s=i("l52nF"),o=i("2kdvM"),a=i("k5sPl");let l={http:s.default,xhr:o.default};(0,n.default).forEach(l,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});let u=e=>`- ${e}`,c=e=>(0,n.default).isFunction(e)||null===e||!1===e;var h={getAdapter:e=>{let t,r;let{length:i}=e=(0,n.default).isArray(e)?e:[e],s={};for(let n=0;n<i;n++){let i;if(r=t=e[n],!c(t)&&void 0===(r=l[(i=String(t)).toLowerCase()]))throw new a.default(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+n]=r}if(!r){let e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")),t=i?e.length>1?"since :\n"+e.map(u).join("\n"):" "+u(e[0]):"as no adapter specified";throw new a.default("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")}return r},adapters:l}}),s("2kdvM",function(t,r){e(t.exports,"default",()=>v);var n=i("i4ijA"),s=i("4Bh8W"),o=i("j9ifV"),a=i("h9Lf1"),l=i("kHvG3"),u=i("kgVUb"),c=i("fK4vu"),h=i("k5sPl"),d=i("7XT9I"),f=i("jOreR"),p=i("aispy"),g=i("fRBtE"),m=i("el6rn");function y(e,t){let r=0,n=(0,m.default)(50,250);return i=>{let s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-r,l=n(a);r=s;let u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}var v="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){let i,m,v=e.data,b=(0,g.default).from(e.headers).normalize(),{responseType:E,withXSRFToken:w}=e;function I(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}if((0,n.default).isFormData(v)){if(p.default.hasStandardBrowserEnv||p.default.hasStandardBrowserWebWorkerEnv)b.setContentType(!1);else if(!1!==(m=b.getContentType())){let[e,...t]=m?m.split(";").map(e=>e.trim()).filter(Boolean):[];b.setContentType([e||"multipart/form-data",...t].join("; "))}}let _=new XMLHttpRequest;if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";b.set("Authorization","Basic "+btoa(t+":"+r))}let T=(0,l.default)(e.baseURL,e.url);function S(){if(!_)return;let n=(0,g.default).from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),i={data:E&&"text"!==E&&"json"!==E?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:e,request:_};(0,s.default)(function(e){t(e),I()},function(e){r(e),I()},i),_=null}if(_.open(e.method.toUpperCase(),(0,a.default)(T,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,"onloadend"in _?_.onloadend=S:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(S)},_.onabort=function(){_&&(r(new h.default("Request aborted",h.default.ECONNABORTED,e,_)),_=null)},_.onerror=function(){r(new h.default("Network Error",h.default.ERR_NETWORK,e,_)),_=null},_.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||c.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new h.default(t,n.clarifyTimeoutError?h.default.ETIMEDOUT:h.default.ECONNABORTED,e,_)),_=null},p.default.hasStandardBrowserEnv&&(w&&(0,n.default).isFunction(w)&&(w=w(e)),w||!1!==w&&(0,u.default)(T))){let t=e.xsrfHeaderName&&e.xsrfCookieName&&(0,o.default).read(e.xsrfCookieName);t&&b.set(e.xsrfHeaderName,t)}void 0===v&&b.setContentType(null),"setRequestHeader"in _&&(0,n.default).forEach(b.toJSON(),function(e,t){_.setRequestHeader(t,e)}),(0,n.default).isUndefined(e.withCredentials)||(_.withCredentials=!!e.withCredentials),E&&"json"!==E&&(_.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",y(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",y(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{_&&(r(!t||t.type?new d.default(null,e,_):t),_.abort(),_=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));let A=(0,f.default)(T);if(A&&-1===(0,p.default).protocols.indexOf(A)){r(new h.default("Unsupported protocol "+A+":",h.default.ERR_BAD_REQUEST,e));return}_.send(v||null)})}}),s("4Bh8W",function(t,r){e(t.exports,"default",()=>s);var n=i("k5sPl");function s(e,t,r){let i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new n.default("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}}),s("j9ifV",function(t,r){e(t.exports,"default",()=>s);var n=i("i4ijA"),s=i("aispy").default.hasStandardBrowserEnv?{write(e,t,r,i,s,o){let a=[e+"="+encodeURIComponent(t)];(0,n.default).isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),(0,n.default).isString(i)&&a.push("path="+i),(0,n.default).isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}}}),s("kHvG3",function(t,r){e(t.exports,"default",()=>o);var n=i("2IQpt"),s=i("bb7xE");function o(e,t){return e&&!(0,n.default)(t)?(0,s.default)(e,t):t}}),s("2IQpt",function(t,r){e(t.exports,"default",()=>n);function n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}}),s("bb7xE",function(t,r){e(t.exports,"default",()=>n);function n(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}}),s("kgVUb",function(t,r){e(t.exports,"default",()=>s);var n=i("i4ijA"),s=i("aispy").default.hasStandardBrowserEnv?function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){let n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){let r=(0,n.default).isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}}),s("jOreR",function(t,r){e(t.exports,"default",()=>n);function n(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}}),s("el6rn",function(t,r){e(t.exports,"default",()=>n);var n=function(e,t){let r;let n=Array(e=e||10),i=Array(e),s=0,o=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),u=i[o];r||(r=l),n[s]=a,i[s]=l;let c=o,h=0;for(;c!==s;)h+=n[c++],c%=e;if((s=(s+1)%e)===o&&(o=(o+1)%e),l-r<t)return;let d=u&&l-u;return d?Math.round(1e3*h/d):void 0}}}),s("kSe7Y",function(t,r){e(t.exports,"default",()=>a);var n=i("i4ijA"),s=i("fRBtE");let o=e=>e instanceof s.default?e.toJSON():e;function a(e,t){t=t||{};let r={};function i(e,t,r){return(0,n.default).isPlainObject(e)&&(0,n.default).isPlainObject(t)?(0,n.default).merge.call({caseless:r},e,t):(0,n.default).isPlainObject(t)?(0,n.default).merge({},t):(0,n.default).isArray(t)?t.slice():t}function s(e,t,r){return(0,n.default).isUndefined(t)?(0,n.default).isUndefined(e)?void 0:i(void 0,e,r):i(e,t,r)}function a(e,t){if(!(0,n.default).isUndefined(t))return i(void 0,t)}function l(e,t){return(0,n.default).isUndefined(t)?(0,n.default).isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function u(r,n,s){return s in t?i(r,n):s in e?i(void 0,r):void 0}let c={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(e,t)=>s(o(e),o(t),!0)};return(0,n.default).forEach(Object.keys(Object.assign({},e,t)),function(i){let o=c[i]||s,a=o(e[i],t[i],i);(0,n.default).isUndefined(a)&&o!==u||(r[i]=a)}),r}}),s("hd4Q7",function(t,r){e(t.exports,"default",()=>l);var n=i("8WPkr"),s=i("k5sPl");let o={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});let a={};o.transitional=function(e,t,r){function i(e,t){return"[Axios v"+n.VERSION+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,n,o)=>{if(!1===e)throw new s.default(i(n," has been removed"+(t?" in "+t:"")),s.default.ERR_DEPRECATED);return t&&!a[n]&&(a[n]=!0,console.warn(i(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,o)}};var l={assertOptions:function(e,t,r){if("object"!=typeof e)throw new s.default("options must be an object",s.default.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),i=n.length;for(;i-- >0;){let o=n[i],a=t[o];if(a){let t=e[o],r=void 0===t||a(t,o,e);if(!0!==r)throw new s.default("option "+o+" must be "+r,s.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new s.default("Unknown option "+o,s.default.ERR_BAD_OPTION)}},validators:o}}),s("8WPkr",function(t,r){e(t.exports,"VERSION",()=>n);let n="1.6.7"}),s("9GGcx",function(t,r){e(t.exports,"default",()=>o);var n=i("7XT9I");class s{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,i,s){r.reason||(r.reason=new n.default(e,i,s),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new s(function(t){e=t}),cancel:e}}}var o=s}),s("4rx4g",function(t,r){e(t.exports,"default",()=>n);function n(e){return function(t){return e.apply(null,t)}}}),s("4Qexm",function(t,r){e(t.exports,"default",()=>s);var n=i("i4ijA");function s(e){return(0,n.default).isObject(e)&&!0===e.isAxiosError}}),s("dcCu5",function(t,r){e(t.exports,"default",()=>i);let n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach(([e,t])=>{n[t]=e});var i=n}),s("bMpwc",function(e,t){}),s("7UJs8",function(e,t){var r=document.getElementById("myModal"),n=r.querySelector(".close");function i(){r.classList.remove("show")}document.querySelector("#myBtn").addEventListener("click",function(){r.classList.add("show")}),n.addEventListener("click",i),document.addEventListener("keydown",function(e){"Escape"===e.key&&i()}),window.addEventListener("click",function(e){e.target===r&&i()})}),s("kBG4Y",function(e,t){}),s("4boOf",function(e,t){let r=document.querySelector(".plus-minus"),n=document.querySelector(".library-list"),i=document.querySelector(".nav-library"),s=document.querySelector(".mobile-nav-open-btn"),o=document.querySelector(".mobile-nav-close-btn"),a=document.querySelectorAll(".mobile-nav"),l=document.querySelector(".mobile-menu"),u=()=>{let e=window.innerWidth,t=window.scrollY;e<768&&t>=216?l.style.display="flex":(l.style.display="none",a.forEach(e=>e.classList.remove("mobile-visible")))},c=()=>{n.classList.toggle("nav-hidden"),n.classList.contains("nav-hidden")?r.innerHTML='<i class="fa-solid fa-plus"></i>':r.innerHTML='<i class="fa-solid fa-minus"></i>'};window.addEventListener("scroll",u),window.addEventListener("resize",u),u(),s.addEventListener("click",()=>{a.forEach(e=>e.classList.add("mobile-visible"))}),o.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("mobile-visible"))}),i.addEventListener("click",e=>{e.preventDefault(),c()})}),s("2AKVI",function(e,t){/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i("Tud8h").registerVersion)("firebase","10.8.1","app")}),s("Tud8h",function(t,r){e(t.exports,"_registerComponent",()=>m),e(t.exports,"_getProvider",()=>y),e(t.exports,"SDK_VERSION",()=>E),e(t.exports,"getApp",()=>w),e(t.exports,"registerVersion",()=>I);var n=i("94PYV"),s=i("4qWNj"),o=i("5hSES"),a=i("9tn3b");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let u="@firebase/app",c="0.9.28",h=new s.Logger("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(e){let t=e.name;if(g.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(g.set(t,e),p.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function y(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let v=new o.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new n.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E="10.8.1";function w(e=d){let t=p.get(e);if(!t&&e===d&&(0,o.getDefaultAppConfig)())return function(e,t={}){let r;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw v.create("bad-app-name",{appName:String(s)});if(r||(r=(0,o.getDefaultAppConfig)()),!r)throw v.create("no-options");let a=p.get(s);if(a){if((0,o.deepEqual)(r,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw v.create("duplicate-app",{appName:s})}let l=new n.ComponentContainer(s);for(let e of g.values())l.addComponent(e);let u=new b(r,i,l);return p.set(s,u),u}();if(!t)throw v.create("no-app",{appName:e});return t}function I(e,t,r){var i;let s=null!==(i=f[e])&&void 0!==i?i:e;r&&(s+=`-${r}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${s}" with version "${t}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),h.warn(e.join(" "));return}m(new n.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let _="firebase-heartbeat-store",T=null;function S(){return T||(T=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(_)}catch(e){console.warn(e)}}}).catch(e=>{throw v.create("idb-open",{originalErrorMessage:e.message})})),T}async function A(e){try{let t=(await S()).transaction(_),r=await t.objectStore(_).get(R(e));return await t.done,r}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{let t=v.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}async function O(e,t){try{let r=(await S()).transaction(_,"readwrite"),n=r.objectStore(_);await n.put(t,R(e)),await r.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{let t=v.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function R(e){return`${e.name}!${e.options.appId}`}class C{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new N(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=k();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=k(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),P(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),P(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function k(){return new Date().toISOString().substring(0,10)}class N{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await A(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function P(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}m(new n.Component("platform-logger",e=>new l(e),"PRIVATE")),m(new n.Component("heartbeat",e=>new C(e),"PRIVATE")),I(u,c,""),I(u,c,"esm2017"),I("fire-js","")}),s("94PYV",function(t,r){e(t.exports,"Component",()=>s),e(t.exports,"ComponentContainer",()=>l);var n=i("5hSES");class s{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}),s("5hSES",function(r,n){e(r.exports,"base64urlEncodeWithoutPadding",()=>h),e(r.exports,"base64Decode",()=>d),e(r.exports,"getDefaultEmulatorHost",()=>y),e(r.exports,"getDefaultAppConfig",()=>v),e(r.exports,"getExperimentalSetting",()=>b),e(r.exports,"Deferred",()=>E),e(r.exports,"getUA",()=>w),e(r.exports,"isMobileCordova",()=>I),e(r.exports,"isBrowserExtension",()=>_),e(r.exports,"isReactNative",()=>T),e(r.exports,"isIE",()=>S),e(r.exports,"isIndexedDBAvailable",()=>A),e(r.exports,"validateIndexedDBOpenable",()=>O),e(r.exports,"FirebaseError",()=>R),e(r.exports,"ErrorFactory",()=>C),e(r.exports,"isEmpty",()=>N),e(r.exports,"deepEqual",()=>function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(P(n)&&P(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}),e(r.exports,"querystring",()=>L),e(r.exports,"querystringDecode",()=>D),e(r.exports,"extractQuerystring",()=>x),e(r.exports,"createSubscribe",()=>U),e(r.exports,"getModularInstance",()=>j);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s=i("2C7N7");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},a=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new u;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(e){let t=o(e);return l.encodeByteArray(t,!0)},h=function(e){return c(e).replace(/\./g,"")},d=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},f=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,p=()=>{if(void 0===s||void 0===s.env)return;let e=void 0;if(e)return JSON.parse(e)},g=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&d(e[1]);return t&&JSON.parse(t)},m=()=>{try{return f()||p()||g()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},y=e=>{var t,r;return null===(r=null===(t=m())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},v=()=>{var e;return null===(e=m())||void 0===e?void 0:e.config},b=e=>{var t;return null===(t=m())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function I(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function _(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){let e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){try{return"object"==typeof indexedDB}catch(e){return!1}}function O(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class R extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(k,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new R(n,o,r)}}let k=/\{\$([^}]+)}/g;function N(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function D(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function x(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function U(e,t){let r=new B(e,t);return r.subscribe.bind(r)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=M),void 0===n.error&&(n.error=M),void 0===n.complete&&(n.complete=M);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return e&&e._delegate?e._delegate:e}}),s("2C7N7",function(e,t){var r,n,i,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u=[],c=!1,h=-1;function d(){c&&i&&(c=!1,i.length?u=i.concat(u):h=-1,u.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=u.length;t;){for(i=u,u=[];++h<t;)i&&i[h].run();h=-1,t=u.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||c||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),s("4qWNj",function(t,r){var n,i;e(t.exports,"LogLevel",()=>n),e(t.exports,"Logger",()=>c),e(t.exports,"setLogLevel",()=>h),e(t.exports,"setUserLogHandler",()=>d);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function h(e){s.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let r of s){let i=null;t&&t.level&&(i=o[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");r>=(null!=i?i:t.logLevel)&&e({level:n[r].toLowerCase(),message:o,args:s,type:t.name})}}}}),s("9tn3b",function(t,r){e(t.exports,"openDB",()=>s);var n=i("aLdag");function s(e,t,{blocked:r,upgrade:i,blocking:s,terminated:o}={}){let a=indexedDB.open(e,t),l=(0,n.w)(a);return i&&a.addEventListener("upgradeneeded",e=>{i((0,n.w)(a.result),e.oldVersion,e.newVersion,(0,n.w)(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),l.then(e=>{o&&e.addEventListener("close",()=>o()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),l}let o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function u(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(l.get(t))return l.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=a.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||o.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return l.set(t,s),s}(0,n.r)(e=>({...e,get:(t,r,n)=>u(t,r)||e.get(t,r,n),has:(t,r)=>!!u(t,r)||e.has(t,r)}))}),s("aLdag",function(t,r){let n,i;e(t.exports,"w",()=>f),e(t.exports,"r",()=>d);let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,a=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,h={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return f(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){h=e(h)}function f(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(f(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),c.set(t,e),t}(e);if(u.has(e))return u.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(o.get(this))}:function(...e){return f(t.apply(p(this),e))}:function(e,...r){let n=t.call(p(this),e,...r);return l.set(n,e.sort?e.sort():[e]),f(n)}:(t instanceof IDBTransaction&&function(e){if(a.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});a.set(e,t)}(t),s(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,h):t;return r!==e&&(u.set(e,r),c.set(r,e)),r}let p=e=>c.get(e)}),s("46SdE",function(e,t){i("aCkGa")}),s("aCkGa",function(e,t){i("jEM9l"),i("5hSES"),i("Tud8h"),i("4qWNj"),i("94PYV")}),s("jEM9l",function(e,t){var r,n=i("5hSES"),s=i("Tud8h"),o=i("4qWNj"),a=i("9vt5s"),l=i("94PYV");function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new n.ErrorFactory("auth","Firebase",u()),h=new o.Logger("@firebase/auth");function d(e,...t){h.logLevel<=o.LogLevel.ERROR&&h.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function g(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return c.create(e,...t)}function m(e,t,...r){if(!e)throw g(t,...r)}function y(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}function v(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){var r;this.shortDelay=e,this.longDelay=t,r="Short delay should be less than long delay!",t>e||y(r),this.isMobile=(0,n.isMobileCordova)()||(0,n.isReactNative)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===v()||"https:"===v()||(0,n.isBrowserExtension)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},I=new b(3e4,6e4);function _(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function T(e,t,r,i,s={}){return S(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});let a=(0,n.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),E.fetch()(O(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function S(e,t,r){e._canInitEmulator=!1;let i=Object.assign(Object.assign({},w),t);try{let t=new R(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw C(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let[t,r]=(s.ok?o.errorMessage:o.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw C(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===t)throw C(e,"email-already-in-use",o);if("USER_DISABLED"===t)throw C(e,"user-disabled",o);let a=i[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw function(e,t,r){let i=Object.assign(Object.assign({},u()),{[t]:r});return new n.ErrorFactory("auth","Firebase",i).create(t,{appName:e.name})}(e,a,r);f(e,a)}}catch(t){if(t instanceof n.FirebaseError)throw t;f(e,"network-request-failed",{message:String(t)})}}async function A(e,t,r,n,i={}){let s=await T(e,t,r,n,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function O(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){var r,n;r=e.emulator,n="Emulator should always be set here",r||y(n);let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}(e.config,i):`${e.config.apiScheme}://${i}`}class R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),I.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function C(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=p(e,t,n);return i.customData._tokenResponse=r,i}function k(e){return void 0!==e&&void 0!==e.enterprise}class N{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function P(e,t){return T(e,"GET","/v2/recaptchaConfig",_(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e,t){return T(e,"POST","/v1/accounts:delete",t)}async function D(e,t){return T(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function U(e,t=!1){let r=(0,n.getModularInstance)(e),i=await r.getIdToken(t),s=M(i);m(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:x(B(s.auth_time)),issuedAtTime:x(B(s.iat)),expirationTime:x(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function B(e){return 1e3*Number(e)}function M(e){let[t,r,i]=e.split(".");if(void 0===t||void 0===r||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,n.base64Decode)(r);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof n.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=x(this.lastLoginAt),this.creationTime=x(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){var t;let r=e.auth,n=await e.getIdToken(),i=await j(e,D(r,{idToken:n}));m(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=[...e.providerData.filter(e=>!o.some(t=>t.providerId===e.providerId)),...o],u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new V(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c})}async function $(e){let t=(0,n.getModularInstance)(e);await H(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){let r=await S(e,{},async()=>{let r=(0,n.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=O(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",E.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function q(e,t){return T(e,"POST","/v2/accounts:revokeToken",_(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(void 0!==e.idToken,"internal-error"),m(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=M(e);return m(t,"internal-error"),m(void 0!==t.exp,"internal-error"),m(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await z(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new W;return r&&(m("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(m("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(m("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){m("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new V(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await j(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U(this,e)}reload(){return $(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new G(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await H(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await j(this,L(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,y=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:E,isAnonymous:w,providerData:I,stsTokenManager:_}=t;m(b&&_,e,"internal-error");let T=W.fromJSON(this.name,_);m("string"==typeof b,e,"internal-error"),K(c,e.name),K(h,e.name),m("boolean"==typeof E,e,"internal-error"),m("boolean"==typeof w,e,"internal-error"),K(d,e.name),K(f,e.name),K(p,e.name),K(g,e.name),K(y,e.name),K(v,e.name);let S=new G({uid:b,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:y,lastLoginAt:v});return I&&Array.isArray(I)&&(S.providerData=I.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,r=!1){let n=new W;n.updateFromServerResponse(t);let i=new G({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await H(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=new Map;function Y(e){var t,r;t="Expected a class definition",e instanceof Function||y(t);let n=J.get(e);return n?(r="Instance stored in cache mismatched with class",n instanceof e||y(r)):(n=new e,J.set(e,n)),n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t,r){return`firebase:${e}:${t}:${r}`}X.type="NONE";class Z{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=Q(this.userKey,n.apiKey,i),this.fullPersistenceKey=Q("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?G._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Z(Y(X),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||Y(X),s=Q(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=G._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Z(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(function(e=(0,n.getUA)()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(function(e=(0,n.getUA)()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=(0,n.getUA)()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=(0,n.getUA)()){return/webos/i.test(e)}(t))return"Webos";if(function(e=(0,n.getUA)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=(0,n.getUA)()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=(0,n.getUA)()){return/android/i.test(e)}(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,t=[]){let r;switch(e){case"Browser":r=ee((0,n.getUA)());break;case"Worker":r=`${ee((0,n.getUA)())}-${e}`;break;default:r=e}let i=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.SDK_VERSION}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t={}){return T(e,"GET","/v2/passwordPolicy",_(e,t))}class ei{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ea(this),this.idTokenSubscription=new ea(this),this.beforeStateQueue=new er(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Y(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await Z.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await H(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,n.getModularInstance)(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Y(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new ei(await en(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await q(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Y(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await Z.create(this,[Y(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=et(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){h.logLevel<=o.LogLevel.WARN&&h.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function eo(e){return(0,n.getModularInstance)(e)}class ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,n.createSubscribe)(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};class eu{constructor(e){this.type="recaptcha-enterprise",this.auth=eo(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{P(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new N(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;k(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&k(window.grecaptcha))n(r,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=el.recaptchaEnterpriseScript;0!==t.length&&(t+=r),(s=t,el.loadJS(s)).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function ec(e,t,r,n=!1){let i;let s=new eu(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function eh(e,t,r,n){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await ec(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await ec(e,t,r,"getOobCode"===r);return n(e,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}async function ef(e,t){return T(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(e,t){return A(e,"POST","/v1/accounts:signInWithPassword",_(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}async function em(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey extends ed{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new ey(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ey(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eh(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",ep);case"emailLink":return eg(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ef);case"emailLink":return em(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(e,t){return A(e,"POST","/v1/accounts:signInWithIdp",_(e,t))}class eb extends ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eb(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=(0,a.__rest)(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eb(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return ev(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ev(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ev(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,n.querystring)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(e,t){return T(e,"POST","/v1/accounts:sendVerificationCode",_(e,t))}async function ew(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t))}async function eI(e,t){let r=await A(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t));if(r.temporaryProof)throw C(e,"account-exists-with-different-credential",r);return r}let e_={USER_NOT_FOUND:"user-not-found"};async function eT(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),e_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS extends ed{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eS({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eS({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ew(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eT(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eS({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eA{constructor(e){var t,r,i,s,o,a;let l=(0,n.querystringDecode)((0,n.extractQuerystring)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);m(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,n.querystringDecode)((0,n.extractQuerystring)(e)).link,r=t?(0,n.querystringDecode)((0,n.extractQuerystring)(t)).deep_link_id:null,i=(0,n.querystringDecode)((0,n.extractQuerystring)(e)).deep_link_id;return(i?(0,n.querystringDecode)((0,n.extractQuerystring)(i)).link:null)||i||r||t||e}(e);try{return new eA(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(){this.providerId=eO.PROVIDER_ID}static credential(e,t){return ey._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eA.parseLink(t);return m(r,"argument-error"),ey._fromEmailAndCode(e,r.code,r.tenantId)}}eO.PROVIDER_ID="password",eO.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eO.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends eR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek extends eC{constructor(){super("facebook.com")}static credential(e){return eb._fromParams({providerId:ek.PROVIDER_ID,signInMethod:ek.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ek.credentialFromTaggedObject(e)}static credentialFromError(e){return ek.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ek.credential(e.oauthAccessToken)}catch(e){return null}}}ek.FACEBOOK_SIGN_IN_METHOD="facebook.com",ek.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN extends eC{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eb._fromParams({providerId:eN.PROVIDER_ID,signInMethod:eN.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eN.credentialFromTaggedObject(e)}static credentialFromError(e){return eN.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return eN.credential(t,r)}catch(e){return null}}}eN.GOOGLE_SIGN_IN_METHOD="google.com",eN.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP extends eC{constructor(){super("github.com")}static credential(e){return eb._fromParams({providerId:eP.PROVIDER_ID,signInMethod:eP.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eP.credentialFromTaggedObject(e)}static credentialFromError(e){return eP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eP.credential(e.oauthAccessToken)}catch(e){return null}}}eP.GITHUB_SIGN_IN_METHOD="github.com",eP.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL extends eC{constructor(){super("twitter.com")}static credential(e,t){return eb._fromParams({providerId:eL.PROVIDER_ID,signInMethod:eL.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eL.credentialFromTaggedObject(e)}static credentialFromError(e){return eL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eL.credential(t,r)}catch(e){return null}}}eL.TWITTER_SIGN_IN_METHOD="twitter.com",eL.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new eD({user:await G._fromIdTokenResponse(e,r,n),providerId:ex(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new eD({user:e,providerId:ex(r),_tokenResponse:r,operationType:t})}}function ex(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU extends n.FirebaseError{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eU.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eU(e,t,r,n)}}function eB(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw eU._fromErrorAndOperation(e,r,t,n);throw r})}async function eM(e,t,r=!1){let n=await j(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return eD._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ej(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await j(e,eB(n,i,t,e),r);m(s.idToken,n,"internal-error");let o=M(s.idToken);m(o,n,"internal-error");let{sub:a}=o;return m(e.uid===a,n,"user-mismatch"),eD._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eF(e,t,r=!1){let n="signIn",i=await eB(e,n,t),s=await eD._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}new WeakMap;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new eV(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eV.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eH="firebaseLocalStorage";async function e$(e,t,r){var n,i,s;let o=await r.verify();try{let a;if(m("string"==typeof o,e,"argument-error"),m("recaptcha"===r.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return m("enroll"===t.type,e,"internal-error"),(await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},T(e,"POST","/v2/accounts/mfaEnrollment:start",_(e,i)))).phoneSessionInfo.sessionInfo;{m("signin"===t.type,e,"internal-error");let r=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;return m(r,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}},T(e,"POST","/v2/accounts/mfaSignIn:start",_(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await eE(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}new b(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez{constructor(e){this.providerId=ez.PROVIDER_ID,this.auth=eo(e)}verifyPhoneNumber(e,t){return e$(this.auth,e,(0,n.getModularInstance)(t))}static credential(e,t){return eS._fromVerification(e,t)}static credentialFromResult(e){return ez.credentialFromTaggedObject(e)}static credentialFromError(e){return ez.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eS._fromTokenResponse(t,r):null}}ez.PROVIDER_ID="phone",ez.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq extends ed{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ev(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ev(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ev(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eW(e){return eF(e.auth,new eq(e),e.bypassAuthState)}function eK(e){let{auth:t,user:r}=e;return m(r,t,"internal-error"),ej(r,new eq(e),e.bypassAuthState)}async function eG(e){let{auth:t,user:r}=e;return m(r,t,"internal-error"),eM(r,new eq(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eW;case"linkViaPopup":case"linkViaRedirect":return eG;case"reauthViaPopup":case"reauthViaRedirect":return eK;default:f(this.auth,"internal-error")}}resolve(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||y(r),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||y(r),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eY=new b(2e3,1e4);class eX extends eJ{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,eX.currentPopupAction&&eX.currentPopupAction.cancel(),eX.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||y(t);let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],r),this.authWindow.associatedEvent=r,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eX.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eY.get())};e()}}eX.currentPopupAction=null,new b(3e4,6e4),new b(5e3,15e3),encodeURIComponent("fac");class eQ{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class eZ extends eQ{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new eZ(e)}_finalizeEnroll(e,t,r){return T(e,"POST","/v2/accounts/mfaEnrollment:finalize",_(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return T(e,"POST","/v2/accounts/mfaSignIn:finalize",_(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class e0 extends eQ{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new e0(t,void 0,e)}static _fromEnrollmentId(e,t){return new e0(t,e)}async _finalizeEnroll(e,t,r){return m(void 0!==this.secret,e,"argument-error"),T(e,"POST","/v2/accounts/mfaEnrollment:finalize",_(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){m(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return T(e,"POST","/v2/accounts/mfaSignIn:finalize",_(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class e1{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new e1(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(e2(e)||e2(t))&&(n=!0),n&&(e2(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),e2(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function e2(e){return void 0===e||(null==e?void 0:e.length)===0}var e4="@firebase/auth",e6="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}(0,n.getExperimentalSetting)("authIdTokenMaxAge"),el={loadJS:e=>new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},r="Browser",(0,s._registerComponent)(new(0,l.Component)("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;m(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});let l=new es(n,i,s,{apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:et(r)});return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Y);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),(0,s._registerComponent)(new(0,l.Component)("auth-internal",e=>new e5(eo(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(e4,e6,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(r)),(0,s.registerVersion)(e4,e6,"esm2017")}),s("9vt5s",function(t,r){function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}e(t.exports,"__rest",()=>n),"function"==typeof SuppressedError&&SuppressedError});
//# sourceMappingURL=my-library.775de562.js.map
