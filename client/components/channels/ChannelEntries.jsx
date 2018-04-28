import React, {Component} from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ClickChannel } from '../../actions/actions-clickchannel.js';
import {LoginUser} from '../../actions/actions-login.js';


class ChannelEntries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    
    onClickHandler() {
        console.log('its working')
        axios.get(`/api/getmessages/${this.props.LogUser.id}/${this.props.singleChannels.channelsId}`) 
            .then(response => {
                console.log('this is the response from channelentry click handler', response.data)
                this.props.ClickChannel(response.data)
            })
            .catch(err => {
                console.log('this isthe error for the catch', err)
            })
    }

    render() {
        console.log('this is the props from channel', this.props.singleChannels.channelsId)
        console.log('this is the clickthechannelreducer info', this.props.ClicktheChannel)
        console.log('this is the loguserrrrrrrr', this.props.LogUser)
        // this.props.ClickChannel(this.props.singleChannels.channelsId);
        
        return(
            <div onClick= {this.onClickHandler.bind(this)}>
                {this.props.singleChannels.channelsId}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ClicktheChannel : state.ClickChannelReducer,
        LogUser: state.LoginReducer
        
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ClickChannel,
        LoginUser
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ChannelEntries);