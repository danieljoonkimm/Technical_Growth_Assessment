export const ClickChannel = (channel) => {
    console.log('this is action create channel', channel);
    return {
        type: 'CHANNEL_BUTTON_CLICKED',
        payload: channel
    };
};