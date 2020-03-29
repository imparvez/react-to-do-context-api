import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        textAlign: 'center',
        margin: '30px 0'
    },
    button: {
        marginLeft: '20px'
    }
}));

export const AddTodo = () => {
    const classes = useStyles();
    const { addTodoList } = useContext(GlobalContext);
    const [text, setText] = React.useState('');

    const onSubmit = e => {
        e.preventDefault();

        const newTodoList = {
            id: Math.floor(Math.random() * 100000000),
            title: text,
            isCompleted: false
        };

        addTodoList(newTodoList);

        setText('');
    };

    return (
        <div>
            <form className={classes.form} onSubmit={onSubmit}>
                <TextField type='text' value={text} onChange={e => setText(e.target.value)} placeholder='Add Todo' />
                <Button className={classes.button} onClick={onSubmit} variant="contained">Add</Button>
            </form>
        </div>
    )
}
