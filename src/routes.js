"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;


var Home = require('./components/homePage');
var Author = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');

var routes = React.createClass({
    render:function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}>

                </Route>
                <Route path="/authors" component={Author}/>
                <Route path="/about" component={About}/>
            </Router>
        );
    }
});

module.exports = routes;