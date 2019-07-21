import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from '../ButtonIcon'

const propTypes = {
  done: PropTypes.string,
  pomodoroNumber: PropTypes.number
}
const defaultProps = {
  done: '',
  pomodoroNumber: 0
}

class Done extends React.Component{
  constructor(){
    super()
    this._renderPomodoroGroup = this._renderPomodoroGroup.bind(this)
  }
  
  _renderPomodoroGroup(){
    const { pomodoroNumber } = this.props
    const pomodoreGroup = []
    const name = 'done__item__pomodoro'

    for(let i = 0; i < pomodoroNumber; i++){
      pomodoreGroup.push(name)
    }

    return pomodoreGroup.map((item, index) => {
      return (
        <div key={`${item}__${index}`} className={item}></div>
      )
    })
  }

  render(){
    const { done } = this.props
    const { _renderPomodoroGroup } = this
    return(
      <li className="done__item">
        <ButtonIcon type={ButtonIcon.ButtonIconEnums.CHECKED}/>
        <p>{done}</p>
        <div className="done__item__pomodoro__group">
          {_renderPomodoroGroup()}
        </div>
      </li>
    )
  }
}
Done.propTypes = propTypes
Done.defaultProps = defaultProps
export default Done