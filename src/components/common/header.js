"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var IndexLink = Router.IndexLink;

var Header = React.createClass({
    render:function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <IndexLink to="/"  className="navbar-brand">
                        <img src="images/pluralsight_logo.png"/>
                    </IndexLink>
                    <ul className="nav navbar-nav">
                        <li><IndexLink activeStyle={{ color: 'red' }} to="/">Home</IndexLink></li>
                        <li><Link activeStyle={{ color: 'red' }} to="/authors">Authors</Link></li>
                        <li><Link activeStyle={{ color: 'red' }} to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;