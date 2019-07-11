import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Title from '../../components/Title'
import ButtonIcon from '../../components/ButtonIcon'
import './style.scss'
const music= ['none','default','alarm','alert','beep','bell','bird','bugle','difital','drop','horn','music','ring','warning','whistle']

class Ringtones extends Component {
  constructor(){
    super()
    this._renderList = this._renderList.bind(this)
    this._handleChangeMusic = this._handleChangeMusic.bind(this)
    this.state = {
      workMusic: 'default',
      breakMusic: 'alert'
    }
  }
  _handleChangeMusic(type,index){
    type === 'workMusic'?
      this.setState({workMusic:music[index]}) :
      this.setState({breakMusic:music[index]})
  }

  _renderList(type,chooseItem){
    return (
      music.map((item,index)=>(
        <div className="ringtones__item" key={`music${index}`} onClick={()=>this._handleChangeMusic(type,index)}>
          {
            item === chooseItem ?
              <ButtonIcon type={ButtonIcon.ButtonIconEnums.CHOOSED}/> :
              <ButtonIcon/>
          }
          {item}
        </div>
      ))
    )
  }
  render() {
    const { _renderList } = this
    const { workMusic, breakMusic } = this.state

    return (
      <div className="ringtones__container">
        <div className="ringtones__work">
          <Title title="WORK"></Title>
          {_renderList('workMusic',workMusic)}
        </div>
        <div className="ringtones__break">
          <Title title="BREAK"></Title>
          {_renderList('breakMusic',breakMusic)}
        </div>
      </div>)
  }
}



export default Ringtones
