import React from 'react';
import {Link} from "react-router-dom";

function Header (){
    return  <header>
              <img className="head-img" src="https://rigelselmani.github.io/Word-Scape/assets/images/logo%20(2).png" alt="word-img"/>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/wordBank">
                  <li>Word &#8226; Bank</li>
                </Link>
           
                  <li>Practice!</li>
              
              </ul>
              </header>
}

export default Header;