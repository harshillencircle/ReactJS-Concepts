import { configureStore } from '@reduxjs/toolkit'
import ToDoSlice from '../slice/ToDoSlice'
import ToDoReducer from '../slice/ToDoSlice'

export default configureStore({
  reducer: {
    // todos: ToDoSlice
    todos: ToDoReducer
  },
})