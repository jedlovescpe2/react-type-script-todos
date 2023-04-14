import { useState } from 'react';

import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import TodosContextProvider from './components/store/todos-context';


// const todos = [
//   new Todo('Learn React'),
//   new Todo('Learn TypeScript')
// ]
  

function App() {

  return (

      <TodosContextProvider>
          <NewTodo/>
          <Todos/>
      </TodosContextProvider>

  );
}

export default App;
