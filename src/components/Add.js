import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Add extends Component {
	constructor(props){
        super(props);
        this.state = {
            id: '',
            name : '',
            avatar: '',
            price: '',
            quantity: '',      
        }
    }

    componentDidMount(){
      var {match} = this.props;
      if (match) {
        var id = match.params.id;
        axios({
        method: 'GET',
        url :`http://localhost:3000/products/${id}`,
        data : null
       }).then(res =>{
        var data =res.data;
          this.setState({
            id: data.id,
            name : data.name,
            avatar : data.avatar,
            price : data.price,
            quantity : data.quantity,
          });
        }).catch( err =>{
      });
     }
    }

    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type =target.type;
      var value =target.value;
      if (type === 'file') {
        value = this.avatar.value.replace( /C:\\fakepath\\/i,"/images/" );
      }

      this.setState({
        [name] : value,
      });
    }

    onSave =(e) =>{
    	e.preventDefault();
    	var { id, name, avatar, price, quantity} = this.state;
      var {history} = this.props;
      if (id) {
        axios({
        method: 'PUT',
        url :`http://localhost:3000/products/${id}`,
        data : {
            name : name,
            avatar : avatar,
            price : price,
            quantity : quantity
          }
        }).then(res =>{
              toast.success("Cập nhật sản phẩm thành công", {
          })
            history.goBack();
        });
      }else{
        if (name === '' && price ==='' && avatar === ''&& quantity === '' ) {
                  toast.warn("Vui lòng nhập đủ nội dung", {
            });
        }else{
              axios({
              method: 'POST',
              url :'http://localhost:3000/products',
                data : {
                name : name,
                avatar : avatar,
                price: price,
                quantity : quantity
                    }
                  }).then(res =>{
                        toast.success("Thêm sản phẩm thành công", {
                    })
                      history.goBack();
                  });
        }
      }
        
    } 

    onClear = () =>{
      this.setState({
            name : '',
            avatar : '',
            price : '',
            quantity : ''
      });
    }

    render() {
    	var { id, name, avatar, price, quantity} = this.state;
  	return (
  		      
        <React.Fragment>
        <div>
          <div id="wrapper">
           
            <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
          
            <div className="panel panel-warning col-md-8 ml">
              <div className="container">
              <div className="panel-body mt-4">
                <form onSubmit = {this.onSave}>
                  <div className="form-group">
                    <label>Tên Sản phẩm :</label>
                    <input type="text" name="name" value ={this.state.name} onChange ={this.onChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Chọn Ảnh :</label><br></br>
                    <input type="file" name="avatar" ref ={ (input) => { this.avatar = input} } onChange ={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label>Giá Sản phẩm ($) :</label>
                    <input type="number" name="price" value ={this.state.price} onChange ={this.onChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>So Luong Sản phẩm :</label>
                    <input type="number" name="quantity" value ={this.state.quantity} onChange ={this.onChange} className="form-control" />
                  </div>
                  <br />
                  <div className="text-center">
                    <button type="submit"  className="btn btn-primary">Lưu</button>&nbsp;
                    <button type="button" onClick={this.onClear} className="btn btn-primary">Clear</button>
                    <NavLink to="/product-list" className="btn btn-primary ml-1">Trở về</NavLink>
                  </div>
                </form>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        </React.Fragment>  
   		);
	}
}

export default Add;