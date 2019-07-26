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
import { changeTodoState, deleteTodo,  } from '../../actions/todoActions'
import { setDoing } from '../../actions/doingActions'

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
		this.state = {
			color: 'blue',
		}
  }
  _renderTimePicker(){
    const { type } = this.props
		console.log(this.props)
    console.log(type)
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
  render() {
    const { isOpen, nowDoing, deleteTodo, changeTodoState, setDoing, color } = this.props
    const { _renderTimePicker } = this

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
                <div className="home__page__doing__icon"></div>
                <div>
                  <div className="home__page__doing__title">
                    { nowDoing ? nowDoing.text : ''}
                  </div>
                  <div className="home__page__doing__amount__group">
                    <div className="home__page__doing__amount--done"></div>
                    <div className="home__page__doing__amount--next"></div>
                    <div className="home__page__doing__amount--now"></div>
                  </div>
                </div>
              </div>
              <div className={`home__page__doing__countdown home__page__doing__countdown__color__${color}`}> 25:00 </div>
            </div>
            <div className="home__page__todo__list">
              <div className="home__page__todo__list__container">
                <Todo todo="the second thing to do today" color={Todo.ColorEnums.DEEP_BLUE}/>
                <Todo todo="the second thing to do today" color={Todo.ColorEnums.DEEP_BLUE}/>
                <Todo todo="the second thing to do today" color={Todo.ColorEnums.DEEP_BLUE}/>
              </div>
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
  return {
    todos: state.todos,
    nowDoing: state.todos[state.doing]
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
    setDoing: (id) => {
      dispatch(setDoing(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
