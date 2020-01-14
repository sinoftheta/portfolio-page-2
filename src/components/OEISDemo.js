// REACT //
import React, { Component } from 'react';

// REDUX //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {iterateOEIS} from '../redux/actions/index.js';

class CollatzDemo extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div> {/* comments inside JSX must be multi-line comments enclosed in curly brackets */}

                <div className={'jumbotron text-center'}> {/* 'jumbotron' and 'text-center' classes are Bootstrap presets */}
                    <h1>A327562(n)</h1> 
                    <p>This is a demo of A327562 from the <a href={'http://oeis.org/A327562'}>OEIS</a></p> 
                </div>
                <div className={'container'}>

                    <div className={'row'}>

                        <div className={'col-sm text-center'}>
                            <h2>Change the Redux State</h2>
                            <button className={'btn btn-primary'} onClick={ () => this.props.iterateOEIS() }> Iterate </button>
                        </div>

                        <div className={'col-sm '}>
                            <h2 className={'text-center'}>Previous Terms:</h2>
                            <div className={'text-center'}>
                                <p> A({this.props.n - 2}) = {this.props.terms[0]}</p>
                                <p> A({this.props.n - 1}) = {this.props.terms[1]}</p>
                                <p> A({this.props.n}) = {this.props.terms[2]}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    terms: state.oeis_terms,
    n: state.oeis_n
});

const mapDispatchToProps = dispatch => bindActionCreators({
    iterateOEIS,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CollatzDemo);