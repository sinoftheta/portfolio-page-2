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
            <div className={'container'}> 
                <h2 className={'p3'}><NavLink to={`/${this.props.route}`}>{this.props.title}</NavLink></h2>
                {this.props.images? 
                    <div className={`row align-items-center`}>
                        {this.props.images.map((image, i) => (
                            <img key={i} src={image.src} alt={image.alt} className={'img-thumbnail col-sm'}/> 
                        ))}
                    </div>
                    : 
                    null}
                <div dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                {this.props.link? <a href={this.props.link}>github repo</a> : null}
            </div>
        );
    }
}

export default Post;