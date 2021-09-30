import Task from "./Task"



const Tasks = ({task, setTask, tasks, setTasks, newTask, setNewTask}) => {
    return (
        <ul>
            <Task task={task} setTask={setTask}></Task>
            { newTask && <Task task={task} setTask={setTask}></Task>}
        </ul>
    )
}

export default Tasks