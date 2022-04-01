import { SHOW_LOADER, STOP_LOADER } from "../types/loader";

const initialState = {
    loader: false
};

export function loader(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADER: {
            return { ...state, loader: true };
        }
        case STOP_LOADER: {
            return { ...state, loader: false };
        }
        default:
            return state;
    }
}