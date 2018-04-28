import connection from '../db';

const CreateteamModel = (reqbody, callback) => {
    console.log('this is the create team modellll', reqbody)
    connection.query(`INSERT INTO teams (team_name)  VALUES('${reqbody.team}')`, (err, result, fields) => {
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