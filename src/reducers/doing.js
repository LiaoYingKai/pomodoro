/* eslint-disable indent */
import {
  SET_DOING,
} from '../actions/actionsTypes'

export default function setDoing(state='0', action){
  switch(action.type){
    case SET_DOING: {
      return action.id
    }
    default: {
      return state
    }
  }
}