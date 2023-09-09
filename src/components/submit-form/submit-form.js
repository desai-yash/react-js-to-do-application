import React from "react";
import './submit-form.css';

class SubmitForm extends React.Component{
    render() {
        return (
            <div className="form">
                <form onSubmit={this.addItem}>
                    <input className="input" ref={(e) => this._inputElement = e} placeholder="Add Task" />
                    <button className="add-btn" type="submit" >Add</button>
                </form>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = { taskCount : 0 };
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if(this._inputElement.value !== "") {
            const newItem = {
                text: this._inputElement.value,
                id: this.state.taskCount,
                key: Date.now()
            }
            this.props.addTask(newItem);
            this.state.taskCount++;
            this._inputElement.value = "";
        }
        e.preventDefault();
    }
}

export default SubmitForm;