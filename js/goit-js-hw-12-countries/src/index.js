import './styles.css';
import '../node_modules/toastr/build/toastr.css';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';

const debouncedSearch = _.debounce(event => {
  const inputValue = refs.input.value;
  fetchCountries(inputValue);
}, 500);

refs.input.addEventListener('input', debouncedSearch);
