import React from 'react'
import PropTypes from 'prop-types'
import ButtonIcon from '../ButtonIcon'

const propTypes = {
  done: PropTypes.string,
  pomodoroNumber: PropTypes.number,
  onCheckTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
}
const defaultProps = {
  done: '',
  pomodoroNumber: 0,
  onCheckTodo: () => {},
  onDeleteTodo: () => {},
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
    const { done, onCheckTodo, onDeleteTodo } = this.props
    const { _renderPomodoroGroup } = this
    return(
      <div className="done__item" >
        <ButtonIcon type={ButtonIcon.ButtonIconEnums.CHECKED} onClick={onDeleteTodo}/>
        <p onClick={onCheckTodo}>{done}</p>
        <div className="done__item__pomodoro__group" >
          {_renderPomodoroGroup()}
        </div>
      </div>
    )
  }
}
Done.propTypes = propTypes
Done.defaultProps = defaultProps
export default Done