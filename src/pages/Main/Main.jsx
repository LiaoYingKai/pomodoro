import React, {Component} from 'react'
import PropTypes from 'prop-types'
import AnalyticsIcon from '../../components/Icon/AnalyticsIcon.js'
import RingtonesIcon from '../../components/Icon/RingtonesIcon.js'
import TodoIcon from '../../components/Icon/TodoIcon.js'
import TimePicker from '../../components/TimePicker'
import ButtonIcon from '../../components/ButtonIcon'
import InputTodo from '../../components/InputTodo'
class Main extends Component {
  render() {
    const { isOpen } = this.props
    return (
      <React.Fragment>
        <div className={`home__page ${isOpen?'home__page-open': ''}`}>
          <div className={`home__page__content ${isOpen?'home__page-open': ''}`}>
            <div className="home__page__content__container">
              <InputTodo color={InputTodo.ColorEnums.PINK}/>
              <div className="home__page__content__todo">
                <div className="home__page__content__todo__title">
                  <div className="home__page__content__todo__title__icon"></div>
                  <div>
                    <div className="home__page__content__todo__title__todo">
												the First thing to do today
                    </div>
                    <div className="home__page__content__todo__title__count_group">
                      <div className="home__page__content__todo__title__count done"></div>
                      <div className="home__page__content__todo__title__count next"></div>
                      <div className="home__page__content__todo__title__count now"></div>
                    </div>
                  </div>
                </div>
                <div className="home__page__content__todo__countdown"> 25:00 </div>
              </div>
              <div className="home__page__content__todos">
                <div className="home__page__content__todos__container">
                  <div className="home__page__content__todos__todo">
                    <ButtonIcon/>
                    <div className="home__page__content__todos__todo__content">the second thing to do today</div>
                    <ButtonIcon type={ButtonIcon.ButtonIconEnums.START}/>
                  </div>
                  <div className="home__page__content__todos__todo">
                    <ButtonIcon/>
                    <div className="home__page__content__todos__todo__content">the second thing to do today</div>
                    <ButtonIcon type={ButtonIcon.ButtonIconEnums.START}/>
                  </div><div className="home__page__content__todos__todo">
                    <ButtonIcon/>
                    <div className="home__page__content__todos__todo__content">the second thing to do today</div>
                    <ButtonIcon type={ButtonIcon.ButtonIconEnums.START}/>
                  </div>
                </div>
                <p> more </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`home__page__time__clock ${isOpen?'home__page-open': ''}`}>
          <TimePicker size={TimePicker.SizeEnums.LARGE} type={TimePicker.TypeEnums.STOP} color={TimePicker.ColorEnums.PINK}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Main
