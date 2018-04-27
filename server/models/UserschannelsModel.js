import connection from '../db';

const UserschannelsModel = (payload, callback) => {
    console.log('users channels model payload', payload)
    connection.query(`INSERT INTO UsersChannels (userId, channelsId) 
                    VALUES(${payload.user_id}, ${payload.channel_id})`, (err, result) => {
                        console.log('this the results from userschannels', result)
                        if(err) {
                            throw err;
                        }
                        callback(err, {result : result, userid : payload.user_id, channelid : payload.channel_id})
    })
};

export default UserschannelsModel;