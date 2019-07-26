import {
  RUN_TIME,
  CHANGE_TIME_STATE,
  CLEAR_TIME_ID,
} from './actionsTypes'

export function runTime(){
  return {
    type: RUN_TIME,
  }
}
export function clearTimeId(){
  return {
    type: CLEAR_TIME_ID,
  }
}

export function changeTimeState(state){
  return {
    type: CHANGE_TIME_STATE,
    state
  }
}