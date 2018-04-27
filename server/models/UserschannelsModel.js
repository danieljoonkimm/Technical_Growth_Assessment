import connection from '../db';

const UserschannelsModel = (payload, callback) => {
    console.log('users channels model payload', payload)
    connection.query(`INSERT INTO UsersChannels (userId, channelsId) 
                    VALUES(${payload.user_id, payload.channel_id})`, (err, result) => {
                        console.log('this the results from userschannels', result)
                        if(err) {
                            throw err;
                        }
                        callback(err, {result})
    })
};

export default UserschannelsModel;