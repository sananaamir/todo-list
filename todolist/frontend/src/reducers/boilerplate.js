import { assign } from 'lodash'

const initialState = {
    counter: 0
}

const boilerplateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            let counter = state.counter
            counter += 1

            return assign({}, state, {
                counter: counter
            })
        default:
            return state
    }
}

export default boilerplateReducer