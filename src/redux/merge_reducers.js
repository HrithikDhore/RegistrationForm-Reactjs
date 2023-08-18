import {combineReducers} from 'redux';
import userReducer from './user_reducer';

const mergeReducer=combineReducers({
    usersData:userReducer
})
export default mergeReducer;