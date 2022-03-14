// import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';


const todos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar el curso de intro de React', completed: false},
  { text: 'Llorar al cortar cebolla', completed: false},
  { text: 'Mejorar el css de la aplicación', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </ TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
