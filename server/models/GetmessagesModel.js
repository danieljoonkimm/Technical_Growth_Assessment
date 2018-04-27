import connection from '../db';

const GetmessagesModel = (payload, callback) => {
    console.log('this is the payload in messages model', payload)
    connection.query(`SELECT * FROM messages WHERE channelId="${payload.channelId}"`,
    (err, result) => {
        console.log('result of the get messssage from model', result)
        if(err) {
            console.log('this is the erroor from get messages', err)
        }
        callback(err, result)
    })
};

export default GetmessagesModel;