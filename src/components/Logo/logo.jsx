import React from 'react'
import { connect } from 'react-redux'
function Logo({nowDoing}){
  return(
    <div className="logo">
      {console.log(nowDoing)}
      <div className="logo__position">
        <div className="logo__button__backgroundColor">
          <div className="logo__button__outline">
            <div className="logo__button__play">
            </div>
          </div>
        </div>
        <div className="logo__time">25:00</div>
        <div className="logo__todo">{nowDoing ? nowDoing.text : ''}</div>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    nowDoing: state.todos[state.doing]
  }
}
export default connect(mapStateToProps,{})(Logo)