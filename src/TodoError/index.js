import React from 'react';
import './TodoError.css';

function TodoError({error}) {
    return (
        <div className='container'>
            <span className='error_text'>Desesperate, ocurrio el siguiente {String(error)}</span>
        </div>
)};

export {TodoError};