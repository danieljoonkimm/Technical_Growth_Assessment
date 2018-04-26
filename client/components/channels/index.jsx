import React, {Component} from 'react';
import axios from 'axios';

class Channel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            makeChannel : false,
            channelname : ''
        }
    }

    onTextHandler(e) {
        console.log('this is state', this.state)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createChannelHandler() {
        console.log('this is the channel handler')
        this.setState({
            makeChannel : !this.state.makeChannel
        })
    }

    makeChannelHandler() {
        console.log('this is the make channel handler')
        const payload = {
            channelname : this.state.channelname
        }
        axios.post('/api/makechannel', payload)
            .then(response => {
                console.log('this is the responseee for making channel', response)
            })
            .catch(err => {
                console.log('this is the errror for makinggg channel', err)
            })
    }
    

    render() {
        return(
            <div>

                {!this.state.makeChannel ?
                <div>

                <button onClick={this.createChannelHandler.bind(this)}>CREATE CHANNEL</button>

                </div>

                :

                <div>

                <input onChange={this.onTextHandler.bind(this)} name='channelname' placeholder='enter channel name..'></input>
                <button onClick={this.makeChannelHandler.bind(this)}>MAKE CHANNEL</button>
                {/* <ChannelEntries allChannels={this.props.allChannels}/> */}

                </div>

                }
            </div>
        )
    }
}

export default Channel;