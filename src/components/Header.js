import React from 'react';

class Header extends React.Component {
  render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <a href="#" className="navbar-brand"><i className="fa fa-code" aria-hidden="true"></i><strong> Code Stories</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link"><i className="fa fa-home" aria-hidden="true"></i> Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Posts <span className="sr-only">(current)</span></a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">BÀI VIẾT HAY</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">BÀI VIẾT VỀ CUỘC SỐNG</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">KINH NGHIỆM LÀM VIỆC</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">KỸ NĂNG MỀM</a>
                </div>
              </li>
              <li className="nav-item">
                <a href="https://www.facebook.com/tony.cuong.39142" className="nav-link">Author</a>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Course </a>
                <div className="dropdown-menu">
                  <h5 className="dropdown-header">LẬP TRÌNH</h5>
                  <a className="dropdown-item" href="#">LẬP TRÌNH C++</a>
                  <a className="dropdown-item" href="#">LẬP TRÌNH JAVASCRIPT</a>
                  <a className="dropdown-item" href="#">LẬP TRÌNH FRONT-END</a>
                  <div className="dropdown-divider"></div>
                  <h5 className="dropdown-header">IT & PHẦN MỀM</h5>
                  <a className="dropdown-item" href="#">THỦ THUẬT MÁY TÍNH</a>
                  <a className="dropdown-item" href="#">HƯỚNG DẪN CÀI ĐẶT</a>
                  <div className="dropdown-divider"></div>
                  <h5 className="dropdown-header">EDIT VIDEO</h5>
                  <a className="dropdown-item" href="#">EDIT BẰNG PROSHOWS PRODUCER</a>
                  <a className="dropdown-item" href="#">EDIT BẰNG ADOBE COLLECTION</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">MICROSOFT OFFICE</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">NGOẠI NGỮ</a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Fan Page</a>
              </li>
              <li className="nav-item">
                <a href="https://www.youtube.com/channel/UCZ24KRhDQCclByqnhsFESUQ?view_as=subscriber" className="nav-link">Youtube</a>
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
