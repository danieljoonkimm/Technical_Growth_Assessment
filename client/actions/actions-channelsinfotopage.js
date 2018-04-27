export const HandleInfoToPage = (data) => {
    console.log('this is action create channel', data);
    return {
        type: 'CHNL_BUTTON_CLICKED',
        payload: data
    };
};