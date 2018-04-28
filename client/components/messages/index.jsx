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

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messagetext: '',
            listofmessages: this.props.passmessages ? this.props.passmessages : []
        }
    }

    // componentDidMount() {
    //     console.log('this props.passmessages', this.props.passmessages)
    //     if(this.props.passmessages > 0) {
    //         this.setState({ 
    //             listofmessages: this.props.passmessages
    //         })
    //     }
    // }

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
            channelId : this.props.passmessages[0] ? this.props.passmessages[0].channelId : 1
            //userid, channelid
        }
        const payload2 = {
            messages : this.state.messagetext,
            userId : this.props.LogUser.id,
            channelId : this.props.passmessages[0] ? this.props.passmessages[0].channelId : 1
        }
        console.log('this that be payload', payload)
        axios.post('/api/postmessage', payload)
            .then(response => {
                console.log('this is the repsonse from the send message', response)
                this.state.listofmessages.push(payload2)
                const newarray = this.state.listofmessages.slice();
                this.setState({
                })
                console.log('this the new arrrrrrray', newarray);
            })
            .catch(err => {
                console.log('this is the errrrr from send message', err)
            })
    }

    render() {
        // console.log('this is props for user name', this.props.LogUser)
        // console.log('this is the props for create team', this.props.CreateTeam)
        // console.log('this is the create channel propssss', this.props.CreatetheChannel)
        // console.log('this is the create channel props', this.props.ClicktheChannel)
        // console.log('this is the props from channel', this.props.HandleInfo)
        // console.log('this is the channel id info', this.props.ChannelIdInfo)
        //NEED TO PASS THE CHANNEL ID ALONG WITH THE SEND MESSAGE HANDLER!!!!!!!
        // console.log('this.props.passmessages', this.props.passmessages)
        return(
            <div>
                
                {
                    this.props.ClicktheChannel ?
                    this.props.ClicktheChannel.map ( (message, key) => {
                        return <MessageEntries key={key} singleMessages={message}/>
                    })
                    :
                    this.state.listofmessages.map ( (message, key) => {
                        return <MessageEntries key={key} singleMessages={message}/>
                    })
                }

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
        ClicktheChannel : state.ClickChannelReducer,
        ChannelId : state.ChannelIdReducer
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