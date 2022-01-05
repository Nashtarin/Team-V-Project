import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'

import userReducer from './reducers/userReducer';


import { composeWithDevTools } from 'redux-devtools-extension';



const combineReducer = combineReducers({
    user: userReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     combineReducer,
//     composeEnhancers(applyMiddleware(thunk))
// );

const store = createStore(combineReducer, composedEnhancer);

// const store = createStore(combineReducer, composeWithDevTools(
//     applyMiddleware(...middleware)

//     // other store enhancers if any
// ));


export default store;


