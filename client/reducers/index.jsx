import  {combineReducers} from 'redux';
import LoginReducer from './reducers-login.js';
import CreateTeamReducer from './reducers-createteam.js';
import CheckTeamReducer from './reducers-teaminfo.js';
import CreateChannelReducer from './reducers-createchannel.js';

const allReducers = combineReducers({
    LoginReducer : LoginReducer,
    CreateTeamReducer : CreateTeamReducer,
    CheckTeamReducer : CheckTeamReducer,
    CreateChannelReducer : CreateChannelReducer
    
});

export default allReducers;