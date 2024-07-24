import React from 'react'

function ToDolist({ handleDelete, handleEdit, toDos }) {
    return (
        <ul className="toDoElement">
            {toDos.map((t) => (
                <li className="singleElement" key={t.id}>
                    <span className="singleContent">{t.toDo}</span>
                    <button onClick={() => handleEdit(t.id)}>Edit</button>
                    <button onClick={() => handleDelete(t.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDolist
