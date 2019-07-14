import React from 'react'

const InputTodo = ({className, onClick}) =>(
  <div className='input__todo'>
    <input type='text' placeholder='ADD A NEW MISSINO...' className={className}/>
    <button onClick={onClick}> + </button>
  </div>
)

export default InputTodo