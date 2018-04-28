export const ChannelId = (data) => {
    console.log('this is action create channel', data);
    return {
        type: 'CHANNELINFO_BUTTON_CLICKED',
        payload: data
    };
};