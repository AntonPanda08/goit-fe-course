import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import refs from './js/refs';
import toastrNotify from './js/toastrNotify';
import './js/fetchImages';
import fetchImages from './js/fetchImages';

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  fetchImages.query = form.elements.query.value;
  refs.gallery.innerHTML = '';
  fetchImages.page = 1;
  if (fetchImages.query === '') {
    toastrNotify.toastrSearch();
  } else {
    fetchImages.fetchImages();
  }
});

refs.loadMoreBtn.addEventListener('click', event => {
  fetchImages.fetchImages();
});
