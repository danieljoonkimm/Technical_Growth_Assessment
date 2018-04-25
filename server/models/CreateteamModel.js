import connection from '../db';

const CreateteamModel = function (reqbody, callback) {
    console.log('this is the create team modellll', reqbody.team)
    connection.query(`INSERT INTO teams (team_name)  VALUES('${reqbody.team}')`, function(err, result, fields) {
        if(err) {
            throw err;
        }
        else {
            callback(err, reqbody.team)
        }
    })
}

export default CreateteamModel;