import React, {Component} from 'react';
import {link} from 'react-router-dom';

class Header extends Component {

    render(){
        return(
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">{this.props.title}</div>
                    <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                    <link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="{this.props.link}">{this.props.buttonText}</link>
                </div>
            </header>
        )
    }
}