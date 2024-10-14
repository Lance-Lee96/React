import logo from './logo.svg';
import './App.css';
import { addTodo,removeTodo } from './Todo/actions';
import { useDispatch, useSelector } from 'react-redux';
import React,{useState} from 'react';

function App() {
  const [input, setInput] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleAddTodo= () => {
    if(input.trim()){
      dispatch(addTodo(Date.now(), input))
      setInput('')
    }
  }
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }
  return (
    <div className="App">
   <h2>
      Todo List
    </h2>
    <input
      type='text' value={input} onChange={(e) => setInput(e.target.value)}
      placeholder='Add a new todo'
    />
    <button onClick={handleAddTodo}>Add Todo</button>
    <ul>
      {todos.map(todo =>(
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
