import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AnalyticsIcon from '../../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../../components/Icon/RingtonesIcon.js'
import TodoIcon from '../../components/Icon/TodoIcon.js'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false
    }
  }
  render() {
    const { isOpen } = this.props
    return (
      <React.Fragment>
        <div className="home__page">
          <div className="home__page__content"></div>
          <div className="home__page__menu__bar">
            <div className="home__page__menu__bar--position">
              <a onClick={()=>{console.log('test')}}>
                <TodoIcon/>
              </a>
              <a onClick={()=>{console.log('test')}}>
                <AnalyticsIcon/>
              </a>
              <a onClick={()=>{console.log('test')}}>
                <RingtonesIcon/>
              </a>
            </div>
            <div className="home__page__menu__bar--logo">
							pomodoro
            </div>
          </div>
        </div>
        <div className="home__page__time__clock"></div>
      </React.Fragment>
    )
  }
}

export default Main
