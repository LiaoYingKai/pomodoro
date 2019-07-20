import React,{Component} from 'react'
import { Link, Route, Switch, NavLink, isActive } from 'react-router-dom'
import loadComponent from './loadComponent.js'
import TodoIcon from '../components/Icon/TodoIcon.js'
import AnalyticsIcon from '../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../components/Icon/RingtonesIcon.js'
import CloseIcon from '../components/Icon/CloseIcon.js'
import TimePicker from '../components/TimePicker'
import Main from '../pages/Main'

// const Main = loadComponent({loader:()=>import('../pages/Main')})
const TodoList = loadComponent({loader:()=>import('../pages/TodoList')})
const Analytics = loadComponent({loader:()=>import('../pages/Analytics')})
const Ringtones = loadComponent({loader:()=>import('../pages/Ringtones')})

class Layout extends Component{
	constructor(){
		super();
		this._handleToggleSwitch = this._handleToggleSwitch.bind(this);
		this.state = {
			isOpen: false,
		}
	}
	_handleToggleSwitch(){
		const { isOpen } = this.state
		this.setState({
			isOpen: !isOpen
		})
	}
	render(){
		const { _handleToggleSwitch } = this
		const { isOpen } = this.state
		return(
			<React.Fragment>
			<Main isOpen={isOpen}></Main>
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
					<Route path="/todo-list" component={TodoList}/>
					<Route path="/analytics" component={Analytics}/>
					<Route path="/ringtones" component={Ringtones}/>
				</div>
				<div className="right__bar">
					<div className={isOpen ? "" : "right__bar--disappear"}>
						<Link to="/" onClick={_handleToggleSwitch}>
							<CloseIcon/>
						</Link>
					</div>
					<div className={`right__bar__menu ${isOpen ? "right__bar--disappear" : "" }`}>
						<Link to="todo-list" onClick={_handleToggleSwitch}>
							<TodoIcon/>
						</Link>
						<Link to="analytics" onClick={_handleToggleSwitch}>
							<AnalyticsIcon/>
						</Link>
						<Link to="ringtones" onClick={_handleToggleSwitch}>
							<RingtonesIcon/>
						</Link>
					</div>
					<p>pomodoro</p>
				</div>
			</div>
			</React.Fragment>
		)
	}
}


export default Layout