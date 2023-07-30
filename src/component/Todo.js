import React from 'react'

const Todo = (props) => {

  const {todo, onDelete} = props;
  const {text} = todo;

  return (
    <div className="todo">
      <div> {text} </div>
      <button className="button-delete" onClick={onDelete}>
        x
      </button>
    </div>
  );
}

export default Todo;