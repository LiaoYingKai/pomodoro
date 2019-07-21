import {
  SET_TIME,
  GET_TIME,
  CHANGE_TIME_STATE
} from './actionsTypes'

export function getTime(){
  return {
    type: GET_TIME,
  }
}

export function setTime(){
  return {
    type: SET_TIME,
  }
}

export function changeTimeState(){
  return {
    type: CHANGE_TIME_STATE
  }
}