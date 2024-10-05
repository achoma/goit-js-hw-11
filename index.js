/* empty css                      */import{S as u,i as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="42580380-f7e9d56cf0d50abf8107b2707",g=document.getElementById("search-form"),l=document.getElementById("gallery"),y=document.getElementById("loader");let a;g.addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("query").value.trim();r!==""&&(b(),c(!0),h(r).then(n=>{const i=n.hits;if(i.length===0)throw new Error("No images found");L(i),a?a.refresh():a=new u("#gallery a")}).catch(n=>{m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c(!1)}))});function h(o){const r=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(n=>n.json())}function L(o){const r=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
        <div class="gallery-item">
          <a href="${i}">
            <img src="${n}" alt="${e}" />
          </a>
          <div class="info">
            <p>Likes: ${t}</p>
            <p>Views: ${s}</p>
            <p>Comments: ${d}</p>
            <p>Downloads: ${f}</p>
          </div>
        </div>`).join("");l.insertAdjacentHTML("beforeend",r)}function b(){l.innerHTML=""}function c(o){y.classList.toggle("hidden",!o)}
//# sourceMappingURL=index.js.map
