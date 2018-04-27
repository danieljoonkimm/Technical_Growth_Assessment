export const HandleInfoToPage = (user) => {
    console.log('this is action create channel', user);
    return {
        type: 'HANDLEINFO_BUTTON_CLICKED',
        payload: user
    };
};