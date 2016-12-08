"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render:function(){
        return(
            <div>
                <div>
                    <h1>React Router Tutorial</h1>
                    <ul role="nav">
                        <li><Link to="/authors">authors</Link></li>
                        <li><Link to="/about">about</Link></li>
                    </ul>
                </div>
                <div className="jumbotron">
                    <h1>Pluralsight Administration</h1>
                    <p>React,React Router, and Flux for ultra-responsive web apps.</p>
                </div>
            </div>
        );

    }
});


module.exports = Home;