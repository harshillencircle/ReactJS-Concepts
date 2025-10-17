import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from '../slices/todoslice/ToDoSlice'
import ProductReducer from '../slices/productslice/ProductSlice'

export default configureStore({
  reducer: {
    todos: ToDoReducer,
    products: ProductReducer
  },
})