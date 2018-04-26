import connection from '../db';

const GetallchannelsModel = (channels, callback) => {
    console.log('this is all the channnnnels from the modelll', channels)
    //select everything from
    // connection.query(`SELECT UserChannels.userId, UserChannels.channelsId FROM UserChannels WHERE userId = "${channels.userid}"
    //                  INNER JOIN teams ON teams.teamId= "${channels.teamId}"`, (err, result) => {
    //                      if(err) {
    //                          console.log('this be that err from channels model: ', err)
    //                      }
    //                      callback(err, result)
    //                  })
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