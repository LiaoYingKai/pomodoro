import {
  ADD_TODO,
  CHANFE_TODO_STATE,
  DELETE_TODO,
  SET_DOING,
  GET_DOING,
} from '../actions/actionsTypes'

export default function todos(state=[], action){
  console.log(action)
  switch(action.type){
  case ADD_TODO:
    return [ ...state, action.todo ]
  default:
    return state
  }
}