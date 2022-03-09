const botonSwitch = document.querySelector('#switch');

botonSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  botonSwitch.classList.toggle('active');
});


