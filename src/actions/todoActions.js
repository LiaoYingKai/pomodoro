import {
  ADD_TODO,
  CHANGE_TODO_STATE,
  DELETE_TODO,
  SET_DOING,
  GET_DOING,
} from './actionsTypes'

let todoId = 0

export function addTodo(todo){
  return {
    type: ADD_TODO,
    id: todoId++,
    todo
  }
}
export function changeTodoState(id){
  return {
    type: CHANGE_TODO_STATE,
    id
  }
}
export function deleteTodo(id){
  return {
    type: DELETE_TODO,
    id
  }
}
export function setDoing(id){
  return {
    type: SET_DOING,
    id
  }
}
export function getDoing(){
  return {
    type: GET_DOING,
  }
}