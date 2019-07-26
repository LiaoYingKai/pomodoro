import { combineReducers } from 'redux'
import todos from './todos.js'
import doing from './doing.js'
import time from './time.js'

const pomodoro = combineReducers({
  todos,
  doing,
  time
})

export default pomodoro