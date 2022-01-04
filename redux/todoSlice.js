import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {id: nanoid(), title: "Do homework", completed: false},
            {id: nanoid(), title: "Go to the gym", completed: false},
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            };
            state.todos.push(todo)
        },
        toggleComplete: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            state.todos[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            console.log(action.payload.id);
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
    }
});

export const {addTodo, toggleComplete, deleteTodo, startGoogleLogin} = todoSlice.actions;

export default todoSlice.reducer;

