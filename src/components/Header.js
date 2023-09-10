//creating a function component. for header. 
// (function component is stateless, it cannot maintain the info, or state of user.)

import React from 'react';
const Header = () => {
    return(
    <header id="intro">
    <article className="fullheight">
      <div className="hgroup">
        <h1>Landon Stadium</h1>
        <h2>West Atlanta</h2>
        <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
      </div>
    </article>

    <nav id="nav">
      <div className="navbar">
        <div className="brand"><a href="#welcome">Landon <span>Stadium</span></a></div>
        <ul>
          <li><a className="icon info" href="#info"><span>info</span></a></li>
          <li><a className="icon rooms" href="#fields"><span>availability</span></a></li>
          <li><a className="icon dining" href="#cafeteria"><span>cafeteria</span></a></li>
          <li><a className="icon events" href="#events"><span>events</span></a></li>
          <li><a className="icon attractions" href="#shop"><span>shop</span></a></li>
        </ul>
      </div>
    </nav>
    </header>
  )
}

export default Header;