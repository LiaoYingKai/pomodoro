import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title'
import InputTodo from '../../components/InputTodo'
import ButtonIcon from '../../components/ButtonIcon'
import Todo from '../../components/Todo'
import Done from '../../components/Done'


class Main extends Component {
  render() {
    return (
      <div className="todo__list">
        <InputTodo color={InputTodo.ColorEnums.PINK}/>
        <div>
          <section>
            <input type="checkbox" name="tab" id="tab1"/>
            <Title title='TO-DO'>
              <label htmlFor="tab1"></label>
            </Title>
            <div className="todo__list__contnet">
              <Todo todo="the first thing to do today"/>
            </div>
          </section>
          <section>
            <input type="checkbox" name="tab" id="tab2"/>
            <Title title='DONE'>
              <label htmlFor="tab2"></label>
            </Title>
            <div className="todo__list__contnet">
              <Done done="The first thing to do today" pomodoroNumber={5}/>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Main
