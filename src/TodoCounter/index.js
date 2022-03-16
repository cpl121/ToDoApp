import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <div className='TodoCounter'>
            <h2 >Tareas completadas <u>{completedTodos}</u></h2>
            <h2>Tareas totales <u>{totalTodos}</u></h2>
        </div>
    );
}

export { TodoCounter };