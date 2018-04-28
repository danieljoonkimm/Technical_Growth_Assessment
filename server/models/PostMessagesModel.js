import connection from '../db';

const PostMessagesModel = (payload, callback) => {
    console.log('this is the payload for the postmessages model', payload)
    connection.query(`INSERT INTO messages (messages, userId, channelId) VALUES ("${payload.messagetext}", "${payload.userId}", ${payload.channelId})`,
    (err, result) => {
        console.log('this that result from post message model', payload)
        if(err) {
            throw err;
        }
        callback(err, result)
    })
};

export default PostMessagesModel;