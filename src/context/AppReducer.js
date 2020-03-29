export default (state, action) => {
    switch(action.type) {
        case 'ADD_TODO_LIST':
            return {
                ...state,
                todoList: [action.payload, ...state.todoList]
            }
        case 'DELETE_TODO_LIST':
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload)
            }
        case 'COMPLETE_TODO_LIST':
            let filteredTodoList = state.todoList.filter((item) => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted;
                }
             
                return item;
             });
            return {
                ...state,
                todoList: filteredTodoList
            }
        default:
            return state
    }
}