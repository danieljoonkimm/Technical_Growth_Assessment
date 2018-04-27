import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CreateChannel } from '../../actions/actions-createchannel.js';

class ChannelEntries extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                {this.props.CreatetheChannel} 
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CreatetheChannel : state.CreateChannelReducer
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        CreateChannel
    }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(ChannelEntries);