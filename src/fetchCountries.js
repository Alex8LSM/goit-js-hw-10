import countriesList from './templates/countries-list.hbs';
import countryInfo from './templates/country-info.hbs';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  timeout: 5000,
//   useIcon: false,
  fontSize: '20px',
  width: '400px',
});
export default function fetchCountries(Name) {
  const countriesListHtml = document.querySelector('.country-list');
  const countryInfoHtml = document.querySelector('.country-info');
  if (Name == '') {
    countryInfoHtml.innerHTML = '';
    countriesListHtml.innerHTML = '';
  } else {
    fetch(
      `https://restcountries.com/v3.1/name/${Name}?fields=name,capital,population,flags,languages`,
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(countries => {
        if (countries.length > 10) {
          countryInfoHtml.innerHTML = '';
          countriesListHtml.innerHTML = '';
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } else if (countries.length > 1) {
          const markup = countriesList(countries);
          countryInfoHtml.innerHTML = '';
          countriesListHtml.innerHTML = markup;
        } else {
          const markup = countryInfo(countries[0]);
          countriesListHtml.innerHTML = '';
          countryInfoHtml.innerHTML = markup;
        }
      })
      .catch(error => {
        countryInfoHtml.innerHTML = '';
        countriesListHtml.innerHTML = '';
          Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }
}
