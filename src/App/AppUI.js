import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoList } from '../TodoList';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoLoading } from '../TodoLoading';

function AppUI() {

    const {error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,  
    } = React.useContext(TodoContext);

    return (
<React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
      {!!error && <TodoError error={error}/>}
      {(!loading && !searchedTodos.length) && <TodoEmpty />}

      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed} 
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      </ TodoList>

      {loading && <TodoLoading />}

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export {AppUI};