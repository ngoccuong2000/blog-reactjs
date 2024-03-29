import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">LOGO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Menu Item 1<span className="sr-only">(current)</span></a>
          </li>
            <li className="nav-item">
            <button className="nav-link btn btn-primary">Login With Facebook</button>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
