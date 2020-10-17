import React from 'react';
import {Link} from "react-router-dom";

function Header (){
    return  <header>
              <img className="head-img" src="https://rigelselmani.github.io/Word-Scape/assets/images/logo%20(2).png" alt="word-img"/>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/bank">
                  <li>Word &#8226; Bank</li>
                </Link>
                <Link to="/pract">
                  <li>Practice!</li>
                </Link>
              </ul>
              </header>
}

export default Header;