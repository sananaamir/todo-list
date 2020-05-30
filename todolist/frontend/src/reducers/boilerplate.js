import { assign } from 'lodash'

const initialState = {
    counter: 0,
    todos: []
}

const boilerplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            let counter = state.counter
            counter += 1

            return assign({}, state, {
                counter: counter
            })
        case 'LOAD_TODOS':
            return assign({}, state, {
                todos: action.todos
            })
        default:
            return state
    }
}

export default boilerplateReducer