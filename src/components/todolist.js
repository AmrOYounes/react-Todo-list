import React, { Component } from 'react';
import TodoItem from './todoitem';

export default class todolist extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {
                    items.map(item => {
                        return (<TodoItem title={item.title} key={item.id} clearList={clearList} handleDelete={handleDelete} handleEdit={handleEdit} id={item.id}></TodoItem>
                        )
                    })
                }
                <button className="btn btn-danger btn-block text-uppercase" onClick={clearList}>Clrear List</button>
            </ul>
        );
    }
}
