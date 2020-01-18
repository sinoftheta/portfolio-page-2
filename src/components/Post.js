// REACT //
import React, { Component } from 'react';

// COMPONENTS //
import {NavLink} from 'react-router-dom';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: true, //unused
        }
    }
    
    render(){
        return (
            <div className={'text-center'}> 
                <h2><NavLink to={`/${this.props.route}`}>{this.props.title}</NavLink></h2>
                {this.props.src?<img src={this.props.src} alt={this.props.alt}/> : null}
                <div>{this.props.text}</div>
                {this.props.link? <a href={this.props.link}>github repo</a> : null}
            </div>
        );
    }
}

export default Post;