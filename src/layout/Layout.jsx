import React,{Component} from 'react'
import { Link, Route, Switch, NavLink, isActive, HashRouter as Router, withRouter, BrowserRouter } from 'react-router-dom'
import loadComponent from './loadComponent.js'
import TodoIcon from '../components/Icon/TodoIcon.js'
import AnalyticsIcon from '../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../components/Icon/RingtonesIcon.js'
import NextStepIcon from '../components/Icon/NextStepIcon.js'
import CloseIcon from '../components/Icon/CloseIcon.js'
import Main from '../pages/Main'
import Logo from '../components/Logo'
import { connect } from 'react-redux'
import { updatePomodoro } from '../actions/todoActions'

const TodoList = loadComponent({loader:()=>import('../pages/TodoList')})
const Analytics = loadComponent({loader:()=>import('../pages/Analytics')})
const Ringtones = loadComponent({loader:()=>import('../pages/Ringtones')})

class Layout extends Component{
	constructor(){
		super();
		this._handleToggleSwitch = this._handleToggleSwitch.bind(this);
		this._handleSkipPage = this._handleSkipPage.bind(this);
		this.state = {
			isOpen: false,
			color: 'pink',
			type: Main.TypeEnums.WORK_START,
			index: 0,
		}
	}
	componentDidMount(){
		const { hash } = this.props.location
		if(hash.match(/\#\/$/g)){
			this.setState({
				isOpen: false
			})
		}else{
			this.setState({
				isOpen: true
			})
		}
	}
	_handleToggleSwitch(){
		const { isOpen } = this.state
		this.setState({
			isOpen: !isOpen
		})
	}
	_handleSkipPage(){
		let { index } = this.state
		const { doingId, updatePomodoro} = this.props
		let mainPageState=[
			{
				color: 'pink',
				type: Main.TypeEnums.WORK_START,
			},{
				color: 'pink',
				type: Main.TypeEnums.WORK_RUNNING,
			},{
				color: 'blue',
				type: Main.TypeEnums.BREAK_START,
			},{
				color: 'blue',
				type: Main.TypeEnums.BREAK_RUNNING,
			}]
		index = index >= 3 ? 0 : index + 1
		if(index == 2){
			updatePomodoro(doingId)
		}
		this.setState(Object.assign({},mainPageState[index],{index: index}))
	}
	render(){
		const { _handleToggleSwitch, _handleSkipPage } = this
		const { isOpen, color, type } = this.state
		return(
			<Router>
			<Main isOpen={isOpen} color={color} type={type}></Main>
			<div className="content">
				<nav className="menu">
					<ul>
						<li>
							<NavLink activeClassName="menu__link--active" to="/todo-list">
								<TodoIcon />
								to-do list
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="menu__link--active" to="/analytics">
								<AnalyticsIcon />
								analytics
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="menu__link--active" to="/ringtones">
								<RingtonesIcon/>
								ringtones
							</NavLink>
						</li>
					</ul>
					<Logo/>
				</nav>
				<div className="render__container">
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
						<a onClick={()=>{_handleSkipPage()}} style={{ cursor: "pointer" }} >
							<NextStepIcon/>
						</a>
					</div>
					<p>pomodoro</p>
				</div>
			</div>
			</Router>
		)
	}
}

function mapStateToProps(state){
	return{
		doingId: state.doing,
	}
}
function mapDispatchToProps(dispatch) {
  return {
		updatePomodoro: (id) => {
			dispatch(updatePomodoro(id))
		},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)