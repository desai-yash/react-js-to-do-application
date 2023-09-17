import React from "react";
import './task-list.css'
import Task from '../task/task';

class TaskList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: [], // Initialize an empty array to hold the tasks from the API
        };
    }

    // componentDidMount() {
    //     this.refreshTaskList(); // Fetch the initial list of tasks
    // }

    // // Function to fetch and update the task list
    // refreshTaskList = async () => {
    //         const result = await fetch('http://localhost:5001/task/list').then((response) => response.json());
    //         this.setState({ tasks: result.result });
    // };

    async componentDidMount() {
        await this.getTaskList()
            .then((result) => {
                this.setState({tasks: result.result})
            })
            .catch((error) => {
                console.error('Error fetching tasks:', error);
            });
    }

    getTaskList = async () => {
        const result = await fetch('http://localhost:5001/task/list').then(response => response.json());
        return result;
    }

    render() {
        return (
            <div className="task-list-container">
                <div className="task-list">
                    {
                        this.state.tasks.map(task => <Task 
                            key= {task.key} 
                            text = {task.name} 
                            id = {task.id} 
                            // removeTask={this.props.removeTask}
                        />)
                    }
                </div>
            </div>
        )
    }
}

export default TaskList;