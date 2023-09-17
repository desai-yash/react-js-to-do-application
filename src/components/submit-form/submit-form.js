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

    async addItem(e) {
        if(this._inputElement.value !== "") {
            const newItem = {
                text: this._inputElement.value,
                id: this.state.taskCount,
                key: Date.now()
            }
            this.addToDB(newItem)
            // this.props.refreshTaskList();
            this.props.addTask(newItem);
            this.state.taskCount++;
            this._inputElement.value = "";
        }
        e.preventDefault();
    }

    addToDB = async (data) => {
        const response = await fetch('http://localhost:5001/task/',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                window.location.reload()
            }
        );
    }
}

export default SubmitForm;