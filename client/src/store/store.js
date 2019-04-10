import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

let composeEnhancers = compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middlewares.push(logger);
}

// store
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    {},
);

export default store;
