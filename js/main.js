import getData from './getData.js';
import showData from './showData.js';

const endpoint = 'https://restcountries.com/v3.1/all';

const card = document.querySelector('#card');

document.addEventListener('DOMContentLoaded', () => {
  const data = getData(endpoint);
  showData(data, card);
});


