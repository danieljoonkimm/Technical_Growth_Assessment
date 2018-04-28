import React, {Component} from 'react';

class MessageEntries extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log('this.props.message', this.props.singleMessages.messages)
        return(
            <span id='message-entries'>
                {this.props.singleMessages.messages}
            </span>
        )
    }
}

export default MessageEntries;