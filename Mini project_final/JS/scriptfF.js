import { displayCartItems } from '../JS/fav.js';
import { displayData } from '../JS/podFav.js';
const iconQtyAction = document.querySelector('.header__icon');


//fetch all data

function fetchData() {
  fetch('../JSON/podcasts.json')
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.error(err.message));
}
function getLocalStorage(description) {
  return localStorage.getItem(description)
    ? JSON.parse(localStorage.getItem(description))
    : undefined;
}
function setLocalStorage(description, article) {
  localStorage.setItem(description, JSON.stringify(article));
  if (description === 'currentCart') displayCartItems(article);
}
iconQtyAction.addEventListener('click', handlePageView);
function handlePageView() {
  const allPodcastsApp = document.querySelector('.allPodcastsApp');
  const favApp = document.querySelector('.favApp');
  allPodcastsApp.style.display = 'none';
  favApp.style.display = 'block';
}

//start app loading all data

fetchData();
export { getLocalStorage, setLocalStorage };