import React from 'react'
import Loadable from 'react-loadable'

export default function loadComponent(options) {
  return Loadable(Object.assign({
    loading: Loading,
  },options))
}

// 這邊定義如果 loading 比較久的時候，畫面要渲染的 component
const Loading = () =>{
  return <div>Loading.....</div>
}