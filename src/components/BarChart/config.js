module.exports = {
  color: ['#3398DB'],
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  xAxis : [
    {
      type : 'category',
      data : ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        }
      },
      axisTick: {
        alignWithLabel: true
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize:'16'
        },
      },
    }
  ],
  yAxis : [
    {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#fff',
        }
      },
      type : 'value',
      splitLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize:'16'
        },
      },
    }
  ],
  series : [
    {
      name:'直接访问',
      type:'bar',
      barWidth: '60%',
      data:[16, 12, 16, 8, 12, 4, {value:25,itemStyle:{color:'#FF4384'}}]
    }
  ],
  textStyle:[
    {
      color:'#fff',
      fontSize: '14px'
    }
  ],
}
