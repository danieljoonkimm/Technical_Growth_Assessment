import React, {Component} from 'react';
import Login from './Login.jsx';
import Workspace from './Workspace.jsx';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Workspace/>
            </div>

        )
    }
}
export default App;