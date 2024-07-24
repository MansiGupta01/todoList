import React from 'react'

function ToDoform({ handleSubmit, toDo, editId, setToDo }) {
    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
                placeholder="Enter task"
            />
            <button type="submit">{editId !== null ? "Edit" : "Go"}</button>
        </form>
    )
}

export default ToDoform
