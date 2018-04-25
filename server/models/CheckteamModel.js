import connection from '../db';

const CheckteamModel = (team, callback) => {
    console.log('this the check teammmodell', team)
    connection.query(`SELECT * from teams WHERE team_name ="${team}"`, (err, results) => {
        console.log('this be that result from check teammmmmmm model: ', results)
        if(err) {
            throw err;
        }
        callback(err, {results : results})
    })
};

export default CheckteamModel;