import {
  ADD_TODO,
  CHANGE_TODO_STATE,
  DELETE_TODO,
  UPDATE_POMODORO
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
export function updatePomodoro(id){
  return {
    type: UPDATE_POMODORO,
    id
  }
}