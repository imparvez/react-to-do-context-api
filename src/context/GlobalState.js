import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state.
const initialState = {
    todoList: []
}

// Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function addTodoList(todo) {
        dispatch({
            type: 'ADD_TODO_LIST',
            payload: todo
        })
    }

    function deleteTodoList(id) {
        dispatch({
            type: 'DELETE_TODO_LIST',
            payload: id
        })
    }

    function completeTodo(id) {
        dispatch({
            type: 'COMPLETE_TODO_LIST',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                todoList: state.todoList,
                addTodoList,
                deleteTodoList,
                completeTodo
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
