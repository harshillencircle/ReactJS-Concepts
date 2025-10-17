import { createSlice } from "@reduxjs/toolkit";

let nextId = 1;

const ToDoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: nextId++,
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.find(t => t.id === action.payload);
            console.log('Toggling todo:', todo);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(t => t.id !== action.payload);
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = ToDoSlice.actions;

export default ToDoSlice.reducer;