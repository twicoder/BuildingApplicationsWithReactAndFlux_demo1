"use strict";

var React = require('react');

var AuthorBook = React.createClass({
    render:function(){
        return (
            <div>
                <h1>Hello, this page is about {this.props.params.authorName}'s book {this.props.params.bookName}!</h1>
            </div>
        )
    }
});

module.exports = AuthorBook;