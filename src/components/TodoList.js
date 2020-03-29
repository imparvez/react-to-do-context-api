import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    listItem: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        '&.strike > label' : {
            textDecoration: 'line-through'
        }
    }
}));

export const TodoList = () => {
    const classes = useStyles();
    const { todoList, deleteTodoList, completeTodo } = useContext(GlobalContext);

    const handleChange = (id) => {
        completeTodo(id);
    };

    return (
        <Container maxWidth="sm">
            <List>
                {todoList.map((todo, index) => (
                    <ListItem key={todo.id} className={`${classes.listItem} ${todo.isCompleted ? 'strike' : null}`}>
                        <label>
                            <Checkbox
                                onChange={() => handleChange(todo.id)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            {todo.title}
                        </label>
                        <Button variant="contained" onClick={() => deleteTodoList(todo.id)}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}
