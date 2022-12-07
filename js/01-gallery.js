import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(`.gallery`);
let bigPhoto;
gallery.addEventListener("click", showBigSizePhoto);
makeMarkupForGallary();

function makeMarkupForGallary() {
  const markup = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                data-source="${original}"
            />
        </a>
    </div>`,
    ""
  );
  gallery.insertAdjacentHTML("beforeend", markup);
}

function showBigSizePhoto(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  let currentBigPhoto = evt.target.dataset.source;

  bigPhoto = basicLightbox.create(`
    <img src="${currentBigPhoto}" width="800" height="600">
`);
  window.addEventListener("keydown", closePhotoOnEsc);
  bigPhoto.show();
}

function closePhotoOnEsc(evt) {
  if (evt.code === "Escape") {
    bigPhoto.close();
    window.removeEventListener("keydown", closePhotoOnEsc);
  }
}
