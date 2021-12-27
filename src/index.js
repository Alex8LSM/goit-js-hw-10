import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const myInput = document.querySelector('#search-box');
myInput.addEventListener('input', debounce(search, DEBOUNCE_DELAY));
function search() {
  fetchCountries(myInput.value.trim());
}
