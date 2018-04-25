import  {combineReducers} from 'redux';
import LoginReducer from './reducers-login.js';

const allReducers = combineReducers({
    login : LoginReducer
});

export default allReducers;