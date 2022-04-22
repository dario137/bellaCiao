import { compose, createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import { app } from "./reduser/app";
import { size } from "./reduser/size";

export default function configureStore(preloadedState) {

const rootReducer = combineReducers({
    app, size
});

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
return store
}