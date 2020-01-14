// REACT //
import React, { Component } from 'react';

// REDUX //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS //
import { Route, Redirect, Switch, NavLink} from 'react-router-dom';

// VIEWS/COMPOONENTS //
import CollatzDemo from './components/CollatzDemo.js';
import OEISDemo from './components/OEISDemo.js';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div> {/* comments inside JSX must be multi-line comments enclosed in curly brackets */}

                {/* header */}


                {/*navbar*/} {/***** could be its own component, but I think its a good idea to have the bar here for simplicity...? */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-expand">
                    <NavLink className={"navbar-brand"} to={'/Collatz'}>React Redux Bootstrap Demo</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className={"nav-item nav-link"} to={'/Collatz'}>Collatz</NavLink>
                            <NavLink className={"nav-item nav-link"} to={'/OEIS'}>OEIS</NavLink>
                        </div>
                    </div>
                </nav>



                <Switch>
                    <Route path="/" exact render={(route) => <Redirect to={'/Collatz'}/>}/>
                    <Route path="/Collatz" exact render={() => <CollatzDemo/>}/>
                    <Route path="/OEIS" exact render={() => <OEISDemo/>}/>
                    <Route render={() => <Redirect to={'/Collatz'}/>}/> {/* was /Collatz, this might be better?? */}
                </Switch>

                {/* footer */}
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);