import  {combineReducers} from 'redux';
import LoginReducer from './reducers-login.js';

const allReducers = combineReducers({
    LoginReducer : LoginReducer
});

export default allReducers;