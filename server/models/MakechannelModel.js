import connection from '../db';

const MakechannelModel = (channel, callback) => {
    console.log('this is the make channel modeeeeel', channel)
    connection.query(`SELECT * from channels WHERE channel_name = "${channel.channelname}"`, (err, result) => {
        console.log('this be the chanelllll resultttt', result)
        if(err) {
            throw err;
        }
        if(!result.length) {
            connection.query(`INSERT INTO channels (channel_name) VALUES ('${channel.channelname}')`, (err, result) => {
                console.log('result from the make channnnnnel', result)
                if(err) {
                    throw err;
                }
                else {
                    callback(err, {result : result, channelname : channel.channelname});
                }
            })
        } else {
            callback(err, result)
        }
    })
};

export default MakechannelModel;