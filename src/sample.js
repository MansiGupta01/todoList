import { useState } from 'react';
import './App.css';

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const [editId, setEditId] = useState(null); // Initialize as null

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId !== null) { // Check if editId is not null
            const updatedToDos = toDos.map((t) =>
                t.id === editId ? { ...t, toDo: toDo } : t
            );
            setToDos(updatedToDos);
            setToDo("");
            setEditId(null); // Reset editId after update
        } else {
            if (toDo.trim() !== "") {
                setToDos([{ id: `${Date.now()}`, toDo: toDo }, ...toDos]); // Correct Date.now()
                setToDo("");
            }
        }
    };

    const handleDelete = (id) => {
        const filteredToDos = toDos.filter((t) => t.id !== id);
        setToDos(filteredToDos);
        if (editId === id) { // Reset editId if deleting currently edited item
            setEditId(null);
        }
    };

    const handleEdit = (id) => {
        const editToDo = toDos.find((t) => t.id === id);
        setToDo(editToDo.toDo);
        setEditId(id);
    };

    return (
        <div className="App">
            <div className="container">
                <h1>To Do List</h1>
                <form className="toDoForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={toDo}
                        onChange={(e) => setToDo(e.target.value)}
                        placeholder="Enter task"
                    />
                    <button className="GoBtn" type="submit">Go</button>
                </form>
                <ul className="toDoElement">
                    {toDos.map((t) => (
                        <li className="singleElement" key={t.id}>
                            <span className="singleContent">{t.toDo}</span>
                            <button onClick={() => handleEdit(t.id)}>Edit</button>
                            <button onClick={() => handleDelete(t.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
