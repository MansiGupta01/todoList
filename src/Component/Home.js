import { useState } from 'react';
import './Home.css';
import ToDoform from './ToDoform';
import ToDolist from './ToDolist';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
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
    <div className="Home">        
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
      <div className='credentials'>
        <Link to='/login'>
            <Button 
                style={{background:'white',color:'black',borderRadius:'20px'}}>
                    Login
            </Button>
        </Link>
        <Link to='/signup'>
            <Button 
                style={{background:'white',color:'black',borderRadius:'20px'}}>
                    Sign Up
            </Button>
        </Link>
        </div>
    </div>
  );
}

export default Home;
