import React from 'react';

function About() {
  return(
    <div class="container" id="about">
      <div class="section">

        <div class="row">
          <a href="https://www.google.com/maps/place/troms%C3%B8+pizzeria/@69.6703489,18.9187574,17z/data=!3m1!4b1!4m5!3m4!1s0x45c4c5d1a972faf9:0x64a29b8f9eb3cf9f!8m2!3d69.6703489!4d18.9209461">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text"><i className="fas fa-map-marker-alt"></i></h2>
                <h5 class="center">Adresse</h5>

                <p class="light center">
                  Huldervegen 2, 9016 Tromsø
                </p>
              </div>
            </div>
          </a>

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
                <a href="tef:+4740009022">400 09 022</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;