import  {combineReducers} from 'redux';
import LoginReducer from './reducers-login.js';
import CreateTeamReducer from './reducers-createteam.js';
import CheckTeamReducer from './reducers-teaminfo.js';

const allReducers = combineReducers({
    LoginReducer : LoginReducer,
    CreateTeamReducer : CreateTeamReducer,
    CheckTeamReducer : CheckTeamReducer
    
});

export default allReducers;