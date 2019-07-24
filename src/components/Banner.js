import React from 'react';
import { Link } from 'react-scroll';

function Banner() {
  return(
    <div id="index-banner menu" class="parallax-container">
      <div class="section no-pad-bot" id="meny">
        <div class="container">
          <h1 id="aaa" class="header center">MENY</h1>
          <div className="categories">
            <div className="item">
              <Link
                activeClass="active"
                to="pizza"
                spy={true}
                smooth={true}
                offset={-50}
                duratio={400}>
                  Pizza 
              </Link>
            </div>
            <div className="item">
              <Link
                activeClass="active"
                to="grillretter"
                spy={true}
                smooth={true}
                offset={-50}
                duratio={400}>
                  Grillretter 
              </Link>
            </div>
            <div className="item">
              <Link
                activeClass="active"
                to="kebabretter"
                spy={true}
                smooth={true}
                offset={-50}
                duratio={400}>
                  Kebabretter 
              </Link>
            </div>
            <div className="item">
              <Link
                activeClass="active"
                to="ekstra"
                spy={true}
                smooth={true}
                offset={-50}
                duratio={400}>
                  Ekstra 
              </Link>
            </div>
            <div className="item">
              <Link
                activeClass="active"
                to="smaretter"
                spy={true}
                smooth={true}
                offset={-50}
                duratio={400}>
                  Småretter
              </Link>
            </div>
            <div className="item">
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
        </div>
      </div>
      <div class="parallax"><img src='https://images.unsplash.com/photo-1517685645259-c6caddb7165d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt="Pizza" /></div>
    </div>
  );
}

export default Banner;