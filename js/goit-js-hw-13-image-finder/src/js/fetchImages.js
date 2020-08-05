import galleryMarkup from '../templates/gallery.hbs';
import toastrError from '../js/toastrNotify';
import refs from './refs';
import * as basicLightbox from 'basiclightbox';

export default {
  searchQuery: '',
  page: 1,
  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=17752655-7d1e30d3f189053aec3fab03b`;
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.total === 0) {
          toastrError();
        }
        this.page += 1;
        const markup = galleryMarkup(data);
        refs.gallery.insertAdjacentHTML('beforeend', markup);
        refs.loadMoreBtn.classList.remove('is-hidden');
        document.querySelector('img').onclick = () => {
          basicLightbox
            .create(
              `
                <img width="1400" height="900" src="${data.hits.largeImageURL}">
            `,
            )
            .show();
        };
        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth',
        });
      });
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
