import React, {Component} from 'react';

class MessageEntries extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log('this.props.message', this.props.singleMessages.messages)
        return(
            <div>
                {this.props.singleMessages.messages}
            </div>
        )
    }
}

export default MessageEntries;