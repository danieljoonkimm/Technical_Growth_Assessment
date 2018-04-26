import connection from '../db';

const MakechannelModel = (channel, callback) => {
    console.log('this is the make channel modeeeeel', channel)
    connection.query(`SELECT * from channels WHERE channel_name = "${channel.channelname}"`, (err, result) => {
        if(err) {
            throw err;
        }
        console.log('this be the chanelllll resultttt', result)
        if(!result.length) {
            connection.query(`INSERT INTO channels (channel_name) VALUES ('${channel.channelname}')`, (err, result) => {
                if(err) {
                    throw err;
                }
                callback(err, channel.channelname);
            })
        }
    })
};

export default MakechannelModel;