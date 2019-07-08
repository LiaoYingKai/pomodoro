import React,{Component} from 'react'
import { Link, Route,Switch } from 'react-router-dom'
import loadComponent from './loadComponent.js'
import closeButton from '../icon/close.png'
import ListIcon from '../icon/todo-list.png'
import AnalyticsIcon from '../icon/analytics.png'
import RingtonesIcon from '../icon/ringtones.png'
import test from '../icon/baseline-close-24px.svg'

const Main = loadComponent({loader:()=>import('../pages/Main')})
const TodoList = loadComponent({loader:()=>import('../pages/TodoList')})
const Analytics = loadComponent({loader:()=>import('../pages/Analytics')})
const Ringtones = loadComponent({loader:()=>import('../pages/Ringtones')})


class Layout extends Component{
  render(){
    return(
      <div className='content'>
        <div className='menu-bar'>
          <div className='link'>
            <img src={ListIcon}></img>
            <Link to='/todo-list'>to-do list</Link>
          </div>
          <div className='link'>
            <img src={AnalyticsIcon}></img>
            <Link to='/analytics'>analytics</Link>
          </div>
          <div className='link'>
            <img src={RingtonesIcon}></img>
            <Link to='/ringtones'>ringtones</Link>
          </div>
        </div>
        <div className='container'>
          <Route exact path='/' component={Main}/>
          <Route path='/todo-list' component={TodoList}/>
          <Route path='/analytics' component={Analytics}/>
          <Route path='/ringtones' component={Ringtones}/>
        </div>
        <div className='logo-bar'>
          <Link to='/'>
            <img src={closeButton}/>
          </Link>
          <p>pomodoro</p>
        </div>
      </div>
    )
  }
}


export default Layout