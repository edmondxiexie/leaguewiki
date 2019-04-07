import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';

import authReducer from './authReducer';

export default combineReducers({
    notifications: notificationsReducer(),
    auth: authReducer,
});
