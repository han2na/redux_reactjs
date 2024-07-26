import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "123", priority: "High", completed: true },
        { id: 2, name: "4444", priority: "High", completed: true },
        { id: 3, name: "2222", priority: "Low", completed: false },
        { id: 4, name: "33333", priority: "High", completed: true },
        { id: 5, name: "44444", priority: "Medium", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        updateTodo: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo)
                currentTodo.completed = !currentTodo.completed;
        }
    }
});
