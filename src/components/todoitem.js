import React from 'react';
import OneInputForm from '../hooks/oneInputForm';
import UseToggle from '../hooks/Usetoggle';
function Todoitem(props) {
    const [task, handleinput] = OneInputForm(props.title);
    const [isEditing, setisEditing] = UseToggle(true);
    const updateTodo = () => {
        props.handleEdit(props.id, task);
        setisEditing();
    };

    const handleDelete = () => {
        props.handleDelete(props.id);
    };

    const { title } = props;
    return (
        <div>
            {isEditing ? <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
                <h6 >{title}</h6>
                <div className="todo-icon">
                    <span onClick={setisEditing} className="mx-2 text-success"> <i className="fas fa-pen"></i></span>
                    <span onClick={handleDelete} className="mx-2 text-danger"><i className="fas fa-trash"></i></span> </div></li>

                : <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
                    <input type="text" value={task} onChange={handleinput} />
                    <div className="todo-icon">
                        <span onClick={updateTodo} className="mx-2 text-success"><i className="fas fa-save"></i></span>
                    </div>
                </li>
            }
        </div>
    );

}
export default Todoitem;