import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://s.rozee.pk/r/i/en/logo.svg" alt="Website Logo" />
      </div>
      <div className="buttons">
        <button className="default-button">Login</button>
        <button className="default-button">Sign Up</button>
        <button className="simple-button green">Post a Job</button>
        <button className="simple-button blue">Hire a Freelancer</button>
        <button className="simple-button darkblue">Employers</button>
      </div>
    </nav>
  );
};

export default Navbar;
