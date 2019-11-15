import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase"><i className="fa fa-archive" aria-hidden="true"></i> Storage</h5>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md"><a href="#">January <span className="badge badge-primary"> 1</span></a></div>
                  <div className="col-md"><a href="#">May <span className="badge badge-primary"> 4</span></a></div>
                  <div className="col-md"><a href="#">September <span className="badge badge-primary"> 6</span></a></div>
                </div>
                <div className="row">
                  <div className="col-md"><a href="#">February <span className="badge badge-primary"> 22</span></a></div>
                  <div className="col-md"><a href="#">June <span className="badge badge-primary"> 12</span></a></div>
                  <div className="col-md"><a href="#">October <span className="badge badge-primary"> 31</span></a></div>
                </div>
                <div className="row">
                  <div className="col-md"><a href="#">March <span className="badge badge-primary"> 12</span></a></div>
                  <div className="col-md"><a href="#">July <span className="badge badge-primary"> 231</span></a></div>
                  <div className="col-md"><a href="#">November <span className="badge badge-primary"> 3</span></a></div>
                </div>
                <div className="row">
                  <div className="col-md"><a href="#">April <span className="badge badge-primary"> 2</span></a></div>
                  <div className="col-md"><a href="#">August <span className="badge badge-primary"> 14</span></a></div>
                  <div className="col-md"><a href="#">December <span className="badge badge-primary"> 42</span></a></div>
                </div>

              </div>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Useful links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Giới thiệu Blog</a>
                </li>
                <li>
                  <a href="#">Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="#">Những bài viết hay</a>
                </li>
                <li>
                  <a href="#">Website Tác giả</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Connects</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Trang chủ Website</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/tony.cuong.39142">Facebook của tôi</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/?hl=vi">Instagram của tôi</a>
                </li>
                <li>
                  <a href="#">Tầm nhìn</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="tag">
          <h6><i className="fa fa-search" aria-hidden="true"></i> Tags: </h6>
          <span className="tag-links">
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1, </a>
            <a href="#" rel="tag">Tìm kiếm 1 </a>
          </span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
