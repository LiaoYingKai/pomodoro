import {
  ADD_TODO,
  CHANFE_TODO_STATE,
  DELETE_TODO,
  SET_DOING,
  GET_DOING,
} from './actionsTypes'

export function addTodo(todo){
  return {
    type: ADD_TODO,
    todo
  }
}
export function changeTodoState(index){
  return {
    type: CHANFE_TODO_STATE,
    index
  }
}
export function deleteTodo(index){
  return {
    type: DELETE_TODO,
    index
  }
}
export function setDoing(index){
  return {
    type: SET_DOING,
    index
  }
}
export function getDoing(){
  return {
    type: GET_DOING,
  }
}