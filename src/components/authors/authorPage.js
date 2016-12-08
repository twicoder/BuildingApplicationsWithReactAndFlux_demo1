"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Author = React.createClass({
    render:function(){
        return (
            <div>
                <h1>Hello {this.props.params.authorName}</h1>
                <li><Link to={"/authors/"+this.props.params.authorName+"/BookA"}>BookA</Link></li>
                <li><Link to={"/authors/"+this.props.params.authorName+"/BookB"}>BookB</Link></li>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Author;