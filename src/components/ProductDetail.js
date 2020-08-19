import React, {Component} from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
class ProductDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
           products : []
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
           products :res.data
          });
          }).catch( err =>{
          console.log(err);
          });
      }
      }

 render() {
 	var { products } = this.state;
  	return (
  		<React.Fragment>
        <Header />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt" >
                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="col-sm-4">
                        <img src={this.state.products.avatar} height="300" width="300" alt="" />
                        </div>
                        <div className="col-sm-8">
                    <div className="single-item-body">
                        <h2 className="single-item-title">Name: {this.state.products.name}</h2>
                        <p className="single-item-price">
                        <span>Price: {this.state.products.price} $</span>
                        </p>
                    </div>
                    <div className="clearfix" />
                    <div className="single-item-options">
                        <h2 className="single-item-title">So Luong bánh :{this.state.products.quantity}</h2>
                        <div className="clearfix" />
                    </div>
                    </div>
                    </div>         
                </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>   	
   		);
	}
}

export default ProductDetail;