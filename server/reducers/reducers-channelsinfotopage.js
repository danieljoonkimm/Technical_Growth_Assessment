export default function (state = null, action) {
    // console.log('this be that reducerrrrr', action.payload)
    if(action.type === "HANDLEINFO_BUTTON_CLICKED"){
        return action.payload;
    }else{
        return state;
    }
}