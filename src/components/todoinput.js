import React, { Component } from 'react';

export default class todoinput extends Component {
    render() {
        const { item, handleChange, handleSubmit } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book fa-lg" />
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize" placeholder="add to do item" value={item} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3 text-uppercase ">
                        Add item
                    </button>
                </form>
            </div>
        )
    }
}