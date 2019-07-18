import React from 'react'
import PropTypes from 'prop-types'

const TypeEnums = {
  START: 'start',
  STOP: 'stop',
}

const SizeEnums = {
  LARGE: 'large',
  SMALL: 'small',
}

const ColorEnums = {
  PINK: 'pink',
  BLUE: 'blue',
}

const propTypes = {
  type: PropTypes.oneOf(Object.values(TypeEnums).concat('')),
  size: PropTypes.oneOf(Object.values(SizeEnums).concat('')),
  color: PropTypes.oneOf(Object.values(ColorEnums).concat('')),

}

const defaultProps = {
  type: TypeEnums.START,
  size: SizeEnums.SMALL,
  color: ColorEnums.PINK,
}

const TimePicker = ({ size, type }) =>(
  <div className={`time__picker time__picker__${size}`}>
    <div className={`time__picker__inline__circle__${size}`}>
      <div className={`time__picker__button__${type}__${size}`}>
      </div>
    </div>
  </div>
)

TimePicker.propTypes = propTypes
TimePicker.defaultProps = defaultProps
TimePicker.TypeEnums = TypeEnums
TimePicker.SizeEnums = SizeEnums
TimePicker.ColorEnums = ColorEnums


export default TimePicker