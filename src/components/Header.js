//creating a function component. for header. 
// (function component is stateless, it cannot maintain the info, or state of user.)

import React from 'react';
import menuLinksData from './data/menu-links.json';

const Header = () => {
    return(
    <header id="intro">
    <article className="fullheight">
      <div className="hgroup">
        <h1>Landon Stadium</h1>
        <h2>West Atlant</h2>
        <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
      </div>
    </article>

    <nav id="nav">
      <div className="navbar">
        <div className="brand"><a href="#welcome">Landon <span>Stadium</span></a></div>
        <ul>
        {
            menuLinksData.map((link) => 
                <li><a className={`icon ${link.class}`} href={ link.href }><span>{ link.text }</span></a></li>
            )
        }
        </ul>
      </div>
    </nav>
    </header>
  );
}

export default Header;