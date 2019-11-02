import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a href="#" className="navbar-brand"><i className="fa fa-code" aria-hidden="true"></i><strong> Code Stories</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link"><i className="fa fa-home" aria-hidden="true"></i> Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Posts<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Author</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Course</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Fan Page</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Youtube</a>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-primary">Login With Facebook</button>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;
