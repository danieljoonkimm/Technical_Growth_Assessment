export const CheckTeam = (team) => {
    // console.log('this the teammm', team)
    return {
        type: 'CHECKTEAM_BUTTON_CLICKED',
        payload: team
    };
};