"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('./common/header');

var Home = React.createClass({
    render:function(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        );

    }
});


module.exports = Home;