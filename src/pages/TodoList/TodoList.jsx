import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title'
import InputTodo from '../../components/InputTodo'
import ButtonIcon from '../../components/ButtonIcon'
import Todo from '../../components/Todo'
import Done from '../../components/Done'
import { connect } from 'react-redux'
import { changeTodoState, deleteTodo,  } from '../../actions/todoActions'
import { setDoing } from '../../actions/doingActions'

class TodoList extends Component {
  constructor(){
    super()
    this._renderTodo = this._renderTodo.bind(this)
    this._renderDoneTodo = this._renderDoneTodo.bind(this)
  }
  _renderTodo(){
    const { todos, changeTodoState, setDoing } = this.props
    return todos
      .filter(item=> !item.isDone)
      .map(item => (
        <Todo
          key={`todo__${item.id}`} 
          todo={item.text}
          onCheckTodo={()=>{changeTodoState(item.id)} }
          onChangeTodo={()=>{setDoing(item.id)}}
        />
      ))
  }
  _renderDoneTodo(){
    const { todos, deleteTodo, changeTodoState } = this.props
    return todos
      .filter(item=> item.isDone)
      .map(item => (
        <Done
          key={`done__todo__${item.id}`}
          done={item.text}
          pomodoroNumber={item.pomodoroNumber}
          onDeleteTodo={()=>{deleteTodo(item.id)}}
          onCheckTodo={()=>{changeTodoState(item.id)}}
        />
      ))
  }
  render() {
    const { _renderTodo, _renderDoneTodo } = this
    return (
      <div className="todo__list">
        <InputTodo color={InputTodo.ColorEnums.PINK}/>
        <div>
          <section>
            <input type="checkbox" name="tab" id="tab1"/>
            <Title title='TO-DO'>
              <label htmlFor="tab1"></label>
            </Title>
            <div className="todo__list__contnet">
              <Todo todo="the first thing to do today"/>
              {_renderTodo()}
            </div>
          </section>
          <section>
            <input type="checkbox" name="tab" id="tab2"/>
            <Title title='DONE'>
              <label htmlFor="tab2"></label>
            </Title>
            <div className="todo__list__contnet">
              <Done done="The first thing to do today" pomodoroNumber={5}/>
              {_renderDoneTodo()}
            </div>
          </section>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    todos: state.todos
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

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
