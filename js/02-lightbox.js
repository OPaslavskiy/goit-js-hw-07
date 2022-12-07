import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
makeMarkupForGallary();

function makeMarkupForGallary() {
  const markup = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`,
    ""
  );
  gallery.insertAdjacentHTML("beforeend", markup);
}

new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
