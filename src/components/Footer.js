import React from 'react';
import footerLinks from './data/footer-links.json';


const Footer = () => {

    return(
        <footer className="scene">
        <article className="content">
          <div id="socialmedia">
            <ul className="group">
            {
              footerLinks.map((link) =>               
                <li><a href={ link.href }><img className="icon" src={ link.src } alt= {`icon for ${link.alt}`} /></a></li>
              )
            }  
            </ul>      
          </div>
        </article>
        </footer>
    );
}
export default Footer;