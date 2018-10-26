import React from 'react';
import ReactDOM from 'react-dom';

//引入路由
import { Router, Route, hashHistory } from 'react-router';

//引入子组件
// import Open from './Open/Open'
import Login from './Login/Login';
import Register from './Register/Register';
import Qcode from './Qcode/Qcode';
import Home from './Home/Home';
import Service from './Service/Service';
import Moreservice from './Moreservice/Moreservice';
import Govern from './Govern/Govern';
import AboutUs from './AboutUs/AboutUs';
import Friends from './Friends/Friends';
import Add from './Add/Add';
import UsData from './UsData/UsData';
import Pesonal from './Pesonal/Pesonal';
import Dynamic from './Dynamic/Dynamic';
import NavigationBar from '../components/NavigationBar';

//定义路由
let routers = (
    <Router history={hashHistory}>
		<Route path='/'  component={Login}  />
		<Route path='/register'  component={Register}  />
		<Route path='/qcode'  component={Qcode}  />
		<Route path='/moreservice'  component={Moreservice}  />
		<Route path='/govern'  component={Govern}  />
		<Route path='/aboutUs'  component={AboutUs}  />
		<Route path='/add'  component={Add}  />
		<Route path='/usData'  component={UsData}  />
		<Route path='/dynamic'  component={Dynamic}  />
		<Route path='/home'  component={Home}  />
		<Route path='/service'  component={Service}  />
		<Route path='/friends'  component={Friends}  />
		<Route path='/pesonal'  component={Pesonal}  />
	</Router>
)

ReactDOM.render(
    // <NavigationBar />,
    routers,
    document.getElementById('root')
);
