import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './components/todoinput';
import Todolist from './components/todolist';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
    });
  };

  clearList = () => {
    this.setState({
      items: [],
      id: uuid(),
      item: '',
    });
  };

  handleDelete = (id) => {
    const newListItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: newListItems
    });
  };

  handleEdit = (id, value) => {
    const updateditems = this.state.items.map(item => {
      if (item.id === id) {
        return Object.assign(item, { title: value })
      }
      return item;
    })
    this.setState({
      items: updateditems
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center"> todo input</h3>
            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <Todolist
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}

            />

          </div>
        </div>
      </div>
    );
  }
}
export default App;