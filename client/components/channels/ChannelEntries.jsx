import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CreateChannel } from '../../actions/actions-createchannel.js';
import { SearchUserInfo } from '../../actions/actions-searchuserinfo.js';
import { HandleInfoToPage } from '../../actions/actions-channelsinfotopage.js';

class ChannelEntries extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        console.log('this is props search user')
        return(
            <div>
                {this.props.CreatetheChannel}
              
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

export default connect(mapStateToProps, matchDispatchToProps)(ChannelEntries);