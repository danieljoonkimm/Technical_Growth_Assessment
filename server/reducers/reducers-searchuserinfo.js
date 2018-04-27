export default function (state = null, action) {
    if(action.type === "SEARCHUSER_BUTTON_CLICKED"){
        return action.payload;
    }else{
        return state;
    }
};