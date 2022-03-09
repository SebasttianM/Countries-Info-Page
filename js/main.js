import getData from './getData.js';
import showData from './showData.js';

const endpoint = 'https://restcountries.com/v3.1/all';
const americas = document.getElementById('Americas');
const africa = document.getElementById('Africa');
const asia = document.getElementById('Asia');
const europe = document.getElementById('Europe');
const oceania = document.getElementById('Oceania');

const urlamericas = 'https://restcountries.com/v3.1/region/americas';

const searchRegion = 'https://restcountries.com/v3.1/region/';

const card = document.querySelector('#card');

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  const data = getData(endpoint);
  showData(data, card);
});

const search = (region, endpoint) => {
  region.addEventListener('click', () => {
    const dataRegion = getData(searchRegion + endpoint);
    showData(dataRegion, card);
  });
};
search(americas, 'americas');
search(africa, 'africa');
search(asia, 'asia');
search(europe, 'europe');
search(oceania, 'oceania');
