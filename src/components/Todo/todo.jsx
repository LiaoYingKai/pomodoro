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
  onClick: PropTypes.func,
}
const defaultProps = {
  todo: '',
  color: ColorEnums.WHITE,
  onClick: () => {}
}

function Todo({ todo, color, onClick }){
  return(
    <div className={`todo__item todo__item__${color}`} onClick={onClick}>
      <ButtonIcon type={ButtonIcon.ButtonIconEnums.DEFAULT}/>
      <p>{todo}</p>
      <ButtonIcon type={ButtonIcon.ButtonIconEnums.START}/>
    </div>
  )
}
Todo.propTypes = propTypes
Todo.defaultProps = defaultProps
Todo.ColorEnums = ColorEnums
export default Todo