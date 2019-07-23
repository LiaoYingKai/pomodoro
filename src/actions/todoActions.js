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
export function changeTodoState(index){
  return {
    type: CHANGE_TODO_STATE,
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