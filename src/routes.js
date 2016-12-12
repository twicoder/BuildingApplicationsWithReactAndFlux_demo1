"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;


var Home = require('./components/homePage');
var Authors = require('./components/authors/authorsPage');
var Author = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var AuthorBook = require('./components/authors/authorBookPage');
var RealHomePage = require('./components/RealHomePage');



var routes = React.createClass({
    render:function(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}>

                    <IndexRoute component={RealHomePage}/>

                    <Route path="/authors" component={Authors}/>
                    <Route path="/authors/:authorName" component={Author}>
                        <Route path="/authors/:authorName/:bookName" component={AuthorBook}/>
                    </Route>

                    <Route name="addAuthor" path="/addAuthor" component={require('./components/authors/manageAuthorPage')}/>

                    <Route path="/about" component={About}/>
                    <Redirect from="/aboutus" to="/about"/>
                    <Route path="*" component={require('./components/404')} />
                </Route>

            </Router>
        );
    }
});

module.exports = routes;