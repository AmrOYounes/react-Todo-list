import React, { Component } from 'react'

export default class todoitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.title,
            isEditing: false
        };
        this.eddit = this.eddit.bind(this);
        this.handlme = this.handlme.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    handlme(evt) {
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
    eddit() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    render() {
        const { title, handleDelete, handleEdit, id } = this.props;
        let result;
        if (this.state.isEditing == false) {
            result = (
                <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
                    <h6>{title}</h6>
                    <div className="todo-icon">
                        <span onClick={this.eddit} className="mx-2 text-success"> <i className="fas fa-pen"></i></span>
                        <span onClick={handleDelete} className="mx-2 text-danger"><i className="fas fa-trash"></i></span>

                    </div>

                </li>
            );
        }
        else {

            result = (
                <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
                    <input type="text" value={this.state.task} onChange={this.handlme} />
                    <div className="todo-icon">
                        <span onClick={this.updateTodo} className="mx-2 text-success"><i className="fas fa-save"></i></span>

                    </div>

                </li>
            );
        }
        return result;

    }
}
