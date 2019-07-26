import React, {Component, } from 'react'
import { connect } from 'react-redux'
class Logo extends Component{
  constructor(){
    super()
    this._handleTimeFormat = this._handleTimeFormat.bind(this)
  }
  _handleTimeFormat(){
    const { time } = this.props
    const HH = Math.floor(time/60) > 10 ? Math.floor(time/60) : `0${Math.floor(time/60)}`
    const MM = time%60 > 10 ? time%60 : `0${time%60}`
    return `${HH}:${MM}`
  }
  render(){
    const { nowDoing } = this.props
    const { _handleTimeFormat } = this
    return(
      <div className="logo">
        <div className="logo__position">
          <div className="logo__button__backgroundColor">
            <div className="logo__button__outline">
              <div className="logo__button__play">
              </div>
            </div>
          </div>
          <div className="logo__time">
            {_handleTimeFormat()}
          </div>
          <div className="logo__todo">{nowDoing ? nowDoing.text : ''}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nowDoing: state.todos[state.doing],
    time: state.time.time
  }
}
export default connect(mapStateToProps,{})(Logo)