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

// connection.query(`SELECT UsersChannels.userId, UsersChannels.channelsId 
//FROM UsersChannels INNER JOIN Channels on UsersChannels.ChannelsId="${channels.id}" 
//WHERE UsersChannels.userId="${channels.userid}"`, (err, results) => {
//     console.log('this that result frommm getting all channellsssss in model', results)
//     if(err) {
//         console.log('this thattttt errrrr from get all channels', err)
//     }
//     callback(err, {results : results})
// })

// connection.query(`SELECT channels.channelname, `)

// CREATE TABLE channels (
//     id int NOT NULL auto_increment,
//     channel_name varchar(50),
//     teamsId int NOT NULL,
//     type int,
//     FOREIGN KEY(teamsId) REFERENCES teams(id),
//     PRIMARY KEY(id)
// );