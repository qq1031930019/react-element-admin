import { combineReducers } from 'redux';
import userInfo from './reducers/userInfo';
import counter from './reducers/counter';
import getCrumb from './reducers/crumb'

export default combineReducers({
    counter,
    userInfo,
    getCrumb,
});