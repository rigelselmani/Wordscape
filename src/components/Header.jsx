import React from 'react';

function Header (){
    return <nav class="navbar navbar-light bg-light">
    <img class="navImage" src="https://rigelselmani.github.io/Word-Scape/assets/images/logo%20(2).png" />
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
}

export default Header;