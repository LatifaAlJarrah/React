import './App.css';
import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import {React, useState} from 'react';


const App = () =>{
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
   // todo <= addTodo (function) <= onSubmit (props) <= TodoForm (Component) <= inputValue
    setTodos([todo, ...todos]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div className='container'>
      <TodoForm onSubmit = {addTodo} />
      {
        todos.map((todo) => (
          <Todo todo = {todo} key = {todo.id} onDelete = { () => handleDelete(todo.id)}/>
        ))}
    </div>
  );
}

export default App;
