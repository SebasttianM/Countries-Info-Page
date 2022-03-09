const showData = async (country, card) => {
  card.innerHTML = '';
  const allCountries = await country;
  allCountries.forEach((info) => {
    const { name, flags, id } = info;
    card.innerHTML += `
    <div class="card" id="card">
          <img src=${flags.png} alt="" />
          <div class="botones">
            <a href="#" class="boton primario">${name.common}</a>
            <a href="#" class="boton secundario">Ver más</a>
          </div>
        </div>
    `;
  });
};

export default showData;
