import React from 'react'
import PropTypes from 'prop-types'

const TypeEnums = {
  START: 'start',
  RUNNING: 'running',
}

const ColorEnums = {
  DEEP_PINK: 'deep__pink',
  DEEP_AQUA_BLUE: 'deep__aqua__blue',
}

const propTypes = {
  type: PropTypes.oneOf(Object.values(TypeEnums).concat('')),
  color: PropTypes.oneOf(Object.values(ColorEnums).concat('')),

}

const defaultProps = {
  type: TypeEnums.START,
  color: ColorEnums.DEEP_PINK,
}

const TimePicker = ({ type, color}) =>(
  <div className={`time__picker time__picker__outline__${color}`}>
    <div className={`time__picker__inline__${type} time__picker__inline__${type}__${color}`}>
      <div className={`time__picker__button__${type}__${color}`}>
      </div>
    </div>
  </div>
)

TimePicker.propTypes = propTypes
TimePicker.defaultProps = defaultProps
TimePicker.TypeEnums = TypeEnums
TimePicker.ColorEnums = ColorEnums


export default TimePicker