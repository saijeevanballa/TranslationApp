import { REMOVE_TOKEN, SET_TOKEN } from "../types/auth"

const initialState = {
    token: ""
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            return { ...state, token: action.value };
        }
        case REMOVE_TOKEN: {
            return initialState
        }
        default:
            return state;
    }
}