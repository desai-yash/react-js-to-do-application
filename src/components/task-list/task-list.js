import React from "react";
import './task-list.css'
import Task from '../task/task';

class TaskList extends React.Component{
    render() {
        return (
            <div className="task-list-container">
                <div className="task-list">
                    {
                        this.props.tasks.map(task => <Task 
                            key= {task.key} 
                            text = {task.text} 
                            id = {task.id} 
                            removeTask={this.props.removeTask}
                        />)
                    }
                </div>
            </div>
        )
    }
}

export default TaskList;