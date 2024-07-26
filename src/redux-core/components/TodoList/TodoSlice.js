const initState = [
    { id: 1, name: "123", priority: "High", completed: true },
    { id: 2, name: "4444", priority: "High", completed: true },
    { id: 3, name: "2222", priority: "Low", completed: false },
    { id: 4, name: "33333", priority: "High", completed: true },
    { id: 5, name: "44444", priority: "Medium", completed: false },
]

const todoSlices = (state = initState, action) => {
    switch (action.type) {
        case "todoList/addTodo":
            return [...state, action.payload]
        case "todoList/updateTodo":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
}

export default todoSlices;