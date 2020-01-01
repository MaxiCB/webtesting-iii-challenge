import { SET_OPEN, SET_CLOSED, SET_UNLOCKED, SET_LOCKED } from '../actions/actions';

const initialState = {
    unlocked: false,
    open: false
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPEN:
            return {
                ...state,
                open: action.payload
            };
        case SET_CLOSED:
            return {
                ...state,
                open: false
            };
        case SET_UNLOCKED:
            return {
                ...state,
                unlocked: true
            };
        case SET_LOCKED:
            return {
                ...state,
                unlocked: false
            }
        default:
            return state;
    }
};