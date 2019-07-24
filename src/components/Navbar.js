import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return(
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo"><img id="logo" src={'./images/logo.png'} alt="logo" /></a>
        <ul class="right hide-on-med-and-down">
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duratio={400}
              id="link">
                Om Oss
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="meny"
              spy={true}
              smooth={true}
              offset={0}
              duratio={400}
              id="link">
                Meny
            </Link>
          </li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duratio={400}
              id="link">
                Om Oss
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="meny"
              spy={true}
              smooth={true}
              offset={0}
              duratio={400}
              id="link">
                Meny
            </Link>
          </li>
        </ul>
        <a id="menu" href="/" data-target="nav-mobile" class="sidenav-trigger"><i class="fas fa-chevron-circle-down"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;