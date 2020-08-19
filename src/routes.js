import React from 'react';

import DisplayProduct from './components/DisplayProduct.js';
import ProductList from './components/ProductList.js';
import DangNhap from './components/DangNhap.js';
import DangKi from './components/DangKi.js';
import Add from './components/Add.js';
import ProductDetail from './components/ProductDetail.js';
import UserList from './components/UserList.js';


const routes = [
	{
		path : '/',
		exact : true,
		main : ()=> <DisplayProduct />
	},
	{
		path : '/product-list',
		exact : true,
		main : ()=> <ProductList />
	},
	{
		path : '/user-list',
		exact : true,
		main : ()=> <UserList />
	},
	{
		path : '/dangki',
		exact : true,
		main : ({history})=> <DangKi history={history} />
	},
	{
		path : '/dangnhap',
		exact : true,
		main : ({history})=> <DangNhap history={history} />
	},
	{
		path : '/add',
		exact : true,
		main : ({history})=> <Add history={history} />
	},
	{
		path : '/products/:id/edit',
		exact : true,
		main : ({match , history})=> <Add  match ={match} history={history}/>
	},
	{
		path : '/products/:id/product-detail',
		exact : true,
		main : ({match})=> <ProductDetail  match ={match}/>
	}
	
];


export default routes;