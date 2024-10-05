import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'css-loader';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '42580380-f7e9d56cf0d50abf8107b2707';
const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
let lightbox;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = document.getElementById('query').value.trim();

  if (query === '') return;

  clearGallery();
  toggleLoader(true);
  fetchImages(query)
    .then(response => {
      const images = response.hits;

      if (images.length === 0) {
        throw new Error('No images found');
      }

      renderGallery(images);
      if (lightbox) lightbox.refresh();
      else lightbox = new SimpleLightbox('#gallery a');
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      toggleLoader(false);
    });
});

function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url).then(res => res.json());
}

function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <div class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <p>Likes: ${likes}</p>
            <p>Views: ${views}</p>
            <p>Comments: ${comments}</p>
            <p>Downloads: ${downloads}</p>
          </div>
        </div>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

function clearGallery() {
  gallery.innerHTML = '';
}

function toggleLoader(visible) {
  loader.classList.toggle('hidden', !visible);
}
