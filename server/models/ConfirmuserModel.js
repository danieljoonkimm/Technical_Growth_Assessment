import connection from '../db';

const ConfirmuserModel = function (reqbody, callback) {
    console.log('this is the confirm user modellll', reqbody)
    connection.query(`SELECT * FROM users WHERE username = "${reqbody.username}"`, function(err, result, field){
        console.log('this be the result from confirm userrrrrrr',result);
        if(err){
            throw err;
        }
        else {
            if(result.length) {
                callback(err, {confirmed : true})
            }
            else {
                callback(err, {confirmed: false})
            }
        }
    })
}

export default ConfirmuserModel;