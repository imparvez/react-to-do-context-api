import React from 'react';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { GlobalProvider } from './context/GlobalState';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <GlobalProvider>
      <Typography component="h2" variant="h2" align="center">TO-DO LIST</Typography>
      <AddTodo />
      <TodoList />
    </GlobalProvider>
  );
}

export default App;
