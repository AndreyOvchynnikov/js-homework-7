import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUlRef = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems)

galleryUlRef.innerHTML = galleryMarkup

function createGallery(galleryItems) {
    return galleryItems.map( ({ preview, original, description }) =>  
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join("");
};

galleryUlRef.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
    return
    }
    const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });
}