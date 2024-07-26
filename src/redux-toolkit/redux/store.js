import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoSlice from "../components/TodoList/todoSlice";

const storeReduxToolkit = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer
    }
})

export default storeReduxToolkit;