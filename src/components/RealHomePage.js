"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var RealHomePage = React.createClass({
    render:function(){
        return (
            <div>
                <div className="jumbotron">
                    <h1>Pluralsight Administration</h1>
                    <p>React,React Router, and Flux for ultra-responsive web apps.</p>
                </div>
            </div>
        );
    }
});

module.exports=RealHomePage;
