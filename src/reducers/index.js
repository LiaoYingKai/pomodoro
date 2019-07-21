import { combineReducers } from 'redux'
import todos from './todos.js'
// import visibilityFilter from './visibilityFilter'

const pomodoro = combineReducers({
  todos,
})

export default pomodoro