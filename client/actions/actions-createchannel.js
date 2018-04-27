export const CreateChannel = (user) => {
    console.log('this is action create channel', user);
    return {
        type: 'CREATE_CHANNEL_BUTTON_CLICKED',
        payload: user
    };
};