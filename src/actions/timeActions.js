import {
  SET_TIME,
  CHANGE_TIME_STATE
} from './actionsTypes'

export function setTime(time){
  return {
    type: SET_TIME,
    time
  }
}

export function changeTimeState(state){
  return {
    type: CHANGE_TIME_STATE,
    state
  }
}