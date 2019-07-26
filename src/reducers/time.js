/* eslint-disable indent */
import {
  SET_TIME,
	CHANGE_TIME_STATE,
} from '../actions/actionsTypes'

const initState = {
	time: 333,
	state: 'STOP',
}

export default function setDoing(state=initState, action){
	console.log(state)
  switch(action.type){
    case SET_TIME: {
      return Object.assign({},state,{tiem: action.time})
    }
		case CHANGE_TIME_STATE: {
			return Object.assign({},state,{state: action.state})
		}
    default: {
      return state
    }
  }
}