export const TeamName = (team) => {
    // console.log('this the teammm', team)
    return {
        type: 'CREATE_TEAM_BUTTON_CLICKED',
        payload: team
    };
};