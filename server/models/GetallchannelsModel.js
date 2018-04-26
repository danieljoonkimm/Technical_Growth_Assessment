import connection from '../db';

const GetallchannelsModel = (channels, callback) => {
    console.log('this is all the channnnnels from the modelll', channels)
    //select everything from
    connection.query(`SELECT UsersChannels.userId, UsersChannels.channelsId FROM UsersChannels INNER JOIN Channels on UsersChannels.ChannelsId="${channels.id}" WHERE UsersChannels.userId="${channels.userid}"`, (err, results) => {
        console.log('this that result frommm getting all channellsssss in model', results)
        if(err) {
            console.log('this thattttt errrrr from get all channels', err)
        }
        callback(err, {results : results})
    })
};

export default GetallchannelsModel;

// CREATE TABLE UsersChannels (
//     id int NOT NULL auto_increment,
//     userId int NOT NULL,
//     FOREIGN KEY(userId) REFERENCES users(id),
//     channelsId int NOT NULL,
//     FOREIGN KEY(channelsId) REFERENCES channels(id),
//     PRIMARY KEY(id)
// );

// SELECT table1.column1, table2.column2...
// FROM table1
// INNER JOIN table2
// ON table1.common_field = table2.common_field;