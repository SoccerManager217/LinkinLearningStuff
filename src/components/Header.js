//creating a function component. for header. 
// (function component is stateless, it cannot maintain the info, or state of user.)

import React ,{ useState , useEffect} from 'react';
//import menuLinksData from './data/menu-links.json';

// s
const Header = () => {
    const [menuLinksData, setMenuLinksData] = useState([]);

    const loadMenuLinksData = async() => 
    {
      //Query the API gateway //await will wait for the function to return something
      //fetch will takes in an RequestInfo or an URL that will return a Promise<Respose>
      // A promise is similar to Future is Java. use to get the value of async operations
      const url = 'https://6torc7wbze.execute-api.us-east-1.amazonaws.com/Production/menulinks';
      const resp = await fetch(url);
      let jsonData = await resp.json();
      //Assign response data to our state variable
      setMenuLinksData(jsonData);
    }

    useEffect(() => {
      //load the menu links data from the API Gateway
      loadMenuLinksData();
      //Other Side Effect
    }, []);

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