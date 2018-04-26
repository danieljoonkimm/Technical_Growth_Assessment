import connection from '../db';

const CreateteamModel = function (reqbody, callback) {
    console.log('this is the create team modellll', reqbody)
    connection.query(`INSERT INTO teams (team_name)  VALUES('${reqbody.team}')`, function(err, result, fields) {
        console.log('the the the result',result)
        if(err) {
            throw err;
        }
        else {
            callback(err, reqbody.team)
        }
    })
}

export default CreateteamModel;