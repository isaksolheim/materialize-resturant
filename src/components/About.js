import React from 'react';

function About() {
  return(
    <div class="container">
      <div class="section">

        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i className="fas fa-map-marker-alt"></i></h2>
              <h5 class="center">Adresse</h5>

              <p class="light center">
                Huldervegen 2, 9016 Tromsø
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i className="fas fa-clock"></i></h2>
              <h5 class="center">Åpningstider</h5>

              <p class="light center">
                Mandag-Torsdag 14.00 til 23.00 <br />
                Fredag-Lørdag 14.00 til 23.30 <br />
                Søndag 13.00 til 23.00
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i className="fas fa-phone-alt"></i></h2>
              <h5 class="center">Telefon</h5>

              <p class="light center">
                400 09 022
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;