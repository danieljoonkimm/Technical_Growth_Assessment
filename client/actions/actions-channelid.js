export const ChannelId = (data) => {
    console.log('this is action create channel', data);
    return {
        type: 'CHANNELINFO_BUTTON_CLICKED',
        payload: data
    };
};

// function incrementAsync() {
//     return dispatch => {
//       setTimeout(() => {
//         // Yay! Can invoke sync or async actions with `dispatch`
//         dispatch(increment());
//       }, 1000);
//     };
//   }