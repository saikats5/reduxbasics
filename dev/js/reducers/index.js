import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
//import AnotherusersReducer from './anotherusersReducer';

const allReducers = combineReducers({
    users: UserReducer
    //anotherusers: AnotherusersReducer
});