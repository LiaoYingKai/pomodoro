/* eslint-disable no-case-declarations */
import {
  ADD_TODO,
  CHANGE_TODO_STATE,
  DELETE_TODO,
} from '../actions/actionsTypes'

export default function todos(state=[], action){
  console.log(state)
  let todos = state
  switch(action.type){
  case ADD_TODO:
    return [ ...todos, {text:action.todo,id: action.id,pomodoroNumber: 0,isCheck: false} ]
  case CHANGE_TODO_STATE:
    todos = state
    todos[action.index].isDone = !todos[action.index].isDone
    return [...todos]
  case DELETE_TODO:
    todos = state
    todos.splice(action.index,0)
    return [...todos]
  default:
    return todos
  }
}