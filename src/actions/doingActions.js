import {
  SET_DOING,
  GET_DOING,
} from './actionsTypes'
  
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