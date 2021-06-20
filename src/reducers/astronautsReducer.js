const iS = {astronauts: {}, requesting: false}

export default function astronautsReducer(state = iS, action) {
    switch (action.type) {
        case 'START_ADDING_ASTRONAUTS_REQUEST':
            return {
                ...state, astronauts: {...state.astronauts}, requesting: true
            }
        case 'ADD_ASTRONAUTS':
            return {
                ...state, astronauts: action.astronauts, requesting: false
            }
        default:
            return state
    }
}