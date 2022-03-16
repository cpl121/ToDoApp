import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
    return (
        <div className='container'>
            <span className='spinner'></span>
            <span className='btn__text'>cargando...</span>
        </div>
)};

export {TodoLoading};