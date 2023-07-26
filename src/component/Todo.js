import React from 'react'

const Todo = (props) => {
  return (
    <div className='todo'>
        <div> {props.todo.text} </div>
        <button className='button-delete' onClick={props.onDelete}>x</button>
    </div>
  )
}

export default Todo;