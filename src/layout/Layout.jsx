import React,{Component} from 'react'
import { Link, Route,Switch, NavLink, isActive } from 'react-router-dom'
import loadComponent from './loadComponent.js'
import TodoIcon from '../components/Icon/TodoIcon.js'
import AnalyticsIcon from '../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../components/Icon/RingtonesIcon.js'
import CloseIcon from '../components/Icon/CloseIcon.js'
import TimePicker from '../components/TimePicker'

const Main = loadComponent({loader:()=>import('../pages/Main')})
const TodoList = loadComponent({loader:()=>import('../pages/TodoList')})
const Analytics = loadComponent({loader:()=>import('../pages/Analytics')})
const Ringtones = loadComponent({loader:()=>import('../pages/Ringtones')})

console.log(isActive)
class Layout extends Component{
	render(){
		return(
			<div className="content">
				<div className="menu__bar">
					<ul className="menu__bar__ul">
						<li className="menu__bar__link">
							<NavLink activeClassName="menu__bar__link--active" to="/todo-list">
								<TodoIcon />
								to-do list
							</NavLink>
						</li>
						<li className="menu__bar__link">
							<NavLink activeClassName="menu__bar__link--active" to="/analytics">
								<AnalyticsIcon />
								analytics
							</NavLink>
						</li>
						<li className="menu__bar__link">
							<NavLink activeClassName="menu__bar__link--active" to="/ringtones">
								<RingtonesIcon/>
								ringtones
							</NavLink>
						</li>
					</ul>
					<div className="logo">
						<div className="logo__position">
							<div className="time__backgroundColor">
								<TimePicker/>
							</div>
							<div className="logo__time">25:00</div>
							<div className="logo__todo">the First thing to do today</div>
						</div>
					</div>
				</div>
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