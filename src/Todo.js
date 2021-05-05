import React from 'react';
import db from './firebase';

function Todo(props) {
    return (
        <div>
            <li>{props.todo.todo}</li>
            <button onClick={e=>db.collection('todos').doc(props.todo.id).delete()}>Delete Todo</button>
        </div>
    )
}

export default Todo
