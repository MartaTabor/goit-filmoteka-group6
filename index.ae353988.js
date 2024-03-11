let e,t,r,n,i,s;var o,a,l,c,u,h,d,f,p,m,g,y=globalThis;function v(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var b={},E={},w=y.parcelRequired7c6;null==w&&((w=function(e){if(e in b)return b[e].exports;if(e in E){var t=E[e];delete E[e];var r={id:e,exports:{}};return b[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){E[e]=t},y.parcelRequired7c6=w);var I=w.register;function _(e,t){return function(){return e.apply(t,arguments)}}I("g1uI7",function(e,t){}),I("40lI0",function(e,t){document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("[data-modal-close]"),t=document.querySelector("[data-modal]");document.body.addEventListener("click",function(e){e.target.closest("[data-modal-open]")&&t.classList.remove("film-details-is-hidden")}),e.addEventListener("click",function(){t.classList.add("film-details-is-hidden")})})}),I("bMpwc",function(e,t){}),I("7UJs8",function(e,t){}),I("4boOf",function(e,t){let r=document.querySelector(".mobile-nav-open-btn"),n=document.querySelector(".mobile-nav-close-btn"),i=document.querySelectorAll(".mobile-nav"),s=document.querySelector(".mobile-menu"),o=()=>{let e=window.innerWidth,t=window.scrollY;e<768&&t>=216?s.style.display="flex":(s.style.display="none",i.forEach(e=>e.classList.remove("mobile-visible")))};window.addEventListener("scroll",o),window.addEventListener("resize",o),o(),r.addEventListener("click",()=>{i.forEach(e=>e.classList.add("mobile-visible"))}),n.addEventListener("click",()=>{i.forEach(e=>e.classList.remove("mobile-visible"))})});const{toString:T}=Object.prototype,{getPrototypeOf:S}=Object,O=(r=Object.create(null),e=>{let t=T.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}),A=e=>(e=e.toLowerCase(),t=>O(t)===e),R=e=>t=>typeof t===e,{isArray:C}=Array,k=R("undefined"),N=A("ArrayBuffer"),P=R("string"),L=R("function"),D=R("number"),U=e=>null!==e&&"object"==typeof e,B=e=>{if("object"!==O(e))return!1;let t=S(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},M=A("Date"),x=A("File"),j=A("Blob"),F=A("FileList"),V=A("URLSearchParams");function H(e,t,{allOwnKeys:r=!1}={}){let n,i;if(null!=e){if("object"!=typeof e&&(e=[e]),C(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{let i;let s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;for(n=0;n<o;n++)i=s[n],t.call(null,e[i],i,e)}}}function $(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),i=n.length;for(;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}const z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:y,W=e=>!k(e)&&e!==z,q=(n="undefined"!=typeof Uint8Array&&S(Uint8Array),e=>n&&e instanceof n),K=A("HTMLFormElement"),G=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),J=A("RegExp"),Y=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};H(r,(r,i)=>{let s;!1!==(s=t(r,i,e))&&(n[i]=s||r)}),Object.defineProperties(e,n)},X="abcdefghijklmnopqrstuvwxyz",Q="0123456789",Z={DIGIT:Q,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+Q},ee=A("AsyncFunction");var et={isArray:C,isArrayBuffer:N,isBuffer:function(e){return null!==e&&!k(e)&&null!==e.constructor&&!k(e.constructor)&&L(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||L(e.append)&&("formdata"===(t=O(e))||"object"===t&&L(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&N(e.buffer)},isString:P,isNumber:D,isBoolean:e=>!0===e||!1===e,isObject:U,isPlainObject:B,isUndefined:k,isDate:M,isFile:x,isBlob:j,isRegExp:J,isFunction:L,isStream:e=>U(e)&&L(e.pipe),isURLSearchParams:V,isTypedArray:q,isFileList:F,forEach:H,merge:function e(){let{caseless:t}=W(this)&&this||{},r={},n=(n,i)=>{let s=t&&$(r,i)||i;B(r[s])&&B(n)?r[s]=e(r[s],n):B(n)?r[s]=e({},n):C(n)?r[s]=n.slice():r[s]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&H(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(H(t,(t,n)=>{r&&L(t)?e[n]=_(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,s,o;let a={};if(t=t||{},null==e)return t;do{for(s=(i=Object.getOwnPropertyNames(e)).length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=!1!==r&&S(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:O,kindOfTest:A,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!D(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=(e&&e[Symbol.iterator]).call(e);for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:K,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:Y,freezeMethods:e=>{Y(e,(t,r)=>{if(L(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(L(e[r])){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(C(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:$,global:z,isContextDefined:W,ALPHABET:Z,generateString:(e=16,t=Z.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&L(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(U(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let i=C(e)?[]:{};return H(e,(e,t)=>{let s=r(e,n+1);k(s)||(i[t]=s)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:ee,isThenable:e=>e&&(U(e)||L(e))&&L(e.then)&&L(e.catch)};function er(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}et.inherits(er,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:et.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const en=er.prototype,ei={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ei[e]={value:e}}),Object.defineProperties(er,ei),Object.defineProperty(en,"isAxiosError",{value:!0}),er.from=(e,t,r,n,i,s)=>{let o=Object.create(en);return et.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),er.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o},c=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],o=new ea((i+s)*3/4-s),a=0,l=s>0?i-4:i;for(r=0;r<l;r+=4)t=eo[e.charCodeAt(r)]<<18|eo[e.charCodeAt(r+1)]<<12|eo[e.charCodeAt(r+2)]<<6|eo[e.charCodeAt(r+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=eo[e.charCodeAt(r)]<<2|eo[e.charCodeAt(r+1)]>>4,o[a++]=255&t),1===s&&(t=eo[e.charCodeAt(r)]<<10|eo[e.charCodeAt(r+1)]<<4|eo[e.charCodeAt(r+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},u=function(e){for(var t,r=e.length,n=r%3,i=[],s=0,o=r-n;s<o;s+=16383)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)i.push(es[(n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+es[n>>12&63]+es[n>>6&63]+es[63&n]);return i.join("")}(e,s,s+16383>o?o:s+16383));return 1===n?i.push(es[(t=e[r-1])>>2]+es[t<<4&63]+"=="):2===n&&i.push(es[(t=(e[r-2]<<8)+e[r-1])>>10]+es[t>>4&63]+es[t<<2&63]+"="),i.join("")};for(var es=[],eo=[],ea="undefined"!=typeof Uint8Array?Uint8Array:Array,el="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ec=0,eu=el.length;ec<eu;++ec)es[ec]=el[ec],eo[el.charCodeAt(ec)]=ec;eo["-".charCodeAt(0)]=62,eo["_".charCodeAt(0)]=63,h=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,c=l>>1,u=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),s-=c}return(f?-1:1)*o*Math.pow(2,s-n)},d=function(e,t,r,n,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,h=u>>1,d=23===i?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[r+f]=255&o,f+=p,o/=256,c-=8);e[r+f-p]|=128*m};const eh="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function ed(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,ef.prototype),t}function ef(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return eg(e)}return ep(e,t,r)}function ep(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ef.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|eE(e,t),n=ed(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(e$(e,Uint8Array)){let t=new Uint8Array(e);return ev(t.buffer,t.byteOffset,t.byteLength)}return ey(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(e$(e,ArrayBuffer)||e&&e$(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(e$(e,SharedArrayBuffer)||e&&e$(e.buffer,SharedArrayBuffer)))return ev(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return ef.from(n,t,r);let i=function(e){var t;if(ef.isBuffer(e)){let t=0|eb(e.length),r=ed(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?ed(0):ey(e):"Buffer"===e.type&&Array.isArray(e.data)?ey(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ef.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function em(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function eg(e){return em(e),ed(e<0?0:0|eb(e))}function ey(e){let t=e.length<0?0:0|eb(e.length),r=ed(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function ev(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),ef.prototype),n}function eb(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function eE(e,t){if(ef.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||e$(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return eF(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return eV(e).length;default:if(i)return n?-1:eF(e).length;t=(""+t).toLowerCase(),i=!0}}function ew(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=ez[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return eS(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var i,s;return i=t,s=r,0===i&&s===this.length?u(this):u(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function eI(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function e_(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=ef.from(t,n)),ef.isBuffer(t))return 0===t.length?-1:eT(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):eT(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function eT(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(c(e,s)===c(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(c(e,s+n)!==c(t,n)){r=!1;break}if(r)return s}return -1}function eS(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function eO(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function eA(e,t,r,n,i,s){if(!ef.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function eR(e,t,r,n,i){eB(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function eC(e,t,r,n,i){eB(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function ek(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function eN(e,t,r,n,i){return t=+t,r>>>=0,i||ek(e,t,r,4,34028234663852886e22,-34028234663852886e22),d(e,t,r,n,23,4),r+4}function eP(e,t,r,n,i){return t=+t,r>>>=0,i||ek(e,t,r,8,17976931348623157e292,-17976931348623157e292),d(e,t,r,n,52,8),r+8}ef.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ef.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ef.prototype,"parent",{enumerable:!0,get:function(){if(ef.isBuffer(this))return this.buffer}}),Object.defineProperty(ef.prototype,"offset",{enumerable:!0,get:function(){if(ef.isBuffer(this))return this.byteOffset}}),ef.poolSize=8192,ef.from=function(e,t,r){return ep(e,t,r)},Object.setPrototypeOf(ef.prototype,Uint8Array.prototype),Object.setPrototypeOf(ef,Uint8Array),ef.alloc=function(e,t,r){return(em(e),e<=0)?ed(e):void 0!==t?"string"==typeof r?ed(e).fill(t,r):ed(e).fill(t):ed(e)},ef.allocUnsafe=function(e){return eg(e)},ef.allocUnsafeSlow=function(e){return eg(e)},ef.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ef.prototype},ef.compare=function(e,t){if(e$(e,Uint8Array)&&(e=ef.from(e,e.offset,e.byteLength)),e$(t,Uint8Array)&&(t=ef.from(t,t.offset,t.byteLength)),!ef.isBuffer(e)||!ef.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},ef.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ef.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ef.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=ef.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(e$(t,Uint8Array))i+t.length>n.length?(ef.isBuffer(t)||(t=ef.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(ef.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},ef.byteLength=eE,ef.prototype._isBuffer=!0,ef.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)eI(this,t,t+1);return this},ef.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)eI(this,t,t+3),eI(this,t+1,t+2);return this},ef.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)eI(this,t,t+7),eI(this,t+1,t+6),eI(this,t+2,t+5),eI(this,t+3,t+4);return this},ef.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?eS(this,0,e):ew.apply(this,arguments)},ef.prototype.toLocaleString=ef.prototype.toString,ef.prototype.equals=function(e){if(!ef.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ef.compare(this,e)},ef.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},eh&&(ef.prototype[eh]=ef.prototype.inspect),ef.prototype.compare=function(e,t,r,n,i){if(e$(e,Uint8Array)&&(e=ef.from(e,e.offset,e.byteLength)),!ef.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let s=i-n,o=r-t,a=Math.min(s,o),l=this.slice(n,i),c=e.slice(t,r);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},ef.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},ef.prototype.indexOf=function(e,t,r){return e_(this,e,t,r,!0)},ef.prototype.lastIndexOf=function(e,t,r){return e_(this,e,t,r,!1)},ef.prototype.write=function(e,t,r,n){var i,s,o,a,l,c,u,h;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,eH(eF(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,eH(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,c=r,eH(eV(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,h=r,eH(function(e,t){let r,n;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,h);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},ef.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ef.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,ef.prototype),n},ef.prototype.readUintLE=ef.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eO(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},ef.prototype.readUintBE=ef.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eO(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},ef.prototype.readUint8=ef.prototype.readUInt8=function(e,t){return e>>>=0,t||eO(e,1,this.length),this[e]},ef.prototype.readUint16LE=ef.prototype.readUInt16LE=function(e,t){return e>>>=0,t||eO(e,2,this.length),this[e]|this[e+1]<<8},ef.prototype.readUint16BE=ef.prototype.readUInt16BE=function(e,t){return e>>>=0,t||eO(e,2,this.length),this[e]<<8|this[e+1]},ef.prototype.readUint32LE=ef.prototype.readUInt32LE=function(e,t){return e>>>=0,t||eO(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ef.prototype.readUint32BE=ef.prototype.readUInt32BE=function(e,t){return e>>>=0,t||eO(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ef.prototype.readBigUInt64LE=eW(function(e){eM(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&ex(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),ef.prototype.readBigUInt64BE=eW(function(e){eM(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&ex(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),ef.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||eO(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},ef.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||eO(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},ef.prototype.readInt8=function(e,t){return(e>>>=0,t||eO(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ef.prototype.readInt16LE=function(e,t){e>>>=0,t||eO(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},ef.prototype.readInt16BE=function(e,t){e>>>=0,t||eO(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},ef.prototype.readInt32LE=function(e,t){return e>>>=0,t||eO(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ef.prototype.readInt32BE=function(e,t){return e>>>=0,t||eO(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ef.prototype.readBigInt64LE=eW(function(e){eM(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&ex(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),ef.prototype.readBigInt64BE=eW(function(e){eM(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&ex(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),ef.prototype.readFloatLE=function(e,t){return e>>>=0,t||eO(e,4,this.length),h(this,e,!0,23,4)},ef.prototype.readFloatBE=function(e,t){return e>>>=0,t||eO(e,4,this.length),h(this,e,!1,23,4)},ef.prototype.readDoubleLE=function(e,t){return e>>>=0,t||eO(e,8,this.length),h(this,e,!0,52,8)},ef.prototype.readDoubleBE=function(e,t){return e>>>=0,t||eO(e,8,this.length),h(this,e,!1,52,8)},ef.prototype.writeUintLE=ef.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;eA(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},ef.prototype.writeUintBE=ef.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;eA(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},ef.prototype.writeUint8=ef.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,1,255,0),this[t]=255&e,t+1},ef.prototype.writeUint16LE=ef.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ef.prototype.writeUint16BE=ef.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ef.prototype.writeUint32LE=ef.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ef.prototype.writeUint32BE=ef.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ef.prototype.writeBigUInt64LE=eW(function(e,t=0){return eR(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ef.prototype.writeBigUInt64BE=eW(function(e,t=0){return eC(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),ef.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);eA(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},ef.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);eA(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},ef.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ef.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ef.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ef.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ef.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||eA(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ef.prototype.writeBigInt64LE=eW(function(e,t=0){return eR(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ef.prototype.writeBigInt64BE=eW(function(e,t=0){return eC(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),ef.prototype.writeFloatLE=function(e,t,r){return eN(this,e,t,!0,r)},ef.prototype.writeFloatBE=function(e,t,r){return eN(this,e,t,!1,r)},ef.prototype.writeDoubleLE=function(e,t,r){return eP(this,e,t,!0,r)},ef.prototype.writeDoubleBE=function(e,t,r){return eP(this,e,t,!1,r)},ef.prototype.copy=function(e,t,r,n){if(!ef.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},ef.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ef.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let s=ef.isBuffer(e)?e:ef.from(e,n),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%o]}return this};const eL={};function eD(e,t,r){eL[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function eU(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function eB(e,t,r,n,i,s){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new eL.ERR_OUT_OF_RANGE("value",n,e)}eM(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&ex(i,n.length-(s+1))}function eM(e,t){if("number"!=typeof e)throw new eL.ERR_INVALID_ARG_TYPE(t,"number",e)}function ex(e,t,r){if(Math.floor(e)!==e)throw eM(e,r),new eL.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new eL.ERR_BUFFER_OUT_OF_BOUNDS;throw new eL.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}eD("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),eD("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),eD("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=eU(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=eU(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);const ej=/[^+/0-9A-Za-z-_]/g;function eF(e,t){let r;t=t||1/0;let n=e.length,i=null,s=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function eV(e){return c(function(e){if((e=(e=e.split("=")[0]).trim().replace(ej,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function eH(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function e$(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}const ez=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function eW(e){return"undefined"==typeof BigInt?eq:e}function eq(){throw Error("BigInt not supported")}function eK(e){return et.isPlainObject(e)||et.isArray(e)}function eG(e){return et.endsWith(e,"[]")?e.slice(0,-2):e}function eJ(e,t,r){return e?e.concat(t).map(function(e,t){return e=eG(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const eY=et.toFlatObject(et,{},null,function(e){return/^is[A-Z]/.test(e)});var eX=function(e,t,r){if(!et.isObject(e))throw TypeError("target must be an object");t=t||new FormData;let n=(r=et.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!et.isUndefined(t[e])})).metaTokens,i=r.visitor||c,s=r.dots,o=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&et.isSpecCompliantForm(t);if(!et.isFunction(i))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(et.isDate(e))return e.toISOString();if(!a&&et.isBlob(e))throw new er("Blob is not supported. Use a Buffer instead.");return et.isArrayBuffer(e)||et.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):ef.from(e):e}function c(e,r,i){let a=e;if(e&&!i&&"object"==typeof e){if(et.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else{var c;if(et.isArray(e)&&(c=e,et.isArray(c)&&!c.some(eK))||(et.isFileList(e)||et.endsWith(r,"[]"))&&(a=et.toArray(e)))return r=eG(r),a.forEach(function(e,n){et.isUndefined(e)||null===e||t.append(!0===o?eJ([r],n,s):null===o?r:r+"[]",l(e))}),!1}}return!!eK(e)||(t.append(eJ(i,r,s),l(e)),!1)}let u=[],h=Object.assign(eY,{defaultVisitor:c,convertValue:l,isVisitable:eK});if(!et.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!et.isUndefined(r)){if(-1!==u.indexOf(r))throw Error("Circular reference detected in "+n.join("."));u.push(r),et.forEach(r,function(r,s){!0===(!(et.isUndefined(r)||null===r)&&i.call(t,r,et.isString(s)?s.trim():s,n,h))&&e(r,n?n.concat(s):[s])}),u.pop()}}(e),t};function eQ(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function eZ(e,t){this._pairs=[],e&&eX(e,this,t)}const e0=eZ.prototype;function e1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function e2(e,t,r){let n;if(!t)return e;let i=r&&r.encode||e1,s=r&&r.serialize;if(n=s?s(t,r):et.isURLSearchParams(t)?t.toString():new eZ(t,r).toString(i)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}e0.append=function(e,t){this._pairs.push([e,t])},e0.toString=function(e){let t=e?function(t){return e.call(this,t,eQ)}:eQ;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var e6=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){et.forEach(this.handlers,function(t){null!==t&&e(t)})}},e4={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},e5="undefined"!=typeof URLSearchParams?URLSearchParams:eZ,e8="undefined"!=typeof FormData?FormData:null,e3="undefined"!=typeof Blob?Blob:null,e7={};v(e7,"hasBrowserEnv",()=>e9),v(e7,"hasStandardBrowserEnv",()=>te),v(e7,"hasStandardBrowserWebWorkerEnv",()=>tt);const e9="undefined"!=typeof window&&"undefined"!=typeof document,te=(i="undefined"!=typeof navigator&&navigator.product,e9&&0>["ReactNative","NativeScript","NS"].indexOf(i)),tt="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tr={...e7,isBrowser:!0,classes:{URLSearchParams:e5,FormData:e8,Blob:e3},protocols:["http","https","file","blob","url","data"]},tn=function(e){if(et.isFormData(e)&&et.isFunction(e.entries)){let t={};return et.forEachEntry(e,(e,r)=>{!function e(t,r,n,i){let s=t[i++];if("__proto__"===s)return!0;let o=Number.isFinite(+s),a=i>=t.length;return(s=!s&&et.isArray(n)?n.length:s,a)?et.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r:(n[s]&&et.isObject(n[s])||(n[s]=[]),e(t,r,n[s],i)&&et.isArray(n[s])&&(n[s]=function(e){let t,r;let n={},i=Object.keys(e),s=i.length;for(t=0;t<s;t++)n[r=i[t]]=e[r];return n}(n[s]))),!o}(et.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};const ti={transitional:e4,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",i=n.indexOf("application/json")>-1,s=et.isObject(e);if(s&&et.isHTMLForm(e)&&(e=new FormData(e)),et.isFormData(e))return i?JSON.stringify(tn(e)):e;if(et.isArrayBuffer(e)||et.isBuffer(e)||et.isStream(e)||et.isFile(e)||et.isBlob(e))return e;if(et.isArrayBufferView(e))return e.buffer;if(et.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1){var o,a;return(o=e,a=this.formSerializer,eX(o,new tr.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return tr.isNode&&et.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},a))).toString()}if((r=et.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return eX(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),function(e,t,r){if(et.isString(e))try{return(0,JSON.parse)(e),et.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||ti.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&et.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw er.from(e,er.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tr.classes.FormData,Blob:tr.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};et.forEach(["delete","get","head","post","put","patch"],e=>{ti.headers[e]={}});const ts=et.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var to=e=>{let t,r,n;let i={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||i[t]&&ts[t]||("set-cookie"===t?i[t]?i[t].push(r):i[t]=[r]:i[t]=i[t]?i[t]+", "+r:r)}),i};const ta=Symbol("internals");function tl(e){return e&&String(e).trim().toLowerCase()}function tc(e){return!1===e||null==e?e:et.isArray(e)?e.map(tc):String(e)}const tu=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function th(e,t,r,n,i){if(et.isFunction(n))return n.call(this,t,r);if(i&&(t=r),et.isString(t)){if(et.isString(n))return -1!==t.indexOf(n);if(et.isRegExp(n))return n.test(t)}}class td{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function i(e,t,r){let i=tl(t);if(!i)throw Error("header name must be a non-empty string");let s=et.findKey(n,i);s&&void 0!==n[s]&&!0!==r&&(void 0!==r||!1===n[s])||(n[s||t]=tc(e))}let s=(e,t)=>et.forEach(e,(e,r)=>i(e,r,t));return et.isPlainObject(e)||e instanceof this.constructor?s(e,t):et.isString(e)&&(e=e.trim())&&!tu(e)?s(to(e),t):null!=e&&i(t,e,r),this}get(e,t){if(e=tl(e)){let r=et.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(et.isFunction(t))return t.call(this,e,r);if(et.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tl(e)){let r=et.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||th(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function i(e){if(e=tl(e)){let i=et.findKey(r,e);i&&(!t||th(r,r[i],i,t))&&(delete r[i],n=!0)}}return et.isArray(e)?e.forEach(i):i(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let i=t[r];(!e||th(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}normalize(e){let t=this,r={};return et.forEach(this,(n,i)=>{let s=et.findKey(r,i);if(s){t[s]=tc(n),delete t[i];return}let o=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(i).trim();o!==i&&delete t[i],t[o]=tc(n),r[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return et.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&et.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=(this[ta]=this[ta]={accessors:{}}).accessors,r=this.prototype;function n(e){let n=tl(e);t[n]||(!function(e,t){let r=et.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})})}(r,e),t[n]=!0)}return et.isArray(e)?e.forEach(n):n(e),this}}function tf(e,t){let r=this||ti,n=t||r,i=td.from(n.headers),s=n.data;return et.forEach(e,function(e){s=e.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function tp(e){return!!(e&&e.__CANCEL__)}function tm(e,t,r){er.call(this,null==e?"canceled":e,er.ERR_CANCELED,t,r),this.name="CanceledError"}td.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),et.reduceDescriptors(td.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),et.freezeMethods(td),et.inherits(tm,er,{__CANCEL__:!0});var tg=tr.hasStandardBrowserEnv?{write(e,t,r,n,i,s){let o=[e+"="+encodeURIComponent(t)];et.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),et.isString(n)&&o.push("path="+n),et.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ty(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e:t}var tv=tr.hasStandardBrowserEnv?function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){let n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){let r=et.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},tb=function(e,t){let r;let n=Array(e=e||10),i=Array(e),s=0,o=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if((s=(s+1)%e)===o&&(o=(o+1)%e),l-r<t)return;let d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function tE(e,t){let r=0,n=tb(50,250);return i=>{let s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-r,l=n(a);r=s;let c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const tw={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,r){let n,i,s=e.data,o=td.from(e.headers).normalize(),{responseType:a,withXSRFToken:l}=e;function c(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}if(et.isFormData(s)){if(tr.hasStandardBrowserEnv||tr.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){let[e,...t]=i?i.split(";").map(e=>e.trim()).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}}let u=new XMLHttpRequest;if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+r))}let h=ty(e.baseURL,e.url);function d(){if(!u)return;let n=td.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new er("Request failed with status code "+r.status,[er.ERR_BAD_REQUEST,er.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),c()},function(e){r(e),c()},{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:n,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),e2(h,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(r(new er("Request aborted",er.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new er("Network Error",er.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||e4;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new er(t,n.clarifyTimeoutError?er.ETIMEDOUT:er.ECONNABORTED,e,u)),u=null},tr.hasStandardBrowserEnv&&(l&&et.isFunction(l)&&(l=l(e)),l||!1!==l&&tv(h))){let t=e.xsrfHeaderName&&e.xsrfCookieName&&tg.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===s&&o.setContentType(null),"setRequestHeader"in u&&et.forEach(o.toJSON(),function(e,t){u.setRequestHeader(t,e)}),et.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",tE(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",tE(e.onUploadProgress)),(e.cancelToken||e.signal)&&(n=t=>{u&&(r(!t||t.type?new tm(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let f=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(h);if(f&&-1===tr.protocols.indexOf(f)){r(new er("Unsupported protocol "+f+":",er.ERR_BAD_REQUEST,e));return}u.send(s||null)})}};et.forEach(tw,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});const tI=e=>`- ${e}`,t_=e=>et.isFunction(e)||null===e||!1===e;var tT=e=>{let t,r;let{length:n}=e=et.isArray(e)?e:[e],i={};for(let s=0;s<n;s++){let n;if(r=t=e[s],!t_(t)&&void 0===(r=tw[(n=String(t)).toLowerCase()]))throw new er(`Unknown adapter '${n}'`);if(r)break;i[n||"#"+s]=r}if(!r){let e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new er("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(tI).join("\n"):" "+tI(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function tS(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new tm(null,e)}function tO(e){return tS(e),e.headers=td.from(e.headers),e.data=tf.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tT(e.adapter||ti.adapter)(e).then(function(t){return tS(e),t.data=tf.call(e,e.transformResponse,t),t.headers=td.from(t.headers),t},function(t){return!tp(t)&&(tS(e),t&&t.response&&(t.response.data=tf.call(e,e.transformResponse,t.response),t.response.headers=td.from(t.response.headers))),Promise.reject(t)})}const tA=e=>e instanceof td?e.toJSON():e;function tR(e,t){t=t||{};let r={};function n(e,t,r){return et.isPlainObject(e)&&et.isPlainObject(t)?et.merge.call({caseless:r},e,t):et.isPlainObject(t)?et.merge({},t):et.isArray(t)?t.slice():t}function i(e,t,r){return et.isUndefined(t)?et.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function s(e,t){if(!et.isUndefined(t))return n(void 0,t)}function o(e,t){return et.isUndefined(t)?et.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,i,s){return s in t?n(r,i):s in e?n(void 0,r):void 0}let l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(tA(e),tA(t),!0)};return et.forEach(Object.keys(Object.assign({},e,t)),function(n){let s=l[n]||i,o=s(e[n],t[n],n);et.isUndefined(o)&&s!==a||(r[n]=o)}),r}const tC="1.6.7",tk={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tk[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tN={};tk.transitional=function(e,t,r){function n(e,t){return"[Axios v"+tC+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,i,s)=>{if(!1===e)throw new er(n(i," has been removed"+(t?" in "+t:"")),er.ERR_DEPRECATED);return t&&!tN[i]&&(tN[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,s)}};var tP={assertOptions:function(e,t,r){if("object"!=typeof e)throw new er("options must be an object",er.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),i=n.length;for(;i-- >0;){let s=n[i],o=t[s];if(o){let t=e[s],r=void 0===t||o(t,s,e);if(!0!==r)throw new er("option "+s+" must be "+r,er.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new er("Unknown option "+s,er.ERR_BAD_OPTION)}},validators:tk};const tL=tP.validators;class tD{constructor(e){this.defaults=e,this.interceptors={request:new e6,response:new e6}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=Error();let r=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?r&&!String(e.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+r):e.stack=r}throw e}}_request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{};let{transitional:i,paramsSerializer:s,headers:o}=t=tR(this.defaults,t);void 0!==i&&tP.assertOptions(i,{silentJSONParsing:tL.transitional(tL.boolean),forcedJSONParsing:tL.transitional(tL.boolean),clarifyTimeoutError:tL.transitional(tL.boolean)},!1),null!=s&&(et.isFunction(s)?t.paramsSerializer={serialize:s}:tP.assertOptions(s,{encode:tL.function,serialize:tL.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=o&&et.merge(o.common,o[t.method]);o&&et.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=td.concat(a,o);let l=[],c=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(c=c&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let u=[];this.interceptors.response.forEach(function(e){u.push(e.fulfilled,e.rejected)});let h=0;if(!c){let e=[tO.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,u),n=e.length,r=Promise.resolve(t);h<n;)r=r.then(e[h++],e[h++]);return r}n=l.length;let d=t;for(h=0;h<n;){let e=l[h++],t=l[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{r=tO.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,n=u.length;h<n;)r=r.then(u[h++],u[h++]);return r}getUri(e){return e2(ty((e=tR(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}et.forEach(["delete","get","head","options"],function(e){tD.prototype[e]=function(t,r){return this.request(tR(r||{},{method:e,url:t,data:(r||{}).data}))}}),et.forEach(["post","put","patch"],function(e){function t(t){return function(r,n,i){return this.request(tR(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}tD.prototype[e]=t(),tD.prototype[e+"Form"]=t(!0)});class tU{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),this.promise.then=e=>{let t;let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,i){r.reason||(r.reason=new tm(e,n,i),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new tU(function(t){e=t}),cancel:e}}}const tB={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tB).forEach(([e,t])=>{tB[t]=e});const tM=function e(t){let r=new tD(t),n=_(tD.prototype.request,r);return et.extend(n,tD.prototype,r,{allOwnKeys:!0}),et.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(tR(t,r))},n}(ti);tM.Axios=tD,tM.CanceledError=tm,tM.CancelToken=tU,tM.isCancel=tp,tM.VERSION=tC,tM.toFormData=eX,tM.AxiosError=er,tM.Cancel=tM.CanceledError,tM.all=function(e){return Promise.all(e)},tM.spread=function(e){return function(t){return e.apply(null,t)}},tM.isAxiosError=function(e){return et.isObject(e)&&!0===e.isAxiosError},tM.mergeConfig=tR,tM.AxiosHeaders=td,tM.formToJSON=e=>tn(et.isHTMLForm(e)?new FormData(e):e),tM.getAdapter=tT,tM.HttpStatusCode=tB,tM.default=tM;const{Axios:tx,AxiosError:tj,CanceledError:tF,isCancel:tV,CancelToken:tH,VERSION:t$,all:tz,Cancel:tW,isAxiosError:tq,spread:tK,toFormData:tG,AxiosHeaders:tJ,HttpStatusCode:tY,formToJSON:tX,getAdapter:tQ,mergeConfig:tZ}=tM,t0=document.querySelector(".home-film-list");(async(e=1)=>{try{let t=(await tM.get(`https://api.themoviedb.org/3/movie/popular?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN&per_page=20&page=${e}`)).data.results,r=await tM.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c2f18aa0c4ee94c87f87834077fd721a&language=en-EN"),n={};r.data.genres.forEach(e=>{n[e.id]=e.name});let i=t.map(e=>{let t=e.genre_ids.map(e=>n[e]).join(", ");return`
        <li class="home-film-item" data-modal-open>
          <img class="home-film-image" src="https://image.tmdb.org/t/p/original/${e.poster_path}" alt="${e.title}">
          <div class="home-film-details">
            <h2 class="home-film-title">${e.title}</h2>
            <p class="home-film-info">
              <span class="home-film-type">${t}</span> |
              <span class="home-film-year">${e.release_date.slice(0,4)}</span>
              <span class="home-film-rating">${e.vote_average.toFixed(1)}</span>
            </p>
          </div>
        </li>`});t0.innerHTML=i.join("")}catch(e){console.error("Error fetching data:",e)}})(),w("g1uI7"),w("40lI0"),w("bMpwc"),w("7UJs8");/**
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
 */var t1={},t2=t1={};function t6(){throw Error("setTimeout has not been defined")}function t4(){throw Error("clearTimeout has not been defined")}function t5(e){if(f===setTimeout)return setTimeout(e,0);if((f===t6||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}!function(){try{f="function"==typeof setTimeout?setTimeout:t6}catch(e){f=t6}try{p="function"==typeof clearTimeout?clearTimeout:t4}catch(e){p=t4}}();var t8=[],t3=!1,t7=-1;function t9(){t3&&m&&(t3=!1,m.length?t8=m.concat(t8):t7=-1,t8.length&&re())}function re(){if(!t3){var e=t5(t9);t3=!0;for(var t=t8.length;t;){for(m=t8,t8=[];++t7<t;)m&&m[t7].run();t7=-1,t=t8.length}m=null,t3=!1,function(e){if(p===clearTimeout)return clearTimeout(e);if((p===t4||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}(e)}}function rt(e,t){this.fun=e,this.array=t}function rr(){}t2.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];t8.push(new rt(e,t)),1!==t8.length||t3||t5(re)},rt.prototype.run=function(){this.fun.apply(null,this.array)},t2.title="browser",t2.browser=!0,t2.env={},t2.argv=[],t2.version="",t2.versions={},t2.on=rr,t2.addListener=rr,t2.once=rr,t2.off=rr,t2.removeListener=rr,t2.removeAllListeners=rr,t2.emit=rr,t2.prependListener=rr,t2.prependOnceListener=rr,t2.listeners=function(e){return[]},t2.binding=function(e){throw Error("process.binding is not supported")},t2.cwd=function(){return"/"},t2.chdir=function(e){throw Error("process.chdir is not supported")},t2.umask=function(){return 0};/**
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
 */const rn=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},ri=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},rs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),n.push(r[c],r[u],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ri(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new ro;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ro extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ra=function(e){let t=rn(e);return rs.encodeByteArray(t,!0)},rl=function(e){return ra(e).replace(/\./g,"")},rc=function(e){try{return rs.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ru=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==y)return y;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,rh=()=>{if(void 0===t1||void 0===t1.env)return;let e=void 0;if(e)return JSON.parse(e)},rd=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&rc(e[1]);return t&&JSON.parse(t)},rf=()=>{try{return ru()||rh()||rd()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rp=()=>{var e;return null===(e=rf())||void 0===e?void 0:e.config};/**
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
 */class rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
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
 */function rg(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class ry extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,ry.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rv.prototype.create)}}class rv{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(rb,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new ry(n,o,r)}}const rb=/\{\$([^}]+)}/g;function rE(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(rw(r)&&rw(s)){if(!rE(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function rw(e){return null!==e&&"object"==typeof e}/**
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
 */function rI(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function r_(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function rT(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class rS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=rO),void 0===n.error&&(n.error=rO),void 0===n.complete&&(n.complete=rO);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rO(){}/**
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
 */function rA(e){return e&&e._delegate?e._delegate:e}class rR{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rC="[DEFAULT]";/**
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
 */class rk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new rm;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:rC})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=rC){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=rC){return this.instances.has(e)}getOptions(e=rC){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===rC?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=rC){return this.component?this.component.multipleInstances?e:rC:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class rN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new rk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const rP=[];(o=g||(g={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const rL={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},rD=g.INFO,rU={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},rB=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=rU[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rM{constructor(e){this.name=e,this._logLevel=rD,this._logHandler=rB,this._userLogHandler=null,rP.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?rL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}const rx=(e,t)=>t.some(t=>e instanceof t),rj=new WeakMap,rF=new WeakMap,rV=new WeakMap,rH=new WeakMap,r$=new WeakMap;let rz={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return rF.get(e);if("objectStoreNames"===t)return e.objectStoreNames||rV.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return rW(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function rW(r){var n;if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(rW(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&rj.set(t,e)}).catch(()=>{}),r$.set(t,e),t}(r);if(rH.has(r))return rH.get(r);let i="function"==typeof(n=r)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(rq(this),e),rW(rj.get(this))}:function(...e){return rW(n.apply(rq(this),e))}:function(e,...t){let r=n.call(rq(this),e,...t);return rV.set(r,e.sort?e.sort():[e]),rW(r)}:(n instanceof IDBTransaction&&function(e){if(rF.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});rF.set(e,t)}(n),rx(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,rz):n;return i!==r&&(rH.set(r,i),r$.set(i,r)),i}const rq=e=>r$.get(e),rK=["get","getKey","getAll","getAllKeys","count"],rG=["put","add","delete","clear"],rJ=new Map;function rY(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(rJ.get(t))return rJ.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=rG.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||rK.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return rJ.set(t,s),s}rz={...s=rz,get:(e,t,r)=>rY(e,t)||s.get(e,t,r),has:(e,t)=>!!rY(e,t)||s.has(e,t)};/**
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
 */class rX{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const rQ="@firebase/app",rZ="0.9.28",r0=new rM("@firebase/app"),r1={[rQ]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},r2=new Map,r6=new Map;function r4(e){let t=e.name;if(r6.has(t))return r0.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(r6.set(t,e),r2.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){r0.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}const r5=new rv("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class r8{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rR("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw r5.create("app-deleted",{appName:this._name})}}/**
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
 */const r3="10.8.1";function r7(e,t,r){var n;let i=null!==(n=r1[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),r0.warn(e.join(" "));return}r4(new rR(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const r9="firebase-heartbeat-store";let ne=null;function nt(){return ne||(ne=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=rW(o);return n&&o.addEventListener("upgradeneeded",e=>{n(rW(o.result),e.oldVersion,e.newVersion,rW(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(r9)}catch(e){console.warn(e)}}}).catch(e=>{throw r5.create("idb-open",{originalErrorMessage:e.message})})),ne}async function nr(e){try{let t=(await nt()).transaction(r9),r=await t.objectStore(r9).get(ni(e));return await t.done,r}catch(e){if(e instanceof ry)r0.warn(e.message);else{let t=r5.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});r0.warn(t.message)}}}async function nn(e,t){try{let r=(await nt()).transaction(r9,"readwrite"),n=r.objectStore(r9);await n.put(t,ni(e)),await r.done}catch(e){if(e instanceof ry)r0.warn(e.message);else{let t=r5.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});r0.warn(t.message)}}}function ni(e){return`${e.name}!${e.options.appId}`}class ns{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new na(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=no();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=no(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),nl(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),nl(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function no(){return new Date().toISOString().substring(0,10)}class na{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await nr(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return nn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return nn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function nl(e){return rl(JSON.stringify({version:2,heartbeats:e})).length}function nc(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function nu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}r4(new rR("platform-logger",e=>new rX(e),"PRIVATE")),r4(new rR("heartbeat",e=>new ns(e),"PRIVATE")),r7(rQ,rZ,""),r7(rQ,rZ,"esm2017"),r7("fire-js",""),r7("firebase","10.8.1","app"),"function"==typeof SuppressedError&&SuppressedError;const nh=new rv("auth","Firebase",nu()),nd=new rM("@firebase/auth");function nf(e,...t){nd.logLevel<=g.ERROR&&nd.error(`Auth (${r3}): ${e}`,...t)}/**
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
 */function np(e,...t){throw ng(e,...t)}function nm(e,...t){return ng(e,...t)}function ng(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return nh.create(e,...t)}function ny(e,t,...r){if(!e)throw ng(t,...r)}function nv(e){let t="INTERNAL ASSERTION FAILED: "+e;throw nf(t),Error(t)}function nb(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */class nE{constructor(e,t){var r;this.shortDelay=e,this.longDelay=t,r="Short delay should be less than long delay!",t>e||nv(r),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rg())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===nb()||"https:"===nb()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class nw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void nv("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void nv("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void nv("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},n_=new nE(3e4,6e4);function nT(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function nS(e,t,r,n,i={}){return nO(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let o=rI(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),nw.fetch()(nR(e,e.config.apiHost,r,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function nO(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},nI),t);try{let t=new nC(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw nk(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,r]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw nk(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw nk(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw nk(e,"user-disabled",s);let o=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw new rv("auth","Firebase",Object.assign(Object.assign({},nu()),{[o]:r})).create(o,{appName:e.name});np(e,o)}}catch(t){if(t instanceof ry)throw t;np(e,"network-request-failed",{message:String(t)})}}async function nA(e,t,r,n,i={}){let s=await nS(e,t,r,n,i);return"mfaPendingCredential"in s&&np(e,"multi-factor-auth-required",{_serverResponse:s}),s}function nR(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?/**
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
 */function(e,t){var r,n;r=e.emulator,n="Emulator should always be set here",r||nv(n);let{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}(e.config,i):`${e.config.apiScheme}://${i}`}class nC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(nm(this.auth,"network-request-failed")),n_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nk(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=nm(e,t,n);return i.customData._tokenResponse=r,i}function nN(e){return void 0!==e&&void 0!==e.enterprise}class nP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function nL(e,t){return nS(e,"GET","/v2/recaptchaConfig",nT(e,t))}/**
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
 */async function nD(e,t){return nS(e,"POST","/v1/accounts:delete",t)}async function nU(e,t){return nS(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function nB(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function nM(e,t=!1){let r=rA(e),n=await r.getIdToken(t),i=nj(n);ny(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:nB(nx(i.auth_time)),issuedAtTime:nB(nx(i.iat)),expirationTime:nB(nx(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function nx(e){return 1e3*Number(e)}function nj(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return nf("JWT malformed, contained fewer than 3 sections"),null;try{let e=rc(r);if(!e)return nf("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return nf("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */async function nF(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof ry&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
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
 */class nV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nH{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nB(this.lastLoginAt),this.creationTime=nB(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function n$(e){var t;let r=e.auth,n=await e.getIdToken(),i=await nF(e,nU(r,{idToken:n}));ny(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=nc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],a=[...e.providerData.filter(e=>!o.some(t=>t.providerId===e.providerId)),...o],l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nH(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&c})}async function nz(e){let t=rA(e);await n$(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
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
 */async function nW(e,t){let r=await nO(e,{},async()=>{let r=rI({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=nR(e,n,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",nw.fetch()(s,{method:"POST",headers:o,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function nq(e,t){return nS(e,"POST","/v2/accounts:revokeToken",nT(e,t))}/**
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
 */class nK{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ny(e.idToken,"internal-error"),ny(void 0!==e.idToken,"internal-error"),ny(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=nj(e);return ny(t,"internal-error"),ny(void 0!==t.exp,"internal-error"),ny(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(ny(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await nW(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new nK;return r&&(ny("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(ny("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(ny("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nK,this.toJSON())}_performRefresh(){return nv("not implemented")}}/**
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
 */function nG(e,t){ny("string"==typeof e||void 0===e,"internal-error",{appName:t})}class nJ{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=nc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nH(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await nF(this,this.stsTokenManager.getToken(this.auth,e));return ny(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nM(this,e)}reload(){return nz(this)}_assign(e){this!==e&&(ny(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new nJ(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ny(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await n$(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await nF(this,nD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,c;let u=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:E,providerData:w,stsTokenManager:I}=t;ny(v&&I,e,"internal-error");let _=nK.fromJSON(this.name,I);ny("string"==typeof v,e,"internal-error"),nG(u,e.name),nG(h,e.name),ny("boolean"==typeof b,e,"internal-error"),ny("boolean"==typeof E,e,"internal-error"),nG(d,e.name),nG(f,e.name),nG(p,e.name),nG(m,e.name),nG(g,e.name),nG(y,e.name);let T=new nJ({uid:v,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(T.providerData=w.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new nK;n.updateFromServerResponse(t);let i=new nJ({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await n$(i),i}}/**
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
 */const nY=new Map;function nX(e){var t,r;t="Expected a class definition",e instanceof Function||nv(t);let n=nY.get(e);return n?(r="Instance stored in cache mismatched with class",n instanceof e||nv(r)):(n=new e,nY.set(e,n)),n}/**
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
 */class nQ{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function nZ(e,t,r){return`firebase:${e}:${t}:${r}`}nQ.type="NONE";class n0{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=nZ(this.userKey,n.apiKey,i),this.fullPersistenceKey=nZ("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?nJ._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n0(nX(nQ),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||nX(nQ),s=nZ(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=nJ._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new n0(i,e,r)}}/**
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
 */function n1(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(function(e=rg()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(function(e=rg()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=rg()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=rg()){return/webos/i.test(e)}(t))return"Webos";if(function(e=rg()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=rg()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=rg()){return/android/i.test(e)}(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}/**
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
 */function n2(e,t=[]){let r;switch(e){case"Browser":r=n1(rg());break;case"Worker":r=`${n1(rg())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${r3}/${n}`}/**
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
 */class n6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
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
 */async function n4(e,t={}){return nS(e,"GET","/v2/passwordPolicy",nT(e,t))}class n5{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class n8{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new n3(this),this.idTokenSubscription=new n3(this),this.beforeStateQueue=new n6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nX(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await n0.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(ny(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await n$(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?rA(e):null;return t&&ny(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ny(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nX(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new n5(await n4(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rv("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await nq(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&nX(e)||this._popupRedirectResolver;ny(t,this,"argument-error"),this.redirectPersistenceManager=await n0.create(this,[nX(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(ny(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ny(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){nd.logLevel<=g.WARN&&nd.warn(`Auth (${r3}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class n3{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let r=new rS(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return ny(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let n7={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};class n9{constructor(e){this.type="recaptcha-enterprise",this.auth=rA(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{nL(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new nP(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;nN(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&nN(window.grecaptcha))n(r,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=n7.recaptchaEnterpriseScript;0!==t.length&&(t+=r),(s=t,n7.loadJS(s)).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function ie(e,t,r,n=!1){let i;let s=new n9(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function it(e,t,r,n){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await ie(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await ie(e,t,r,"getOobCode"===r);return n(e,i)}}/**
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
 */class ir{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nv("not implemented")}_getIdTokenResponse(e){return nv("not implemented")}_linkToIdToken(e,t){return nv("not implemented")}_getReauthenticationResolver(e){return nv("not implemented")}}async function ii(e,t){return nS(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function is(e,t){return nA(e,"POST","/v1/accounts:signInWithPassword",nT(e,t))}/**
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
 */async function io(e,t){return nA(e,"POST","/v1/accounts:signInWithEmailLink",nT(e,t))}async function ia(e,t){return nA(e,"POST","/v1/accounts:signInWithEmailLink",nT(e,t))}/**
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
 */class il extends ir{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new il(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new il(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return it(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",is);case"emailLink":return io(e,{email:this._email,oobCode:this._password});default:np(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return it(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ii);case"emailLink":return ia(e,{idToken:t,email:this._email,oobCode:this._password});default:np(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ic(e,t){return nA(e,"POST","/v1/accounts:signInWithIdp",nT(e,t))}class iu extends ir{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new iu(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):np("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=nc(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new iu(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return ic(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ic(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ic(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rI(t)}return e}}/**
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
 */async function ih(e,t){return nS(e,"POST","/v1/accounts:sendVerificationCode",nT(e,t))}async function id(e,t){return nA(e,"POST","/v1/accounts:signInWithPhoneNumber",nT(e,t))}async function ip(e,t){let r=await nA(e,"POST","/v1/accounts:signInWithPhoneNumber",nT(e,t));if(r.temporaryProof)throw nk(e,"account-exists-with-different-credential",r);return r}const im={USER_NOT_FOUND:"user-not-found"};async function ig(e,t){return nA(e,"POST","/v1/accounts:signInWithPhoneNumber",nT(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),im)}/**
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
 */class iy extends ir{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new iy({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new iy({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return id(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ip(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ig(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new iy({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class iv{constructor(e){var t,r,n,i,s,o;let a=r_(rT(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(r=a.oobCode)&&void 0!==r?r:null,u=/**
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
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);ny(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=r_(rT(e)).link,r=t?r_(rT(t)).deep_link_id:null,n=r_(rT(e)).deep_link_id;return(n?r_(rT(n)).link:null)||n||r||t||e}(e);try{return new iv(t)}catch(e){return null}}}/**
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
 */class ib{constructor(){this.providerId=ib.PROVIDER_ID}static credential(e,t){return il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=iv.parseLink(t);return ny(r,"argument-error"),il._fromEmailAndCode(e,r.code,r.tenantId)}}ib.PROVIDER_ID="password",ib.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ib.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class iE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class iw extends iE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class iI extends iw{constructor(){super("facebook.com")}static credential(e){return iu._fromParams({providerId:iI.PROVIDER_ID,signInMethod:iI.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return iI.credentialFromTaggedObject(e)}static credentialFromError(e){return iI.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return iI.credential(e.oauthAccessToken)}catch(e){return null}}}iI.FACEBOOK_SIGN_IN_METHOD="facebook.com",iI.PROVIDER_ID="facebook.com";/**
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
 */class i_ extends iw{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return iu._fromParams({providerId:i_.PROVIDER_ID,signInMethod:i_.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return i_.credentialFromTaggedObject(e)}static credentialFromError(e){return i_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return i_.credential(t,r)}catch(e){return null}}}i_.GOOGLE_SIGN_IN_METHOD="google.com",i_.PROVIDER_ID="google.com";/**
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
 */class iT extends iw{constructor(){super("github.com")}static credential(e){return iu._fromParams({providerId:iT.PROVIDER_ID,signInMethod:iT.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return iT.credentialFromTaggedObject(e)}static credentialFromError(e){return iT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return iT.credential(e.oauthAccessToken)}catch(e){return null}}}iT.GITHUB_SIGN_IN_METHOD="github.com",iT.PROVIDER_ID="github.com";/**
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
 */class iS extends iw{constructor(){super("twitter.com")}static credential(e,t){return iu._fromParams({providerId:iS.PROVIDER_ID,signInMethod:iS.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return iS.credentialFromTaggedObject(e)}static credentialFromError(e){return iS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return iS.credential(t,r)}catch(e){return null}}}iS.TWITTER_SIGN_IN_METHOD="twitter.com",iS.PROVIDER_ID="twitter.com";/**
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
 */class iO{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new iO({user:await nJ._fromIdTokenResponse(e,r,n),providerId:iA(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new iO({user:e,providerId:iA(r),_tokenResponse:r,operationType:t})}}function iA(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class iR extends ry{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,iR.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new iR(e,t,r,n)}}function iC(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw iR._fromErrorAndOperation(e,r,t,n);throw r})}async function ik(e,t,r=!1){let n=await nF(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return iO._forOperation(e,"link",n)}/**
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
 */async function iN(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await nF(e,iC(n,i,t,e),r);ny(s.idToken,n,"internal-error");let o=nj(s.idToken);ny(o,n,"internal-error");let{sub:a}=o;return ny(e.uid===a,n,"user-mismatch"),iO._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&np(n,"user-mismatch"),e}}/**
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
 */async function iP(e,t,r=!1){let n="signIn",i=await iC(e,n,t),s=await iO._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}new WeakMap;/**
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
 */class iL{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new iL(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}iL.receivers=[];/**
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
 */const iD="firebaseLocalStorage";async function iU(e,t,r){var n,i,s;let o=await r.verify();try{let a;if(ny("string"==typeof o,e,"argument-error"),ny("recaptcha"===r.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return ny("enroll"===t.type,e,"internal-error"),(await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},nS(e,"POST","/v2/accounts/mfaEnrollment:start",nT(e,i)))).phoneSessionInfo.sessionInfo;{ny("signin"===t.type,e,"internal-error");let r=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;return ny(r,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:o}},nS(e,"POST","/v2/accounts/mfaSignIn:start",nT(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await ih(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{r._reset()}}new nE(3e4,6e4);/**
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
 */class iB{constructor(e){this.providerId=iB.PROVIDER_ID,this.auth=rA(e)}verifyPhoneNumber(e,t){return iU(this.auth,e,rA(t))}static credential(e,t){return iy._fromVerification(e,t)}static credentialFromResult(e){return iB.credentialFromTaggedObject(e)}static credentialFromError(e){return iB.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?iy._fromTokenResponse(t,r):null}}iB.PROVIDER_ID="phone",iB.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class iM extends ir{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ic(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ic(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ic(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ix(e){return iP(e.auth,new iM(e),e.bypassAuthState)}function ij(e){let{auth:t,user:r}=e;return ny(r,t,"internal-error"),iN(r,new iM(e),e.bypassAuthState)}async function iF(e){let{auth:t,user:r}=e;return ny(r,t,"internal-error"),ik(r,new iM(e),e.bypassAuthState)}/**
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
 */class iV{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ix;case"linkViaPopup":case"linkViaRedirect":return iF;case"reauthViaPopup":case"reauthViaRedirect":return ij;default:np(this.auth,"internal-error")}}resolve(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||nv(r),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,r;t=this.pendingPromise,r="Pending promise was never set",t||nv(r),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iH=new nE(2e3,1e4);class i$ extends iV{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,i$.currentPopupAction&&i$.currentPopupAction.cancel(),i$.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return ny(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||nv(t);let r=/**
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
 */function(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],r),this.authWindow.associatedEvent=r,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(nm(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(nm(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,i$.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nm(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iH.get())};e()}}i$.currentPopupAction=null,new nE(3e4,6e4),new nE(5e3,15e3),encodeURIComponent("fac");class iz{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return nv("unexpected MultiFactorSessionType")}}}class iW extends iz{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new iW(e)}_finalizeEnroll(e,t,r){return nS(e,"POST","/v2/accounts/mfaEnrollment:finalize",nT(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return nS(e,"POST","/v2/accounts/mfaSignIn:finalize",nT(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class iq extends iz{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new iq(t,void 0,e)}static _fromEnrollmentId(e,t){return new iq(t,e)}async _finalizeEnroll(e,t,r){return ny(void 0!==this.secret,e,"argument-error"),nS(e,"POST","/v2/accounts/mfaEnrollment:finalize",nT(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){ny(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return nS(e,"POST","/v2/accounts/mfaSignIn:finalize",nT(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class iK{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new iK(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(iG(e)||iG(t))&&(n=!0),n&&(iG(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),iG(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function iG(e){return void 0===e||(null==e?void 0:e.length)===0}var iJ="@firebase/auth",iY="1.6.1";/**
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
 */class iX{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ny(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}null===(a=rf())||void 0===a||a._authIdTokenMaxAge,n7={loadJS:e=>new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=nm("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},l="Browser",r4(new rR("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;ny(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});let a=new n8(r,n,i,{apiKey:s,authDomain:o,clientPlatform:l,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n2(l)});return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(nX);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),r4(new rR("auth-internal",e=>new iX(rA(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),r7(iJ,iY,/**
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
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(l)),r7(iJ,iY,"esm2017"),getAnalytics(function(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw r5.create("bad-app-name",{appName:String(i)});if(r||(r=rp()),!r)throw r5.create("no-options");let s=r2.get(i);if(s){if(rE(r,s.options)&&rE(n,s.config))return s;throw r5.create("duplicate-app",{appName:i})}let o=new rN(i);for(let e of r6.values())o.addComponent(e);let a=new r8(r,n,o);return r2.set(i,a),a}({apiKey:"AIzaSyDrsw02tJfVOg5942KrmMQDgPqT2tORfaM",authDomain:"goit-filmoteka-group6.firebaseapp.com",projectId:"goit-filmoteka-group6",storageBucket:"goit-filmoteka-group6.appspot.com",messagingSenderId:"259145174211",appId:"1:259145174211:web:3abb6bd76e9ef12b746676",measurementId:"G-7R0DRVYQHE"})),document.getElementById("signup-form").addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("signup-email").value,r=document.getElementById("signup-password").value;auth.createUserWithEmailAndPassword(t,r).then(e=>{console.log("Registration successful",e)}).catch(e=>{console.error("Registration error",e)})}),document.getElementById("login-form").addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("login-email").value,r=document.getElementById("login-password").value;auth.signInWithEmailAndPassword(t,r).then(e=>{console.log("Login successful",e)}).catch(e=>{console.error("Login error",e)})}),document.getElementById("logout-btn").addEventListener("click",function(){auth.signOut().then(()=>{console.log("User logged out")}).catch(e=>{console.error("Logout error",e)})}),firebase.auth().onAuthStateChanged(e=>{e?(console.log("User is logged in",e),document.getElementById("logout-btn").style.display="block"):(console.log("User is logged out"),document.getElementById("logout-btn").style.display="none")}),w("4boOf");
//# sourceMappingURL=index.ae353988.js.map
