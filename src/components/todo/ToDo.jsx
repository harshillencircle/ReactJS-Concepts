import React, { useState } from 'react'
import { addTodo, toggleTodo, deleteTodo } from '../../redux/slice/ToDoSlice'
import { useDispatch, useSelector } from 'react-redux';

const ToDo = () => {
    const [input, setInput] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input !== '') {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-2">
            <div className='text-lg text-gray-500 font-bold mt-8'>Redux To-do</div>
            <div className="flex justify-center items-center  gap-2">
                <div className="border border-gray-600 rounded-sm ">
                    <input className="px-4 py-1" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Task" />
                </div>
                <div className="text-[10px] text-white bg-amber-700 rounded-sm uppercase">
                    <button className="px-4 py-2 cursor-pointer" onClick={handleAdd}>Add Todo</button>
                </div>
            </div>


            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginTop: '10px' }}>
                        <span onClick={() => dispatch(toggleTodo(todo.id))} className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`} >
                            {todo.text}
                        </span>
                        <button className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase" onClick={() => dispatch(deleteTodo(todo.id))} >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo