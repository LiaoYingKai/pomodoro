import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions'

const ColorEnums = {
  PINK: 'pink',
  BLUE: 'blue',
}

const propTypes = {
  color: PropTypes.oneOf(Object.values(ColorEnums).concat('')),
}

const defaultProps = {
  color: ColorEnums.PINK
}
class InputTodo extends Component{
  constructor(){
    super()
    this._handleChangeValue = this._handleChangeValue.bind(this)
    this._handleAddTodo = this._handleAddTodo.bind(this)
    this.state ={
      todo:{
        text:'',
        isDone: false,
        pomodoroNumber: 0,
      }
    }
  }
  _handleChangeValue(event){
    console.log(event.target.value)
    this.setState({
      todo:{
        text: event.target.value,
        isDone: false,
        pomodoroNumber: 0,
      }
    })
  }
  _handleAddTodo(){
    const { addTodo } = this.props
    const { todo } = this.state

    addTodo(todo)
    this.setState({
      todo:{
        text: '',
        isDone: false,
        pomodoroNumber: 0,
      }
    })
  }
  render(){
    const { _handleChangeValue,_handleAddTodo } = this
    const { color } = this.props
    const { todo } = this.state
    const { text } = todo
    
    return (
      <div className={`input__todo input__todo__${color}`}>
        <input type='text' placeholder='ADD A NEW MISSINO...' onChange={_handleChangeValue} value={text}/>
        <button onClick={_handleAddTodo}> + </button>
      </div>
    )
  }
}

InputTodo.propTypes = propTypes
InputTodo.defaultProps = defaultProps
InputTodo.ColorEnums = ColorEnums


function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) =>{
      dispatch(addTodo(todo))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputTodo)