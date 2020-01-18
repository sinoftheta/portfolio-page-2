// REACT //
import React, { Component } from 'react';

// COMPONENTS //
import {NavLink} from 'react-router-dom';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div className="scene">
                <div className="cube">
                    <div className="cube__face cube__face--front">front</div>
                    <div className="cube__face cube__face--back">back</div>
                    <div className="cube__face cube__face--right">right</div>
                    <div className="cube__face cube__face--left">left</div>
                    <div className="cube__face cube__face--top">top</div>
                    <div className="cube__face cube__face--bottom">bottom</div>
                </div>
            </div>
        );
    }
}

export default Post;