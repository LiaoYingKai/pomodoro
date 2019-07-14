import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import config from './config.js'

export class BarChart extends React.Component {
  constructor(props) {
    super(props)
    let id = ( '_' + Math.random()).replace('.','_')
    this.state = {
      barId : 'bar' + id
    }
  }
  initPie(id) {
    let myChart = echarts.getInstanceByDom(document.getElementById(id))
    if( myChart === undefined){
      myChart = echarts.init(document.getElementById(id))
    }
    myChart.setOption(config)
  }
  componentDidMount() {
    this.initPie(this.state.barId)
  }

  render() {
    return (
      <div>
        <div id={this.state.barId} style={{width: '100%', height: '300px'}}></div>
      </div>
    )
  }
}
export default BarChart