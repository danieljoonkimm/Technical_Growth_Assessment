import React, {Component} from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ClickChannel } from '../../actions/actions-clickchannel.js';


class ChannelEntries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        console.log('this is the props from channel', this.props.singleChannels.channelsId)
        console.log('this is the clickthechannelreducer info', this.props.ClicktheChannel)
        return(
            <div onClick= { () => this.props.ClickChannel(this.props.singleChannels.channelsId)}>
                {this.props.singleChannels.channelsId}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ClicktheChannel : state.ClickChannelReducer
        
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ClickChannel
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ChannelEntries);