import { combineReducers } from "redux";
import { auth } from "./auth";


const RootReducer = (history) => {
    return combineReducers({
        router: history,
        authentication: auth
    });
};

export default RootReducer