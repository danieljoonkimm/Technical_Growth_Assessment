import React, {Component} from 'react';
import axios from 'axios';
import MessageEntries from './MessageEntries.jsx';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../../actions/actions-login.js';
import { TeamName } from '../../actions/actions-createteam.js';
import { CheckTeam} from '../../actions/actions-teaminfo.js';
import { CreateChannel } from '../../actions/actions-createchannel.js';
import { HandleInfoToPage } from '../../actions/actions-channelsinfotopage.js';
import { ClickChannel } from '../../actions/actions-clickchannel.js';

class Messages extends Component {
    constructor() {
        super();

        this.state = {
            messagetext: ''
        }
    }

    onTextHandler(e) {
        console.log('this is state', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    sendMessageHandler() {
        const payload = {
            messagetext : this.state.messagetext,
            userId : this.props.LogUser.id,
            //userid, channelid
        }
        console.log('this that be payload', payload)
        axios.post('/api/postmessage', payload)
            .then(response => {
                console.log('this is the repsonse from the send message', response)
            })
            .catch(err => {
                console.log('this is the errrrr from send message', err)
            })
    }

    render() {
        console.log('this is props for user name', this.props.LogUser)
        console.log('this is the props for create team', this.props.CreateTeam)
        console.log('this is the create channel props', this.props.CreatetheChannel)
        console.log('this is the create channel props', this.props.HandleInfo)
        return(
            <div>
                {this.props.passmessages.map ( (message, key) => {
                     return <MessageEntries key={key} singleMessages={message}/>
                })}

                <div>
                    <input name='messagetext' onChange={this.onTextHandler.bind(this)} placeholder='send message..'></input>
                    <button onClick={this.sendMessageHandler.bind(this)}>Send Message</button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        LogUser: state.LoginReducer,
        CreateTeam : state.CreateTeamReducer,
        ConfirmTeam : state.CheckTeamReducer,
        CreatetheChannel : state.CreateChannelReducer,
        HandleInfo : state.ChannelsInfoToPageReducer,
        ClicktheChannel : state.ClickChannelReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        LoginUser,
        TeamName,
        CheckTeam,
        CreateChannel,
        HandleInfoToPage,
        ClickChannel
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Messages);