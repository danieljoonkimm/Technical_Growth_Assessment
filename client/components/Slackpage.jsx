import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LoginUser} from '../actions/actions-login.js';
import { TeamName } from '../actions/actions-createteam.js';
import { CheckTeam} from '../actions/actions-teaminfo.js';

import Workspace from '../components/Workspace.jsx';

import axios from 'axios';
import Channel from '../components/channels/index.jsx'

class Slackpage extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn : false,
            allchannels : []
        }
    }

    componentWillMount() {
        console.log('this is props for team name', this.props.LogUser)
        console.log('this is props for team name', this.props.ConfirmTeam)

        axios.get(`/api/getallchannelsforteam/${this.props.LogUser.id}/${this.props.ConfirmTeam.id}`)
            .then(response => {
                console.log('this is the response for grabbing channel CWL', response)
                // this.state.allchannels.push(response.data.results)
            })
            .catch(err => {
                console.log('this is the error for the CWM', err)
            })
    }

    logoutHandler() {
        console.log('this be that logout handler')
        this.setState({
            loggedIn : !this.state.loggedIn
        })

    }

    render() {
        console.log('this is the props from slackk', this.props.LoginUser)
        //////take care of the this.props.CreateTeam cus its null in the beginning, after just load it when its rdy.
        return(
            <div>
                <h2>{this.props.LoginUser.username}</h2>
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
        ConfirmTeam : state.CheckTeamReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        LoginUser,
        TeamName,
        CheckTeam
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Slackpage);