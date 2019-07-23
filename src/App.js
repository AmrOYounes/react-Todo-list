import React, { useState } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './components/todoinput';
import Todolist from './components/todolist';
import OneInputForm from './hooks/oneInputForm';

function App(props) {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(uuid());
  const [input, handleinput, setValue] = OneInputForm('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: input
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setId(uuid());
    setValue('');
  };

  const clearList = () => {
    setItems([]);
    setId(uuid());
    setValue('');
  };

  const handleDelete = (id) => {
    const newListItems = items.filter(item => item.id !== id);
    setItems(newListItems);
  };

  const handleEdit = (id, value) => {
    const updateditems = items.map(item => {
      if (item.id === id) {
        return Object.assign(item, { title: value })
      }
      return item;
    })
    setItems(updateditems);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center"> todo input</h3>
          <Todoinput
            item={input}
            handleChange={handleinput}
            handleSubmit={handleSubmit}

          />
          <Todolist
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}
export default App;