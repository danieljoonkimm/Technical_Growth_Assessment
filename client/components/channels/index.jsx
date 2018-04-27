import React, {Component} from 'react';
import axios from 'axios';
import ChannelEntries from './ChannelEntries.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LoginUser } from '../../actions/actions-login.js';
import { TeamName } from '../../actions/actions-createteam.js';
import { CheckTeam} from '../../actions/actions-teaminfo.js';
import { CreateChannel } from '../../actions/actions-createchannel.js';

class Channel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            makeChannel : false,
            channelname : ''
        }
    }

    onTextHandler(e) {
        console.log('this is state', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createChannelHandler() {
        console.log('this is the channel handler and teamname', this.state.teamname)
        this.setState({
            makeChannel : !this.state.makeChannel
        })
    }

    makeChannelHandler() {
        // console.log('this is the make channel handler', this.props)
        // console.log('thiss', this.props.CreateTeam)
        // console.log('THISSSSSSS', this.props.ConfirmTeam)
        if(this.props.CreateTeam === null) {
            const payload = {
                channelname : this.state.channelname,
                teamname : this.props.ConfirmTeam.team_name
            }
            console.log('this that payload from channelll handler1415', payload)
            axios.post('/api/makechannel', payload)
                .then(response => {
                    // console.log('this is log user', this.props.LogUser)
                    // console.log('this is the responseee1sdfsdf', response)
                    this.props.CreateChannel(response.data.channelname)
                    this.setState({
                        makeChannel : !this.state.makeChannel
                    })
                    
                    const newPayload = {
                        user_id: this.props.LogUser.id,
                        channel_id: response.data.result.insertId
                    }
                    // console.log('this is the new payload', newPayload)
                    axios.post('/api/sendtouserschannels', newPayload)
                        .then(response => {
                            console.log('this is the response for sending data to user channel', response)
                        })
                        .catch(err => {
                            console.log('this is the error for sending data to user channel', err)
                        })
                    
                })
                .catch(err => {
                    console.log('this is the errror for makinggg channel', err)
                })
        }
        else {
            const payload1 = {
                channelname : this.state.channelname,
                teamname : this.props.CreateTeam
            }
            console.log('this that payload from channelll handler1415', payload1)
            axios.post('/api/makechannel', payload1)
                .then(response => {
                    console.log('this is the responseee for making channel', response)
                    this.props.CreateChannel(response.data.channelname)
                    this.setState({
                        makeChannel : !this.state.makeChannel
                    })

                    const newPayload = {
                        user_id: this.props.LogUser.id,
                        channel_id: response.data.result.insertId
                    }

                    console.log('this is the new payload', newPayload)
                    axios.post('/api/sendtouserschannels', newPayload)
                        .then(response => {
                            console.log('this is the response for sending data to user channel', response)
                        })
                        .catch(err => {
                            console.log('this is the error for sending data to user channel', err)
                        })

                })
                .catch(err => {
                    console.log('this is the errror for makinggg channel', err)
                })
        }
    }
    

    render() {
        return(
            <div>

                {!this.state.makeChannel ?
                <div>

                <button onClick={this.createChannelHandler.bind(this)}>CREATE CHANNEL</button>

                <div>
                <ChannelEntries/>
                </div>

                </div>

                :

                <div>

                <input onChange={this.onTextHandler.bind(this)} name='channelname' placeholder='enter channel name..'></input>
                <button onClick={this.makeChannelHandler.bind(this)}>MAKE CHANNEL</button>

                </div>
                 //send to channelentries component all the channels that are made

                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        LogUser: state.LoginReducer,
        CreateTeam : state.CreateTeamReducer,
        ConfirmTeam : state.CheckTeamReducer,
        CreatetheChannel : state.CreateChannelReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        LoginUser,
        TeamName,
        CheckTeam,
        CreateChannel
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Channel);