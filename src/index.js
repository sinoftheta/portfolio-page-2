
// REACT //
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'

// REDUX //
import { Provider } from 'react-redux';
import store from './redux/store/index.js';

// BOOTSTRAP //
import 'bootstrap/dist/css/bootstrap.min.css';

// APP //
import App from './App.js';


render( 
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);