import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../action/ActionType'


export default visibilityFilter = (state = 'All', action) => {
    switch (action.type) {
        case SHOW_ALL:
            return {
                ...state,
                text: action.text,
            }
        case SHOW_ACTIVE:
            return {
                ...state,
                text: action.text,
            }
        case SHOW_COMPLETED:
            return {
                ...state,
                text: action.text,
            }
        default:
            return {
                state
            }
    }
}