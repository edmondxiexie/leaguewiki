import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk, logger))(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    {},
);

export default store;
