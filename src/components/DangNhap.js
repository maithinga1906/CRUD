import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import {Redirect} from 'react-router-dom';
class DangNhap extends Component {
	constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            loggedIn : false,
        }
    }
    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type =target.type;
      var value =target.value;


      this.setState({
        [name] : value,
      });
    }

    onLogin = (e) =>{
    	e.preventDefault();
    	var { username, password } = this.state;
    	if ( username === 'diuhoang' && password === 'diuhoang2003') {
        this.setState({loggedIn : true})
        localStorage.setItem('username', username);      		
    	}else{
    		 toast.error("Sai tên đăng nhập hoặc mật khẩu !", {
      }) 
    }
    }
 render() {
 	var { username, password } = this.state;
      if (this.state.loggedIn) {
        toast.success("Đăng nhập thành công", {
      })
      return <Redirect to="/product-list"/>;
    }
  	return (
      <React.Fragment>
      <Header/>
  		<div className="container">
        <div id="content">
          <form action="#" method="post" onSubmit = {this.onLogin} className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h4>Đăng nhập</h4>
                <div className="space20">&nbsp;</div>
                <div className="form-block">
                  <label htmlFor="username">UserName*</label>
                  <input className="form-control" type="text" name="username" value ={ this.state.username }   onChange ={this.onChange} required />
                </div>
                <div className="form-block">
                  <label htmlFor="password">Password*</label>
                  <input className="form-control" type="password" name="password" value ={ this.state.password }   onChange ={this.onChange} required />
                </div>
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </div>
              <div className="col-sm-3" />
            </div>
          </form>
        </div> {/* #content */}
      </div>
      <Footer/>
      </React.Fragment>  
   		);
	}
}

export default DangNhap;