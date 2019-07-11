import React from 'react'
import PropTypes from 'prop-types'

const TypeEunms = {
  WORK_START: 'work-start',
  WORK_RUNNING: 'work-running',
  BREAK_START: 'break-start',
  BREAK_RUNNING: 'breat-running',
  SMALL_WORK_START: 'small-work-start',
}

const propTypes = {
  type: PropTypes.oneOf(Object.values(TypeEunms).concat('')),
}

const defaultProps = {
  type: TypeEunms.SMALL_WORK_START,
}

const TimePicker = () =>(
  <div className="counting__down">
    <div className="counting__down__button">
      <div className="counting__down__start">
      </div>
    </div>
  </div>
)

TimePicker.propTypes = propTypes
TimePicker.defaultProps = defaultProps
TimePicker.TypeEunms = TypeEunms

export default TimePicker