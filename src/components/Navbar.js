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
            <div className="drop">
              <Link
                activeClass="active"
                to="meny"
                spy={true}
                smooth={true}
                offset={0}
                duratio={400}
                id="link"
                className="dropbtn">
                  Meny
              </Link>
              <div className="dropdown-con">
                <Link
                  activeClass="active"
                  to="pizza"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duratio={400}>
                    Pizza 
                </Link>
                <Link
                  activeClass="active"
                  to="grillretter"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duratio={400}>
                    Grillretter 
                </Link>
                <Link
                  activeClass="active"
                  to="kebabretter"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duratio={400}>
                    Kebabretter 
                </Link>
                <Link
                  activeClass="active"
                  to="ekstra"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duratio={400}>
                    Ekstra 
                </Link>
                <Link
                  activeClass="active"
                  to="smaretter"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duratio={400}>
                    Småretter
                </Link>
                <Link
                  activeClass="active"
                  to="barnemeny"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duratio={400}>
                    Barnemeny
                </Link>
              </div>
            </div>
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
          <li id="margin">
            <Link
              activeClass="active"
              to="pizza"
              spy={true}
              smooth={true}
              offset={-50}
              duratio={400}>
                Pizza 
            </Link>
            <Link
              activeClass="active"
              to="grillretter"
              spy={true}
              smooth={true}
              offset={-50}
              duratio={400}>
                Grillretter 
            </Link>
            <Link
              activeClass="active"
              to="kebabretter"
              spy={true}
              smooth={true}
              offset={-50}
              duratio={400}>
                Kebabretter 
            </Link>
            <Link
              activeClass="active"
              to="ekstra"
              spy={true}
              smooth={true}
              offset={-50}
              duratio={400}>
                Ekstra 
            </Link>
            <Link
              activeClass="active"
              to="smaretter"
              spy={true}
              smooth={true}
              offset={-50}
              duratio={400}>
                Småretter
            </Link>
            <Link
              activeClass="active"
              to="barnemeny"
              spy={true}
              smooth={true}
              offset={-50}
              duratio={400}>
                Barnemeny
            </Link>
          </li>
        </ul>
        <a id="menu" href="/" data-target="nav-mobile" class="sidenav-trigger"><i class="fas fa-chevron-circle-down"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;