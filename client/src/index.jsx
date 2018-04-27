import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from '../reducers';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("app")); 