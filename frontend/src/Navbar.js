import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/playground">Playground</Link>
      </div>
    );
  };


export default NavBar;