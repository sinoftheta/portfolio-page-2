// REACT //
import React, { Component } from 'react';

// REDUX //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS //
import { Route, Redirect, Switch, NavLink} from 'react-router-dom';

// VIEWS/COMPOONENTS //
import Post from './components/Post.js';
import Cube from './components/Cube.js';

import CollatzDemo from './components/CollatzDemo.js';
import OEISDemo from './components/OEISDemo.js';

import content from './content.js';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>

                {/* nav */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-expand">
                    <NavLink className={"navbar-brand"} to={'/'}>Ian Band</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className={"nav-item nav-link"} href={`https://github.com/IanBand?tab=repositories`}>Github</a>
                            <a className={"nav-item nav-link"} href={`https://www.linkedin.com/in/ian-band-b10b58181/`}>Linkedin</a>
                            <a className={"nav-item nav-link"} href={`www.fook.com`}>Resume</a>
                        </div>
                    </div>
                    <div></div>
                </nav>


                {/* routes */}
                <Switch>
                    <Route path="/" exact render={(route) => window.scrollTo(0, 0)}/>
                    

                    {content.map((item, i) =>(
                            <Route path={`/${item.route}`} exact render={() => {
                                console.log('scroll to ' + item.title)
                            }}
                            key={i}
                            /> 
                    ))}

                    <Route render={() => <Redirect to={'/'}/>}/> {/*order of routes matters, catch all has to be last :P */}
                </Switch>

                {/* content */}

                {content.map((item, i) => (
                            item.type == 'post' ?
                            <Post
                                key={i}
                                title={item.title}
                                link={item.link}
                                text={item.text}
                                route={item.route}
                                images={item.images}

                            />
                            :
                            <h1 key={i} className={'container p3'}>
                                {item.title}
                            </h1>
                ))}

                <Cube/>


            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);