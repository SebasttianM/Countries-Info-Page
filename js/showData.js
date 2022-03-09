const showData = async (country, card) => {
  card.innerHTML = '';
  const allCountries = await country;
  allCountries.forEach((info) => {
    const { name, flags, cca2, capital, region, flag } = info;
    card.innerHTML += `

    <div class="card">
          <img src=${flags.png} alt="" />
          <div class="botones boton-modal">
            <label for="btn-modal" class="boton primario"><small>${cca2}</small> - <strong>${name.common}</strong>  </label>
          </div>

        
          <input type="checkbox" id="btn-modal" />
          <div class="container-modal">
            <div class="content-modal">
              <h2>${flag} - ${name.official} </h2>
              <p>
               <strong>Capital:</strong> ${capital}
               </p>
               <p>
               <strong>Continent :</strong> ${region}
               </p>
               
              <div class="btn-cerrar">
                <label for="btn-modal">Cerrar</label>
              </div>
            </div>
            <label for="btn-modal" class="cerrar-modal"></label>
          </div>
        </div>
  
    `;
  });
};

export default showData;
