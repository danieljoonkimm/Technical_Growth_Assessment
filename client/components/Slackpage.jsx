import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';
import { TeamName } from '../actions/actions-createteam.js';
import { CheckTeam} from '../actions/actions-teaminfo.js';
import { CreateChannel } from '../actions/actions-createchannel.js';
import { HandleInfoToPage } from '../actions/actions-channelsinfotopage.js';
import { ClickChannel } from '../actions/actions-clickchannel.js';

import Workspace from '../components/Workspace.jsx';
import Search from '../components/Search.jsx';

import axios from 'axios';
import Channel from '../components/channels/index.jsx';
import Messages from '../components/messages/index.jsx';

class Slackpage extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn : false,
            confirmed : true,
            allchannels : [],
            allmessages : []
        }
    }

    componentWillMount() {
        console.log('this is props for user name', this.props.LogUser)
        console.log('this is the props for create team', this.props.CreateTeam)
        console.log('this is the create channel props', this.props.CreatetheChannel)

        //if logging in with existing team
        if(this.props.ConfirmTeam !== null) {
            axios.get(`/api/getallchannelsforteam/${this.props.LogUser.id}/${this.props.ConfirmTeam.id}`)
                .then(response => {
                    console.log('this is the response for grabbing channel CWL', response.data.results)
                    // this.props.HandleInfoToPage(response.data.results)
                    axios.get(`/api/getmessages/${this.props.LogUser.id}/${response.data.results[0].channelsId}`)
                        .then(response => {
                            console.log('this is resspponse from messages', response.data)
                            this.setState({
                                allmessages : response.data
                            })
                        })
                        .catch(err => {
                            console.log('this is the err', err)
                        })
                    this.setState({
                        allchannels : response.data.results
                    })

                })
                .catch(err => {
                    console.log('this is the error for the CWM', err)
                })
                //if they're creating a new team
        } 
    }

    
    
    logoutHandler() {
        console.log('this be that logout handler')
        this.setState({
            loggedIn : !this.state.loggedIn
        })

    }

    render() {
        //////THE H3 DOES NOT WORK PROPERLYYYYY!!!!!!!!!!!!!!
        // console.log('this.setsetsetsetset', this.state.allchannels);
        console.log('this is the current state', this.state)
        return(
            <div>             
                <div>
                    <h3>
                        {/* <button onClick={ () => {this.props.ClicktheChannel}}></button> */}
                        {/* {!this.props.confirmed && this.props.CreateTeam || this.props.ConfirmTeam.team_name} */}
                    </h3>
                </div>

                <h2>{this.props.LogUser.username}</h2>

                {!this.state.loggedIn ? 
                    this.props.ClicktheChannel === null ?   
                        <div>

                            <div>
                            <Channel passchannels={this.state.allchannels}/>
                            </div>

                            <button onClick={this.logoutHandler.bind(this)}>LOGOUT</button>

                            <div>
                            <Messages passmessages={this.state.allmessages}/>
                            </div>
                        </div>
                        :
                        <div>

                        <div>
                        <Channel passchannels={this.state.allchannels}/>
                        </div>

                        <div>
                        <button onClick={this.logoutHandler.bind(this)}>LOGOUT</button>
                        </div>

                        <div>
                        <Messages passmessages={this.props.ClicktheChannel}/>
                        
                        </div>
                    </div>

                : <Workspace/>
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

export default connect(mapStateToProps, matchDispatchToProps)(Slackpage);