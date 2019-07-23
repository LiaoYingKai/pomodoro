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
      todo: ''
    }
  }
  _handleChangeValue(event){
    this.setState({
      todo: event.target.value
    })
  }
  _handleAddTodo(){
    const { addTodo } = this.props
    const { todo } = this.state

    addTodo(todo)
    this.setState({
      todo: ''
    })
  }
  render(){
    const { _handleChangeValue,_handleAddTodo } = this
    const { color } = this.props
    const { todo } = this.state
    
    return (
      <div className={`input__todo input__todo__${color}`}>
        <input type='text' placeholder='ADD A NEW MISSINO...' onChange={_handleChangeValue} value={todo}/>
        <button onClick={_handleAddTodo}> + </button>
      </div>
    )
  }
}

InputTodo.propTypes = propTypes
InputTodo.defaultProps = defaultProps
InputTodo.ColorEnums = ColorEnums

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) =>{
      dispatch(addTodo(todo))
    }
  }
}

export default connect(undefined,mapDispatchToProps)(InputTodo)