import React, {Component} from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ClickChannel } from '../../actions/actions-clickchannel.js';
import { LoginUser } from '../../actions/actions-login.js';
import { ChannelId } from '../../actions/actions-channelid.js';


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
                console.log('.... ', response.data);
                this.props.ChannelId(this.props.singleChannels.channelsId)
            })
            .catch(err => {
                console.log('this isthe error for the catch', err)
            })
    }

    render() {
        
        return(
            <div>
                <div className='channelentries' onClick= {this.onClickHandler.bind(this)}>
                    {this.props.singleChannels.channelsId}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ClicktheChannel : state.ClickChannelReducer,
        LogUser: state.LoginReducer,
        ChannelIdInfo : state.ChannelIdReducer
        
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ClickChannel,
        LoginUser,
        ChannelId
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ChannelEntries);