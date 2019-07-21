import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AnalyticsIcon from '../../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../../components/Icon/RingtonesIcon.js'
import TodoIcon from '../../components/Icon/TodoIcon.js'
import TimePicker from '../../components/TimePicker'
import ButtonIcon from '../../components/ButtonIcon'
import InputTodo from '../../components/InputTodo'
import Todo from '../../components/Todo'
class Main extends Component {
  render() {
    const { isOpen } = this.props
    return (
      <React.Fragment>
        <div className={`home__page ${isOpen?'home__page-open': ''}`}>
          <div className={`home__page__content ${isOpen?'home__page-open': ''}`}>
            <InputTodo color={InputTodo.ColorEnums.PINK}/>
            <div className="home__page__doing">
              <div className="home__page__doing__bar">
                <div className="home__page__doing__icon"></div>
                <div>
                  <div className="home__page__doing__title">
												the First thing to do today
                  </div>
                  <div className="home__page__doing__amount__group">
                    <div className="home__page__doing__amount--done"></div>
                    <div className="home__page__doing__amount--next"></div>
                    <div className="home__page__doing__amount--now"></div>
                  </div>
                </div>
              </div>
              <div className="home__page__doing__countdown"> 25:00 </div>
            </div>
            <div className="home__page__todo__list">
              <div className="home__page__todo__list__container">
                <Todo todo="the second thing to do today" color={Todo.ColorEnums.DEEP_BLUE}/>
                <Todo todo="the second thing to do today" color={Todo.ColorEnums.DEEP_BLUE}/>
                <Todo todo="the second thing to do today" color={Todo.ColorEnums.DEEP_BLUE}/>
              </div>
              <div className="home__page__todo__list__more"> more </div>
            </div>
          </div>
          <div className={`home__page__time__clock ${isOpen?'home__page-open': ''}`}>
            <TimePicker type={TimePicker.TypeEnums.START} color={TimePicker.ColorEnums.DEEP_PINK}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Main
