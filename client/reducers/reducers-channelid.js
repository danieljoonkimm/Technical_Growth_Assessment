export default function (state = null, action) {
    console.log('123', action.payload)
    if(action.type === "CHANNELINFO_BUTTON_CLICKED"){
        return action.payload;
    }else{
        return state;
    }
}