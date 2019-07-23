/* eslint-disable indent */
/* eslint-disable no-case-declarations */
import {
  ADD_TODO,
  CHANGE_TODO_STATE,
  DELETE_TODO,
} from '../actions/actionsTypes'

export default function todos(state=[], action){
  console.log(state)
  let todos = state
  switch(action.type) {
    case ADD_TODO:{
      return [ ...todos, {text:action.todo,id: action.id,pomodoroNumber: 0,isDone: false} ]
    }
    case CHANGE_TODO_STATE: {
      const index = todos.findIndex(item => item.id === action.id)
      todos[index].isDone = !todos[index].isDone
      return [...todos]
    }
    case DELETE_TODO:{
      const index = todos.findIndex(item => item.id === action.id)
      todos.splice(index,1)
      return [...todos]
    }
    default: {
      return todos
    }
  }
}