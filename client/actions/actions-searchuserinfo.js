export const SearchUserInfo = (user) => {
    console.log('this is search user info', user)
    return {
        type: 'SEARCHUSER_BUTTON_CLICKED',
        payload: user
    };
};