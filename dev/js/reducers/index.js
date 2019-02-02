import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from "./reducer-active-user";
//import AnotherusersReducer from './anotherusersReducer';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
    //anotherusers: AnotherusersReducer
});

export default allReducers;