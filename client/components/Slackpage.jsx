import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';
import { TeamName } from '../actions/actions-createteam.js';
import { CheckTeam} from '../actions/actions-teaminfo.js';
import { CreateChannel } from '../actions/actions-createchannel.js';

import Workspace from '../components/Workspace.jsx';

import axios from 'axios';
import Channel from '../components/channels/index.jsx'

class Slackpage extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn : false,
            confirmed : true,
            allchannels : []
        }
    }

    componentWillMount() {
        console.log('this is props for user name', this.props.LogUser)
        console.log('this is the props for create team', this.props.CreateTeam)
        console.log('this is the create channel props', this.props.CreatetheChannel)

        //if logging in with existing team
        if(this.props.ConfirmTeam !== null) {
            axios.get(`/api/getallchannelsforteam/${this.props.LogUser.id}/${this.props.ConfirmTeam.id}`)
            ///? LOOK AT ADDING THE CHANNELS ID
                .then(response => {
                    console.log('this is the response for grabbing channel CWL', response)
                    //push the response data results to the all channels array
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
        return(
            <div>
                
                <div>
                    <h3>
                        {/* {!this.props.confirmed && this.props.CreateTeam || this.props.ConfirmTeam.team_name} */}
                    </h3>
                </div>

                <h2>{this.props.LogUser.username}</h2>

                {!this.state.loggedIn ? 
                <div>
                    <Channel allchannels={this.state.allchannels}/>
                    <button onClick={this.logoutHandler.bind(this)}>LOGOUT</button>
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

export default connect(mapStateToProps, matchDispatchToProps)(Slackpage);