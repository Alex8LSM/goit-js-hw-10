import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const myInput = document.querySelector('#search-box');

myInput.addEventListener('input', search);

function search() {
    console.log(myInput.nodeValue);
}
