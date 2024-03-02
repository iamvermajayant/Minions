import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

let enhancer = applyMiddleware(thunk);

if (import.meta.env.MODE !== 'production') {
  enhancer = composeWithDevTools(enhancer);
}

const store = createStore(rootReducer, initialState, enhancer);

export default store;
