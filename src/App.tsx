import { useState } from 'react';

import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';


// const todos = [
//   new Todo('Learn React'),
//   new Todo('Learn TypeScript')
// ]
  

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {

    const newTodo = new Todo(todoText);

    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    })
  }

  const removeTodoHandler = (todoId: string) => {
    
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
  

  return (
    <div style={{ margin: '100px'}}>
      <NewTodo onAddTodo={addToDoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
