// REACT //
import React, { Component } from 'react';

// REDUX //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {testDispatcher1, testDispatcher2} from './redux/actions/index.js';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div> {/* comments inside JSX must be multi-line comments enclosed in curly brackets */}

                <div className={'jumbotron text-center'}> {/* 'jumbotron' and 'text-center' classes are Bootstrap presets */}
                    <h1>React Redux Bootstrap Demo</h1> 
                    <p>This is a demo of the 3n+1 problem</p> 
                </div>

                <div className={'container'}>

                    <div className={'row'}>

                        <div className={'col-sm-4 text-center'}>
                            <h2>Change the Redux State</h2>
                            <button className={'btn btn-primary'} onClick={ () => this.props.testDispatcher1() }> Iterate </button>
                        </div>

                        <div className={'col-sm-4 text-center'}>
                            <h2>The Redux State:</h2>
                            <p>{this.props.test}</p>
                        </div>

                        <div className={'col-sm-4 text-center'}>
                            <h2>Add to the Redux State</h2>
                            <button className={'btn btn-primary'} onClick={ () => this.props.testDispatcher2(1) }> Add </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    test: state.test
});

const mapDispatchToProps = dispatch => bindActionCreators({
    testDispatcher1,
    testDispatcher2,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);