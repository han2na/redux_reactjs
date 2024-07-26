import filtersSlices from "../components/Filters/FiltersSlice";
import todoSlices from "../components/TodoList/TodoSlice";
import { combineReducers } from "redux"

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersSlices(state.filters, action),
//         todoList: todoSlices(state.todoList, action)
//     }
// }

const rootReducer = combineReducers(
    {
        filters: filtersSlices,
        todoList: todoSlices
    }
);

export default rootReducer;