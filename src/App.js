import { useState } from 'react';
import './App.css';
import ToDoform from './Component/ToDoform';
import ToDolist from './Component/ToDolist';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [editId, setEditId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId != null) {
      const updatedToDo = toDos.map((t) =>
        t.id === editId
          ? (t = { id: t.id, toDo })
          : { id: t.id, toDo: t.toDo }
      );
      setToDos(updatedToDo);
      setToDo("");
      setEditId(null);
      return;
    }
    else {
      if (toDo !== "") {
        setToDos([{ id: `${toDo}-${Date.now()}`, toDo: toDo }, ...toDos]);
        setToDo("");
      }
    }
  };
  const handleDelete = (id) => {
    const deleteToDo = toDos.filter((to) => to.id !== id);
    setToDos([...deleteToDo]);
    if (editId === id) {
      setEditId(null);
      setToDo("");
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
        <ToDoform
          handleSubmit={handleSubmit}
          toDo={toDo}
          editId={editId}
          setToDo={setToDo}
        />
        <ToDolist
          toDos={toDos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
