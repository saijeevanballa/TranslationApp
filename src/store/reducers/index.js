import { combineReducers } from "redux";
import { Api } from "./apiReducer";
import { auth } from "./auth";
import { loader } from "./loader";


const RootReducer = (history) => {
    return combineReducers({
        router: history,
        authentication: auth,
        apis: Api,
        loader: loader
    });
};

export default RootReducer