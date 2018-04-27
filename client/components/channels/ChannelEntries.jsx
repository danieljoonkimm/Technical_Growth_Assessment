import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CreateChannel } from '../../actions/actions-createchannel.js';
import { SearchUserInfo } from '../../actions/actions-searchuserinfo.js';

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
                {this.props.SearchUser}
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CreatetheChannel : state.CreateChannelReducer,
        SearchUser : state.SearchUserInfoReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        CreateChannel,
        SearchUserInfo
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ChannelEntries);