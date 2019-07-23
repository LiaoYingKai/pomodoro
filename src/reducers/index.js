import { combineReducers } from 'redux'
import todos from './todos.js'
import doing from './doing.js'
// import visibilityFilter from './visibilityFilter'

const pomodoro = combineReducers({
  todos,
  doing
})

export default pomodoro