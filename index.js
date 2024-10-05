/* empty css                      */import{S as u,i as p}from"./assets/vendor-BRfoItl-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="42580380-f7e9d56cf0d50abf8107b2707",y=document.getElementById("search-form"),l=document.getElementById("gallery"),g=document.getElementById("loader");let a;y.addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("query").value.trim();if(r!==""){L(),c(!0);try{const o=await h(r);if(!o.hits||o.hits.length===0)throw new Error("Nie znaleziono obrazów");b(o.hits),a?a.refresh():a=new u("#gallery a")}catch{p.error({title:"Błąd",message:"Przepraszamy, nie znaleziono żadnych obrazów pasujących do Twojego zapytania. Spróbuj ponownie!"})}finally{c(!1)}}});function h(n){const r=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>o.json())}function b(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:d,downloads:f})=>`
        <div class="gallery-item">
          <a href="${s}">
            <img src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p>Likes: ${t}</p>
            <p>Views: ${i}</p>
            <p>Comments: ${d}</p>
            <p>Downloads: ${f}</p>
          </div>
        </div>`).join("");l.insertAdjacentHTML("beforeend",r)}function L(){l.innerHTML=""}function c(n){g.classList.toggle("hidden",!n)}
//# sourceMappingURL=index.js.map
