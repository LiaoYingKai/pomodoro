import React,{Component} from 'react'
import { Link, Route,Switch, NavLink, isActive } from 'react-router-dom'
import loadComponent from './loadComponent.js'
import TodoIcon from '../components/Icon/TodoIcon.js'
import AnalyticsIcon from '../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../components/Icon/RingtonesIcon.js'
import CloseIcon from '../components/Icon/CloseIcon.js'


const Main = loadComponent({loader:()=>import('../pages/Main')})
const TodoList = loadComponent({loader:()=>import('../pages/TodoList')})
const Analytics = loadComponent({loader:()=>import('../pages/Analytics')})
const Ringtones = loadComponent({loader:()=>import('../pages/Ringtones')})

console.log(isActive)
class Layout extends Component{
	render(){
		return(
			<div className="content">
				<ul className="menu-bar">
					<li className="link">
						<NavLink activeClassName="active" to="/todo-list">
							<TodoIcon />
							to-do list
						</NavLink>
					</li>
					<li className="link">
						<NavLink activeClassName="active" to="/analytics">
							<AnalyticsIcon />
							analytics
						</NavLink>
					</li>
					<li className="link">
						<NavLink activeClassName="active" to="/ringtones">
							<RingtonesIcon/>
							ringtones
						</NavLink>
					</li>
				</ul>
				<div className="container">
					<Route exact path="/" component={Main}/>
					<Route path="/todo-list" component={TodoList}/>
					<Route path="/analytics" component={Analytics}/>
					<Route path="/ringtones" component={Ringtones}/>
				</div>
				<div className="logo-bar">
					<Link to="/">
						<CloseIcon/>
					</Link>
					<p>pomodoro</p>
				</div>
			</div>
		)
	}
}


export default Layout