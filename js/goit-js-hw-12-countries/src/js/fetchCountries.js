import refs from './refs';
import countryDesc from '../hbs/country-description.hbs';
import countryList from '../hbs/country-list.hbs';
import toastr from '../../node_modules/toastr/toastr';
function cuontryDescMarkup(data) {
  const markup = countryDesc(data);
  refs.countryDescription.insertAdjacentHTML('beforeend', markup);
}

function countryListMarkup(data) {
  const markupList = countryList(data);
  refs.countryDescription.insertAdjacentHTML('beforeend', markupList);
}

function toastrNotify() {
  toastr['error']('Too many matches found', 'OOPS');

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
}
function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      refs.countryDescription.innerHTML = '';
      if (data.length === 1) {
        cuontryDescMarkup(data);
      }
      if (2 <= data.length && data.length <= 10) {
        countryListMarkup(data);
      }
      if (data.length > 11) {
        toastrNotify();
      }
    });
}
export default fetchCountries;
