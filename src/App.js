import './App.css';

import TodoForm from './component/TodoForm';
import Todo from './component/Todo';

import {React, useState} from 'react';


const App = () => {
  const [todos, setTodos] = useState([]);

  // todo <= addTodo (function) <= onSubmit (props) <= TodoForm (Component) <= inputValue
  const addTodo = (todo) => {
    setTodos((previousTodos) => {
      return [todo, ...previousTodos];
    });
  };

  const handleDelete = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  return (
    <div className="container">
      <TodoForm onSubmit={addTodo} />
      {
      todos?.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default App;
