import React from 'react';
import './TodoItem.css';
import {TiDeleteOutline} from 'react-icons/ti'
import {SiCheckmarx} from 'react-icons/si'

function TodoItem(props) {
    return (
        <li className="TodoItem">
        <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
        >
          <SiCheckmarx />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}    
        >
          <TiDeleteOutline />
        </span>
      </li>
    );
}

export { TodoItem };