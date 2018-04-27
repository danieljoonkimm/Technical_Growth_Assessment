export default function (state = null, action) {
    console.log('logggggggin');
    if(action.type === "LOGIN_BUTTON_CLICKED"){
        return action.payload;
    }else{
        return state;
    }
}   