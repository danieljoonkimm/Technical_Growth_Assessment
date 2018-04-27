import connection from '../db';

const GetallchannelsModel = (payload, callback) => {
    console.log('this is all the channnnnels from the modelll', payload)
    //select everything from
    connection.query(`SELECT UsersChannels.userId, UsersChannels.channelsId FROM UsersChannels INNER JOIN channels ON UsersChannels.channelsId=channels.id WHERE UsersChannels.userId="${payload.userid}"`, (err, results) => {
        console.log('this that result frommm getting all channellsssss in model', results)
        if(err) {
            console.log('this thattttt errrrr from get all channels', err)
        }
        callback(err, {results : results})
    })
};

export default GetallchannelsModel;

// SELECT UsersChannels.userId, UsersChannels.channelsId WHERE 

// CREATE TABLE UsersChannels (
//     id int NOT NULL auto_increment,
//     userId int NOT NULL,
//     FOREIGN KEY(userId) REFERENCES users(id),
//     channelsId int NOT NULL,
//     FOREIGN KEY(channelsId) REFERENCES channels(id),
//     PRIMARY KEY(id)
// );


//selecting the id and channels id from the userchannels id
//next inner join with the channels table
//next ON userchannels.channelsid = channels.id
//where userchannels.userid = payload.userid