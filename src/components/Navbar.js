import React from 'react';

function Navbar() {
  return(
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo">Tromsø Pizzeria</a>
        <ul class="right hide-on-med-and-down">
          <li><a id="link" href="/">Om Oss</a></li>
          <li><a id="link" href="/">Meny</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li><a id="link" href="/">Om Oss</a></li>
          <li><a id="link" href="/">Meny</a></li>
        </ul>
        <a id="menu" href="/" data-target="nav-mobile" class="sidenav-trigger"><i class="fas fa-chevron-circle-down"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;