import React from 'react'
import './style.scss'
const PlayIcon = ({color,type})=>(
  <div className={`play-icon ${color}`}>
    <div className={type}></div>
  </div>
)
export default PlayIcon