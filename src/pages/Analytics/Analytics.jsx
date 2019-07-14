import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title'
import BarChart from '../../components/BarChart'
class Main extends Component {
  render() {
    return (
      <div className="analytics__container">
        <Title title="focus Time"></Title>
        <div className="analytics__focus">
          <div className="analytics__focus__container">
            <div className="analytics__focus__title">
							today
            </div>
            <div className="analytics__focus__content">
							20
              <span>/tomato</span>
            </div>
          </div>
          <div className="analytics__focus__container">
            <div className="analytics__focus__title">
							week
            </div>
            <div className="analytics__focus__content">
						108
              <span>/tomato</span></div>
          </div>
        </div>
        <Title title="chart">
          <div className="analytics__chart__date">
						&lt; 2019.7.1 - 2019.7.7 &gt;
          </div>
        </Title>
        <div>
          <BarChart/>
        </div>

      </div>)
  }
}

export default Main
