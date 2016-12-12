"use strict";

var React = require('react');

var About = React.createClass({
    statics:{
        willTransitionTo(transition,params,query,callback){
            alert('test');
            if(!confirm('Are you sure you wang read page that\'s this boring?')){
                transition.about();
            } else {
                callback();
            }
        }
    },
    render:function(){
        return (
            <div>
                <h1>About</h1>
                <div>
                    <div>
                        This application uses the following technologies:
                    </div>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = About;