import connection from '../db';

const InviteuserModel = (user, callback) => {
    console.log('this be the invite user model', user)
    connection.query(`SELECT * from users where username="${user}"`, (err, result) => {
        console.log('this is the result from inviteuser model',result);
        if(err) {
            throw err;
        }
        else {
            if(result.length) {
                callback(err, {result : result[0], confirmed : true})
            }
            else {
                callback(err, {confirmed : false})
            }
        }
    })

};

export default InviteuserModel;