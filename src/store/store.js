import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware, connectRouter } from "connected-react-router";

import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers/index";

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authentication"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer(connectRouter(history)));

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

export const persistor = persistStore(store);
export default store;









