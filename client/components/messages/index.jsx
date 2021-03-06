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
import { ChannelId } from '../../actions/actions-channelid.js';

import io from 'socket.io-client';
const socket = io('http://localhost:8080')

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messagetext: '',
            listofmessages: this.props.passmessages ? this.props.passmessages : []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            listofmessages : this.props.passmessages
        })
    }

    onTextHandler(e) {
        // console.log('this is state', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    sendMessageHandler(e) {
        if (!this.props.ChannelIdInfo) {
            alert('please select a channel');
        } else {
            const payload = {
                messagetext : this.state.messagetext,
                userId : this.props.LogUser.id,
                channelId : this.props.ChannelIdInfo
            }
            const payload2 = {
                messages : this.state.messagetext,
                userId : this.props.LogUser.id,
                channelId : this.props.ChannelIdInfo
            }
            console.log('this that be payload', payload)
            axios.post('/api/postmessage', payload)
                .then(response => {
                    console.log('this is the repsonse from the send message', response)
                    this.state.listofmessages.push(payload2)
                    const newarray = this.state.listofmessages.slice();
                    console.log('this is the new array',newarray)
                    this.setState({
                        listofmessages : newarray
                    })
                    console.log('this the new arrrrrrray', newarray);
                })
                .catch(err => {
                    console.log('this is the errrrr from send message', err)
                })
    
                e.preventDefault()
                console.log('this is socket firing', this.state.listofmessages)
                console.log('this is the payload', payload)
                console.log('this is the messssagesgsform index', this.state.listofmessages[this.state.listofmessages.length-1])
                socket.emit('messages', {
                    message: payload.messagetext
                })
        }        
    }

    render() {
        console.log('this is state of clicking channel', this.props.ChannelIdInfo)
        console.log('hello')
        // console.log('this is props for user name', this.props.LogUser)
        // console.log('this is the props for create team', this.props.CreateTeam)
        // console.log('this is the create channel propssss', this.props.CreatetheChannel)
        // console.log('this is the create channel props', this.props.ClicktheChannel)
        console.log('this is the props from channel', this.props.HandleInfo)
        // console.log('this is the channel id info', this.props.ChannelIdInfo)
        // console.log('this.props.passmessages', this.props.passmessages)
        console.log('this is my propsssssssssssss: ', this.props);
        return(
            <div>
                <button onClick={() => {this.setState({})}}></button>
                <div className='messages'>
                    {
                        this.state.listofmessages ?
                        this.state.listofmessages.map ( (message, key) => {
                            return <MessageEntries key={key} singleMessages={message}/>
                        })
                        :
                        this.state.listofmessages.map ( (message, key) => {
                            return <MessageEntries key={key} singleMessages={message}/>
                        })
                    }
                </div>

                <div className='messages-bottom'>
                    <input className='message-input' name='messagetext' type='text' onChange={this.onTextHandler.bind(this)} placeholder='send message..'></input>
                    <button className='message-button' onClick={this.sendMessageHandler.bind(this)}>Send Message</button>
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
        ClicktheChannel : state.ClickChannelReducer, 
        ChannelIdInfo : state.ChannelIdReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        LoginUser,
        TeamName,
        CheckTeam,
        CreateChannel,
        HandleInfoToPage,
        ClickChannel,
        ChannelId
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Messages);