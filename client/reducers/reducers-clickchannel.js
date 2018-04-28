export default function (state = null, action) {
    console.log('123', action.payload)
    if(action.type === "CHANNEL_BUTTON_CLICKED"){
        console.log('success');
        return action.payload;
    }else{
        return state;
    }
}