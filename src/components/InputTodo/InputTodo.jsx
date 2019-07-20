import React from 'react'
import PropTypes from 'prop-types'

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
const InputTodo = ({ onClick, color}) =>(
  <div className={`input__todo input__todo__${color}`}>
    <input type='text' placeholder='ADD A NEW MISSINO...' />
    <button onClick={onClick}> + </button>
  </div>
)

InputTodo.propTypes = propTypes
InputTodo.defaultProps = defaultProps
InputTodo.ColorEnums = ColorEnums

export default InputTodo