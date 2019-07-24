import React from 'react';

function Footer() {
  return(
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Om oss</h5>
            <ul>
              <li><i className="fas fa-phone"></i> 400 09 022</li>
              <li><i className="fas fa-map-marker-alt"></i> Huldervegen 2, 9016 Tromsø</li>
              <li><i className="fas fa-clock"></i> Mandag-Torsdag 14.00 til 23.00</li>
              <li><i className="fas fa-clock"></i> Fredag-Lørdag 14.00 til 23.30</li>
              <li><i className="fas fa-clock"></i> Søndag 13.00 til 23.00</li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Følg oss!</h5>
            <ul>
              <li><a class="white-text" href="https://www.facebook.com/tromsopizza/"><i className="fab fa-facebook"></i> Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        Nettløsning av <a class="brown-text text-lighten-3" href="http://isaks.io">isaks.io</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;