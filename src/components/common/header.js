"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render:function(){
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/authors">authors</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
            </div>
        );
    }
});

module.exports = Header;