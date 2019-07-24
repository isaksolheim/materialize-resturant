import React from 'react';

function Header() {
  return(
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
        <div class="container">
          <br/><br/>
          <h1 class="header center">Tromsø Pizzeria</h1>
          <div class="row center">
            <h5 class="header col s12">Ekte Italiensk Pizza</h5>
          </div>
          <div class="row center">
            <a href="/" id="download-button" class="btn-large waves-effect waves-light">MENY</a>
          </div>
          <br/><br/>
        </div>
      </div>
      <div class="parallax"><img src='https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt="Pizza" /></div>
    </div>
  );
}

export default Header;