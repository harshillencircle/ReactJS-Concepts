import React, { useState } from 'react'

function ToDoTask() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const AddTask = () => {
        if (input === "") {
            return;
        }
        setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
        setInput('');
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? {
            ...task, completed: !task.completed
        } : task
        ));
    };

    return (
        <div className="flex flex-col justify-center items-center mt-2">
            <div className='text-lg text-gray-500 font-bold mt-8'>ToDoTask</div>
            <div className="flex justify-center items-center  gap-2">
                <div className="border border-gray-600 rounded-sm">
                    <input className="px-4 py-1" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Add Task' />
                </div>
                <div className="text-[10px] text-white bg-amber-700 rounded-sm uppercase">
                    <button className="px-4 py-2 cursor-pointer" type="button" onClick={AddTask}>Add</button>
                </div>
            </div>

            <div>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} onClick={() => toggleComplete(task.id)} className="cursor-pointer" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoTask