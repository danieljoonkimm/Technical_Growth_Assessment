import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CreateChannel } from '../../actions/actions-createchannel.js';
import { SearchUserInfo } from '../../actions/actions-searchuserinfo.js';
import { HandleInfoToPage } from '../../actions/actions-channelsinfotopage.js';

import ChannelEntries from './ChannelEntries.jsx';

class ChannelList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        // console.log('hello this is props', this)
        // console.log('thfsfsegsgsegsfis', this.props.channels)
        return(
        
            <div>
                {/* <button onClick={() => { console.log('test1', this.props.HandleInfo )}}>handle</button> */}
                {this.props.channels.map ( (channel, key) => {
                     return <ChannelEntries key={key} singleChannels={channel}/>
                })}
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CreatetheChannel : state.CreateChannelReducer,
        SearchUser : state.SearchUserInfoReducer,
        HandleInfo : state.ChannelsInfoToPageReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        CreateChannel,
        SearchUserInfo,
        HandleInfoToPage
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ChannelList);