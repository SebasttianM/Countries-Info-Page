import getData from './getData.js';
import showData from './showData.js';

const endpoint = 'https://restcountries.com/v3.1/all';
const americas = document.getElementById('Americas');
const africa = document.getElementById('Africa');
const asia = document.getElementById('Asia');
const europe = document.getElementById('Europe');
const oceania = document.getElementById('Oceania');
const searchFind = document.getElementById('search');

const urlFind = 'https://restcountries.com/v3.1/name/';
console.log(urlFind + 'peru');

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

form.addEventListener('submit', (e) => {
  e.preventDefault(); //lapagina no se recarga
  const findCountry = getData(urlFind + searchFind.value);
  console.log(findCountry);
  const searchTerm = searchFind.value.toLowerCase();
  if (searchTerm && searchTerm !== '') {
    showData(findCountry, card);
    searchFind.value = '';
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Debes Escribir algo!!!',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  }
});
