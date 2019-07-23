import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from '../ButtonIcon'

const ColorEnums = {
  WHITE: 'white',
  DEEP_BLUE: 'deep__blue',
}

const propTypes = {
  todo: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ColorEnums).concat('')),
  onChangeTodo: PropTypes.func,
  onCheckTodo: PropTypes.func
}
const defaultProps = {
  todo: '',
  color: ColorEnums.WHITE,
  onChangeTodo: () => {},
  onCheckTodo: () => {}

}

function Todo({ todo, color, onChangeTodo, onCheckTodo }){
  return(
    <div className={`todo__item todo__item__${color}`} >
      <ButtonIcon type={ButtonIcon.ButtonIconEnums.DEFAULT} onClick={onCheckTodo}/>
      <p onClick={onCheckTodo}>{todo}</p>
      <ButtonIcon type={ButtonIcon.ButtonIconEnums.START} onClick={onChangeTodo}/>
    </div>
  )
}
Todo.propTypes = propTypes
Todo.defaultProps = defaultProps
Todo.ColorEnums = ColorEnums
export default Todo