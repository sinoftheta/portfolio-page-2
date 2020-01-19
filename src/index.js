
// REACT //
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'

// REDUX //
import { Provider } from 'react-redux';
import store from './redux/store/index.js';

// BOOTSTRAP //
import 'bootstrap/dist/css/bootstrap.min.css';

// CUBE CSS //
import './assets/cube.css'

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



//cube scroll rotate logic
const getDocHeight = () =>{
    let D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}

let totalFrames = 1000;
const amountscrolled = () => {
    let winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
    let docheight = getDocHeight();
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let trackLength = docheight - winheight;
    let pctScrolled = Math.floor(scrollTop/trackLength * totalFrames); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    console.log(pctScrolled);
    return pctScrolled;
}

document.documentElement.style.setProperty('--total-frames', `${totalFrames}s`);
window.onscroll = () =>{
            //document.documentElement.style.setProperty('--cube-keyframe', `-${amountscrolled()}s`);
            document.documentElement.style.setProperty('--cube-keyframe', `-${amountscrolled()}s`);
}