import React,{Component} from 'react'
import { Link, Route,Switch } from 'react-router-dom'
import loadComponent from './loadComponent.js'

const Main = loadComponent({loader:()=>import('../pages/Main')})
const TodoList = loadComponent({loader:()=>import('../pages/TodoList')})
const Analytics = loadComponent({loader:()=>import('../pages/Analytics')})
const Ringtones = loadComponent({loader:()=>import('../pages/Ringtones')})


class Layout extends Component{
  render(){
    return(
      <div>
        <header>
          <Link to='/'><button></button></Link>
          <Link to='/todo-list'><button>代辦</button></Link>
          <Link to='/analytics'><button>統計</button></Link>
          <Link to='/ringtones'><button>聲音</button></Link>

        </header>
        <div className="container">
          <Route exact path='/' component={Main}/>
          <Route path='/todo-list' component={TodoList}/>
          <Route path='/analytics' component={Analytics}/>
            <Route path='/ringtones' component={Ringtones}/>

        </div>
      </div>
    )
  }
}


export default Layout