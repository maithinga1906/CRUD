import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Switch, StaticRouter } from 'react-router-dom';
import ProductList from '../ProductList';
class Header extends Component {

  render (){
    return (
      <Router>
        
        <div className="header-bottom" style={{backgroundColor: 'black'}}>
          <div className="container">
            <div className="visible-xs clearfix" />
            <nav className="main-menu">
              <ul className="l-inline ov">
                <li><a className="text-light" href="/">Trang chủ</a></li>
                <li><a>Sản phẩm</a>
                  <ul className="sub-menu">
                    <li><a href="/sanphamhot">Sản phẩm Hot</a></li>
                    <li><a href="/sanphammoi">Sản phẩm Mới</a></li>
                    <li><a href="/sanphamkhuyenmai">Sản phẩm Khuyến Mãi</a></li>
                  </ul>
                </li>
                <li><a href="/product-list" className="text-light">Giới thiệu</a></li>              
                <li><a href="/contact" className="text-light b">Liên hệ</a></li>
                <li><a href="/dangnhap" className="text-light b">Dang Nhap</a></li>
                <li><a href="/dangki" className="text-light b">Dang Ki</a></li>
                <li><a>Admin </a>
                  <ul className="sub-menu">
                    <li><a href="/product-list">Product</a></li>
                    <li><a href="/user-list">Users</a></li>
                  </ul>
                </li>
              </ul>
              <div className="clearfix" />
              
            </nav>
          </div> {/* .container */}
        </div> {/* .header-bottom */}
         
         
       
      </Router>
    );
  }
}
 


export default Header;