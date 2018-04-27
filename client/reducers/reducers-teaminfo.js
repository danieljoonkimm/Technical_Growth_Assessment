export default function (state = null, action) {
    if(action.type === "CHECKTEAM_BUTTON_CLICKED"){
        return action.payload;
    }else{
        return state;
    }
}