/* eslint-disable indent */
import {
  RUN_TIME,
	CLEAR_TIME_ID,
	CHANGE_TIME_STATE,
} from '../actions/actionsTypes'

const initState = {
	time: 1500,
	state: 'STOP',
	timeId: 0
}

export default function setDoing(state=initState, action){
	console.log(state)
  switch(action.type){
    case RUN_TIME: {
			let time = action.time
			let timeId = setInterval(()=>{
				time--
				return Object.assign({},state,{tiem: time,timeId: timeId})
			},1000)
      return Object.assign({},state,{tiem: time,timeId: timeId})
    }
		case CLEAR_TIME_ID: {
			clearTimeout(state.timeId)
			return Object.assign({},state,{timeId: 0})
		}
		case CHANGE_TIME_STATE: {
			return Object.assign({},state,{state: action.state})
		}
    default: {
      return state
    }
  }
}