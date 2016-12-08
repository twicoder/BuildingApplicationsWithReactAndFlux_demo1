"use strict";
var React = require('react');
var MyRoutes = require('../routes');
var Router = require('react-router');
var Link = Router.Link;

var App = React.createClass({
    render:function(){
        return (
            <div>
                <MyRoutes/>
            </div>
        )
    }
});


module.exports = App;