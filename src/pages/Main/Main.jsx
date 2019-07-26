/* eslint-disable indent */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AnalyticsIcon from '../../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../../components/Icon/RingtonesIcon.js'
import TodoIcon from '../../components/Icon/TodoIcon.js'
import TimePicker from '../../components/TimePicker'
import ButtonIcon from '../../components/ButtonIcon'
import InputTodo from '../../components/InputTodo'
import Todo from '../../components/Todo'
import { connect } from 'react-redux'
import { changeTodoState, deleteTodo, updatePomodoro } from '../../actions/todoActions'
import { setDoing } from '../../actions/doingActions'
import { runTime, clearTimeId, changeTimeState  } from '../../actions/timeActions'

const TypeEnums = {
  WORK_START: 'work_start',
  WORK_RUNNING: 'work_running',
  BREAK_START: 'break_start',
  BREAK_RUNNING: 'break_running',
}
const propTypes={
  type: PropTypes.oneOf(Object.values(TypeEnums).concat('')),
	color: PropTypes.string,
	onChangePage: PropTypes.func,
}
const defaultProps= {
  type: TypeEnums.BREAK_START,
	color: 'pink',
	onChangePage: () => {},
}

class Main extends Component {
  constructor(){
    super()
    this._renderTimePicker = this._renderTimePicker.bind(this)
		this._handleTimeFormat = this._handleTimeFormat.bind(this)
    this._renderTodos = this._renderTodos.bind(this)
    this._renderAmountGroup = this._renderAmountGroup.bind(this)
    this._rednerNowDoing = this._rednerNowDoing.bind(this)
		this.state = {
			color: 'blue',
		}
  }
	_handleTimeFormat(){
		const { time } = this.props
		const HH = Math.floor(time/60) > 10 ? Math.floor(time/60) : `0${Math.floor(time/60)}`
		const MM = time%60 > 10 ? time%60 : `0${time%60}`
		return `${HH}:${MM}`
	}
  _renderTimePicker(){
    const { type } = this.props
    switch(type){
      case TypeEnums.WORK_START: {
        return <TimePicker type={TimePicker.TypeEnums.START} color={TimePicker.ColorEnums.DEEP_PINK}/>
      }
      case TypeEnums.WORK_RUNNING: {
        return <TimePicker type={TimePicker.TypeEnums.RUNNING} color={TimePicker.ColorEnums.DEEP_PINK}/>
      }
      case TypeEnums.BREAK_START: {
        return <TimePicker type={TimePicker.TypeEnums.START} color={TimePicker.ColorEnums.DEEP_AQUA_BLUE}/>
      }
      case TypeEnums.BREAK_RUNNING: {
        return <TimePicker type={TimePicker.TypeEnums.RUNNING} color={TimePicker.ColorEnums.DEEP_AQUA_BLUE}/>
      }
    }
  }
	_renderTodos(){
		const { todos, doingId, changeTodoState, setDoing } = this.props
		return(
		<div className="home__page__todo__list__container">
			{
				todos
					.filter(item => !item.isDone && item.id != doingId)
					.filter((item,index) => index < 3)
					.map(item=> <Todo
						key={'todo__'+ item.id}
						todo={item.text}
						color={Todo.ColorEnums.DEEP_BLUE}
						onCheckTodo={()=>{changeTodoState(item.id)} }
            onChangeTodo={()=>{setDoing(item.id)}}
					/>)
			}
		</div>
		)
  }
  _renderAmountGroup(){
    const { todos,doingId } = this.props
    console.log(todos,doingId)
    const number = todos[doingId] ? todos[doingId].pomodoroNumber : 0
    const done = 'home__page__doing__amount--done'
    const dones = []
    for( let i = 0; i < number ;i++){
      dones.push(done)
    }
    return (
      dones.map((item,index)=> <div key={`${item}__${index}`} className={item}></div>)
    )
  }
  _rednerNowDoing(){
    const { nowDoing,todos, doingId } = this.props
    if(todos.length != 0){
      if(!todos[doingId].isDone) {
        return <React.Fragment> {nowDoing.text} </React.Fragment>
      }
    }
    return (
      <React.Fragment>  </React.Fragment>
    )
  }
  render() {
    const { isOpen, nowDoing, deleteTodo, changeTodoState, setDoing, color, doingId, todos} = this.props
    const { _renderTimePicker, _handleTimeFormat, _renderTodos, _renderAmountGroup, _rednerNowDoing } = this

    return (
      <React.Fragment>
        <div className={`home__page ${isOpen?'home__page-open': ''} home__page__background__${color}`}>
          <div className={`home__page__content ${isOpen?'home__page-open': ''}`}>
            {color === 'pink'?
							<InputTodo color={InputTodo.ColorEnums.PINK}/> :
							<InputTodo color={InputTodo.ColorEnums.BLUE}/>
						}
            <div className="home__page__doing">
              <div className="home__page__doing__bar">
                <div className="home__page__doing__icon" onClick={()=>{changeTodoState(doingId)}} ></div>
                <div>
                  <div className="home__page__doing__title">
                    { _rednerNowDoing()}
                  </div>
                  <div className="home__page__doing__amount__group">
                    {_renderAmountGroup()}
                    <div className="home__page__doing__amount--next"></div>
                  </div>
                </div>
              </div>
              <div className={`home__page__doing__countdown home__page__doing__countdown__color__${color}`}>
								{_handleTimeFormat()}
							</div>
            </div>
            <div className="home__page__todo__list">
							{_renderTodos()}
              <div className={`home__page__todo__list__more home__page__todo__list__more__color__${color}`}> more </div>
            </div>
          </div>
          <div className={`home__page__time__clock ${isOpen?'home__page-open': ''}`}>
            {_renderTimePicker()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
Main.propTypes = propTypes
Main.defaultProps = defaultProps
Main.TypeEnums = TypeEnums

function mapStateToProps(state){
  console.log(state)
  return {
    todos: state.todos,
		doingId: state.doing,
    nowDoing: state.todos[state.doing],
		time: state.time.time
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) =>{
      dispatch(deleteTodo(id))
    },
    changeTodoState: (id) => {
      dispatch(changeTodoState(id))
    },
		updatePomodoro: (id) => {
			dispatch(updatePomodoro(id))
		},
    setDoing: (id) => {
      dispatch(setDoing(id))
    },
		runTime:() => {
			dispatch(runTime)
		},
		clearTimeId:() => {
			dispatch(clearTimeId)
		},
		changeTimeState:(state) => {
			dispatch(changeTimeState(state))
		}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
