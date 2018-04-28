import connection from '../db';

const ConfirmuserModel = (reqbody, callback) => {
     console.log('this is the confirm user modellll', reqbody)
    connection.query(`SELECT * FROM users WHERE username = "${reqbody.username}"`, (err, result, field) => {
        console.log('this be the result from confirm userrrrrrr',result[0]);
        if(err){
            throw err;
        }
        else {
            if(result.length) {
                callback(err, {result, confirmed : true})
            }
            else {
                callback(err, {confirmed : false})
            }
        }
    })
}

export default ConfirmuserModel;