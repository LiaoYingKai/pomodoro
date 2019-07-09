import React from 'react'

const Title = ({title,children}) =>(
  <div className="title-bar">
    <p>
      {title}
    </p>
    {children}
  </div>
)
export default Title