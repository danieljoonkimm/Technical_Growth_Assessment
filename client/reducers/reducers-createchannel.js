export default function (state = null, action) {
    // console.log('this be that reducerrrrr', action.payload)
    if(action.type === "CREATE_CHANNEL_BUTTON_CLICKED"){
        return action.payload;
    }else{
        return state;
    }
}