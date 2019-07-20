import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title'
import InputTodo from '../../components/InputTodo'
import ButtonIcon from '../../components/ButtonIcon'


class Main extends Component {
  render() {
    return (
      <div className="todo__list">
        <InputTodo color={InputTodo.ColorEnums.PINK}/>
        <div>
          <Title title='TO-DO'>
            <label htmlFor="tab1"> + </label>
          </Title>
          <input type="checkbox" name="tab" id="tab1"/>
          <ul className="todo__list__contnet">
            <li className="todo__list__item">
              <ButtonIcon type={ButtonIcon.ButtonIconEnums.DEFAULT}/>
              <p>The first thing to do today</p>
              <ButtonIcon type={ButtonIcon.ButtonIconEnums.START}/>
            </li>
          </ul>
          <Title title='DONE'>
            <label htmlFor="tab2"> + </label>
          </Title>
          <input type="checkbox" name="tab" id="tab2"/>
          <ul className="todo__list__contnet">
            <li className="todo__list__item todo__list__item--checked">
              <ButtonIcon type={ButtonIcon.ButtonIconEnums.CHECKED}/>
              <p>The first thing to do today</p>
              <div className="todo__list__pomodoro__group">
                <div className="todo__list__pomodoro"></div>
                <div className="todo__list__pomodoro"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Main
