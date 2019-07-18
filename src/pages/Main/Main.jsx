import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AnalyticsIcon from '../../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../../components/Icon/RingtonesIcon.js'
import TodoIcon from '../../components/Icon/TodoIcon.js'
import TimePicker from '../../components/TimePicker'
class Main extends Component {
  constructor(){
    super()
    this._handleToggle = this._handleToggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  _handleToggle(){
    this.setState({
      isOpen: true
    })
  }
  render() {
    const { isOpen } = this.state
    const { _handleToggle } = this
    return (
      <React.Fragment>
        <div className={`home__page ${isOpen?'home__page-open': ''}`}>
          <div className="home__page__content"></div>
          <div className="home__page__menu__bar">
            <div className="home__page__menu__bar--position">
              <a onClick={_handleToggle}>
                <TodoIcon/>
              </a>
              <a onClick={_handleToggle}>
                <AnalyticsIcon/>
              </a>
              <a onClick={_handleToggle}>
                <RingtonesIcon/>
              </a>
            </div>
            <div className="home__page__menu__bar--logo">
							pomodoro
            </div>
          </div>
        </div>
        <div className="home__page__time__clock">
          <TimePicker size={TimePicker.SizeEnums.LARGE} type={TimePicker.TypeEnums.STOP} color={TimePicker.ColorEnums.PINK}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Main
