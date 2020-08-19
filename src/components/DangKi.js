import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import {Redirect} from 'react-router-dom';
class DangKi extends Component {
	constructor(props){
        super(props);
        this.state = {
            id: '',
            username : '',
            avatar: '',
            email : '',
            phone_number: '',
            address: '',
            passwrod: '',      
        }
    }

    componentDidMount(){
      var {match} = this.props;
      if (match) {
        var id = match.params.id;
        axios({
        method: 'GET',
        url :`http://localhost:3000/users/${id}`,
        data : null
       }).then(res =>{
        var data =res.data;
          this.setState({
            id: data.id,
            username: data.username,
            avatar: data.avatar,
            email: data.email,
            phone_number: data.phone_number,
            address: data.address,
            password: data.password
          });
        }).catch( err =>{
      });
     }
    }

    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type = target.type;
      var value = target.value;
      if (type === 'file') {
        value = this.avatar.value.replace( /C:\\fakepath\\/i,"/images/" );
      }
      

      this.setState({
        [name] : value,
      });
    }

    onSave =(e) =>{
    	e.preventDefault();
    	var { id, username, avatar, email, phone_number, address, password} = this.state;
      var {history} = this.props;
      if (id) {
        axios({
        method: 'PUT',
        url :`http://localhost:3000/users/${id}`,
        data : {
            username: username,
            avatar: avatar,
            email: email,
            phone_number: phone_number,
            address: address,
            password: password
          }
        }).then(res =>{
              toast.success("Dang Ki Thanh Cong", {
          })
            history.goBack();
        });
      }else{
        if (username === '' && avatar ==='' && email === ''&& phone_number === '' && address === '' && password === '') {
                  toast.warn("Vui lòng nhập đủ nội dung", {
            });
        }else{
              axios({
              method: 'POST',
              url :'http://localhost:3000/users',
                data : {
                    username: username,
                    avatar: avatar,
                    email: email,
                    phone_number: phone_number,
                    address: address,
                    password: password
                    }
                  }).then(res =>{
                        toast.success("Register Thanh Cong", {
                    })
                      history.goBack();
                  });
        }
      }
        
    } 

 render() {
    var { id, username, avatar, email, phone_number, address, passwrod} = this.state;
    
  return (  
      <React.Fragment>
      <Header/>
  		<div className="container">
        <div id="content">
          <form onSubmit = {this.onSave}>
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h4>Đăng Ki Tai Khoan</h4>
                <div className="space20">&nbsp;</div>
                <div className="form-block">
                  <label htmlFor="username">UserName<span style={{ "color": "red"}}>*</span></label>
                  <input className="form-control" type="text" name="username" value ={ this.state.username }   onChange ={this.onChange}  />
                </div>
                <div className="form-group">
                    <label style={{"marginRight": "110px"}}>Chọn Avatar :</label>
                    <input type="file" name="avatar" ref ={ (input) => { this.avatar = input} } onChange ={this.onChange} />
                  </div>
                <div className="form-block">
                  <label htmlFor="username">Email<span style={{ "color": "red"}}>*</span></label>
                  <input className="form-control" type="text" name="email" value ={ this.state.email }   onChange ={this.onChange} />
                </div>
                <div className="form-block">
                  <label htmlFor="username">Address<span style={{ "color": "red"}}>*</span></label>
                  <select value ={ this.state.address } onChange ={this.onChange}>
                      <option name="address" value="Quang Binh">Quang Binh</option>
                      <option name="address" value="Quang Tri">Quang Tri</option>
                      <option name="address" value="Da Nang" >Da Nang</option>
                      <option name="address" value="Quang Nam">Quang Nam</option>
                      <option name="address" value="Quang Ngai" >Quang Ngai</option>
                      <option name="address" value="Binh Dinh">Binh Dinh</option>
                  </select>
                </div>
                <div className="form-block">
                  <label htmlFor="username">Phone_number<span style={{ "color": "red"}}>*</span></label>
                  <input className="form-control" type="number" name="phone_number" value ={ this.state.phone_number }   onChange ={this.onChange} />
                </div>
                <div className="form-block">
                  <label htmlFor="password">Password<span style={{ "color": "red"}}>*</span></label>
                  <input className="form-control" type="password" name="password" value ={ this.state.password }   onChange ={this.onChange} />
                </div>
                {/* <div className="form-block">
                  <label htmlFor="password">Re-Password<span style={{ "color": "red"}}>*</span></label>
                  <input className="form-control" type="password" name="password" value ={ this.state.password }   onChange ={this.onChange} required />
                </div> */}
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Register</button>
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

export default DangKi;