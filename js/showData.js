const showData = async (country, card) => {
  card.innerHTML = '';
  const allCountries = await country;
  allCountries.forEach((info) => {
    const { name, flags, cca2 } = info;
    card.innerHTML += `

    <div class="card">
    <img src=${flags.png} alt="" />
    <div class="botones">
      <a href="#" class="boton primario"><small>${cca2}</small> - <strong>${name.common}</strong></a>
    </div>
  </div>
    `;
  });
};

export default showData;
