import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/App.js';
import {Provider} from 'react-redux';
import store from './store';
ReactDOM.render(<Provider store={store}><AppComponent/></Provider>,document.getElementById('app'));