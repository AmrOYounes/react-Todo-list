import React, { Component } from 'react'

export default class todoitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.title,
            isEditing: true
        };
        this.toggleTodoITEM = this.toggleTodoITEM.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    handleEditInput = evt => {
        this.setState({
            task: evt.target.value
        });
    }

    updateTodo() {
        this.props.handleEdit(this.props.id, this.state.task);
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    toggleTodoITEM() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    handleDelete = () => {
        this.props.handleDelete(this.props.id);
    }

    render() {
        const { title } = this.props;
        const { isEditing } = this.state;
        return (
            isEditing ? <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span onClick={this.toggleTodoITEM} className="mx-2 text-success"> <i className="fas fa-pen"></i></span>
                    <span onClick={this.handleDelete} className="mx-2 text-danger"><i className="fas fa-trash"></i></span> </div></li>

                : <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
                    <input type="text" value={this.state.task} onChange={this.handleEditInput} />
                    <div className="todo-icon">
                        <span onClick={this.updateTodo} className="mx-2 text-success"><i className="fas fa-save"></i></span>
                    </div>
                </li>
        );
    }
}
