import React, {Component} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from 'react-router-dom';
class UserList extends Component {
	constructor(props){
        super(props)
        this.state = {
           users : [],
           keyword : '',
        }
    }

    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/users',
        data : null
      }).then(res =>{
        console.log(res);
        this.setState({
          users :res.data
        });
      }).catch( err =>{
        console.log(err);
      });
    }  

    onDelete = (id) =>{
      var {users} = this.state;
       axios({
        method: 'DELETE',
        url :`http://localhost:3000/users/${id}`,
        data : null
      }).then(res =>{
          if (res.status ===  200) {
            var index = this.findIndex(users, id);
            if(index !== -1){
              users.splice(index, 1);
              this.setState({
                users :users
              });
              toast.success("Xóa user thành công", {
              })
            }
          }
        });
    }
    findIndex =(users, id) =>{
        var {users} = this.state;
        var result = -1;
        users.forEach((user, index) =>{
            if(user.id === id){
                result =index;
            }
        });
        return result;
    }
    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }



 render() {
 	var { users,keyword } = this.state;
 
   
  	return (
  		<React.Fragment>
  		<div>
             	        	 
          <div className="btn-group mt-2 float-right a">
        		<NavLink className="navbar-brand mb-5 ml-4" to="/"><button type="button" className="btn btn-success">Home</button></NavLink>
        	</div>
  			<table className="table table-bordered table-hover mt-6 ml-5">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">User Name</th>
                      <th className="text-center">Avatar</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Phone_Number</th>
                      <th className="text-center">Address</th>
                      <th className="text-center">Hoat Dong</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((user,index) => {
                                return < Item key={index} index ={index} user={user} onDelete={this.onDelete} />
                       	})}
                  </tbody>
           	</table>

            </div>
       
        </React.Fragment>   	
   		);
	}
}

class Item extends Component {
	onDelete = (id) =>{
		if (confirm('Ban chắc chắn muốn xóa ?')) { //eslint-disable-line
         this.props.onDelete(id);
      }
	}
    render() {
    	var { user , index} = this.props;
        return (
          		  <tr>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td className="text-center"><img alt="anh" src={user.avatar} height="80" width="80" className="list-img"/></td>
                      <td>{user.email}</td>
                      <td>{user.phone_number}</td>
                      <td>{user.address}</td>
                      <td className="text-center">
                        <NavLink to={`/users/${this.props.user.id}/xem`}><button type="button" className="btn btn-primary">Xem</button></NavLink>
                        <button type="button" onClick ={ () =>this.onDelete(user.id)} className="btn btn-primary ml-1">
								Xóa
                        </button>
                      </td>
                </tr>

        );
    }
}
export default UserList;