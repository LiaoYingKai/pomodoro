import React, { Component, } from 'react'
import PropTypes from 'prop-types'

const ButtonIconEnums={
  DEFAULT: 'default',
  START: 'start',
  CHOOSED: 'choosed',
  CHECKED: 'checked'
}

const propTypes = {
  type: PropTypes.oneOf(Object.values(ButtonIconEnums).concat(''))
}
const defaultProps = {
  type: ButtonIconEnums.DEFAULT,
}

class ButtonIcon extends Component{

  _renderButton(){
    const { type } = this.props

    switch(type){
    case ButtonIconEnums.DEFAULT:
      return(
        <div className="button__icon">
          <div></div>
        </div>
      )
    case ButtonIconEnums.START:
      return(
        <div className="button__icon">
          <div className="button__icon--play"></div>
        </div>
      )
    case ButtonIconEnums.CHOOSED:
      return(
        <div className="button__icon button__icon--pink">
          <div className="button__icon--choosed"></div>
        </div>
      )
    case ButtonIconEnums.CHECKED:
      return(
        <div className="button__icon">
          <div className="button__icon--checked"></div>
        </div>
      )
    default:
    }
  }
  render(){
    return (
      <React.Fragment>
        {
          this._renderButton()
        }
      </React.Fragment>
    )
  }
}
ButtonIcon.ButtonIconEnums = ButtonIconEnums
ButtonIcon.propTypes = propTypes
ButtonIcon.defaultProps = defaultProps

export default ButtonIcon