import React, {Component} from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageEntries from './MessageEntries';
// import { LoginUser } from '../actions/actions-login.js';
// import { TeamName } from '../actions/actions-createteam.js';
// import { CheckTeam} from '../actions/actions-teaminfo.js';

class Messages extends Component {
    constructor() {
        super();

        this.state = {
            messagetext: ''
        }
    }

    // componentWillMount() {
    //     //axios get messages
    //     //set messages state to empty array to response data
    //     axios.get(`/api/getmessages/${channelId}`)
    //         .then(response => {
    //             console.log('this is the response from messages', response)
    //         })
    //         .catch(err => {
    //             console.log('this is the err from get messages', err)
    //         })
    // }

    render() {
        console.log('iohseitsheithisoet', this.props.passmessages)
        return(
            <div>
                {this.props.passmessages.map ( (message, key) => {
                     return <MessageEntries key={key} singleMessages={message}/>
                })}
            </div>
        )
    }
};

export default Messages;