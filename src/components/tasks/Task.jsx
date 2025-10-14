// Build a basic to-do app that lets you add and delete tasks using useState.
import { useState } from "react";

function Task() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleAdd = () => {
        if (task === '') return;
        setTasks([...tasks, task]);
        setTask('');
    }

    const handleDelete = (taskdelete) => {
        const deleteTask = tasks.filter((task) => task !== taskdelete);
        setTasks(deleteTask);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-2">
            <div className='text-lg text-gray-500 font-bold mt-8'>To-do Task</div>
            <div className="flex justify-center items-center  gap-2">
                <div className="border border-gray-600 rounded-sm ">
                    <input className="px-4 py-1" type="text" value={task} onChange={handleChange} placeholder="Enter Task" />
                </div>
                <div className="text-[10px] text-white bg-amber-700 rounded-sm uppercase">
                    <button className="px-4 py-2 cursor-pointer" onClick={handleAdd}>Add Task</button>
                </div>
            </div>

            <div className="mt-4">
                <ul className="space-y-1">
                    {tasks.map((task, index) => (
                        <li className="space-x-2" key={index}>{task}
                            <button className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase" onClick={() => handleDelete(task)}>Delete</button>

                            <button className="text-[12px] text-amber-600 hover:bg-amber-600 hover:text-white border-2 font-bold border-amber-600 rounded-sm cursor-pointer px-2 py-1 uppercase" onClick={() => handleDelete(task)}>Update</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Task;