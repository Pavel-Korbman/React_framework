import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTasks, loadTasksTimeout } from "../actions/actions";

function TaskList() {
    const tasksList = useSelector(state => state.loadTasks);
    const dispatch = useDispatch();

    const load = () => {
       dispatch(loadTasks());
       dispatch(loadTasksTimeout());
    };

    return (

        <div className="tasks-box">           
            <button onClick={load}>Загрузить список задач</button>
            {tasksList.map(task => (
                <div className="task" key={task.id}>
                    <p>{task.id}</p>
                    <h3>{task.title}</h3>
                    <p>{task.completed ? 'выполнена' : 'в работе'}</p>
                </div>
            ))}
        </div>

    );
}

export default TaskList;
