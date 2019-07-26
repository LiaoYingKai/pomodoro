import React, {Component, } from 'react'
import { connect } from 'react-redux'
import todo from '../Todo';
class Logo extends Component{
  constructor(){
    super()
    this._handleTimeFormat = this._handleTimeFormat.bind(this)
    this._rednerNowDoing = this._rednerNowDoing.bind(this)
  }
  _handleTimeFormat(){
    const { time } = this.props
    const HH = Math.floor(time/60) > 10 ? Math.floor(time/60) : `0${Math.floor(time/60)}`
    const MM = time%60 > 10 ? time%60 : `0${time%60}`
    return `${HH}:${MM}`
  }
  _rednerNowDoing(){
    const { nowDoing,todos, doingId } = this.props
    if(todos.length != 0){
      if(!todos[doingId].isDone) {
        return <React.Fragment> {nowDoing.text} </React.Fragment>
      }
    }
    return (
      <React.Fragment>  </React.Fragment>
    )
  }
  render(){
    const { _handleTimeFormat,_rednerNowDoing } = this
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
          <div className="logo__todo">
            {_rednerNowDoing()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nowDoing: state.todos[state.doing],
    time: state.time.time,
    doingId: state.doing,
    todos: state.todos
  }
}
export default connect(mapStateToProps,{})(Logo)