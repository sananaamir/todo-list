import axios from 'axios'

export function incrementCounter() {
    return {
        type: 'INCREMENT_COUNTER'
    }
}

export function fetchTodos(callback) {
    return (dispatch, getState) => {
        axios.get('/api/todos')
            .then(function (response) {
                // handle success
                callback(response.data)
                dispatch({
                    type: 'LOAD_TODOS',
                    todos: response.data.todos
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export function submitTodo(callback, todoText) {
    return (dispatch, getState) => {
        axios.post('/api/todos', {
            todo_text: todoText
        })
            .then(function (response) {
                // handle success
                dispatch(fetchTodos(callback))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export function completeTodo(callback, todo) {
    return (dispatch, getState) => {
        axios.patch('/api/todos/' + todo.id, {
            todo_text: todo.todo_text,
            is_completed: true
        })
            .then(function (response) {
                // handle success
                callback(response.data)
                dispatch({
                    type: 'LOAD_TODOS',
                    todos: response.data.todos
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}