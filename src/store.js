import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

const initialState = {};
export const history = createBrowserHistory();

const middleware = [
    thunk,
    routerMiddleware(history)
];

const composedEnhancers = compose(
    applyMiddleware(...middleware)
);

const store = createStore(
    combineReducers({
        router: connectRouter(history)
    }),
    initialState,
    composedEnhancers
);

export default store;
