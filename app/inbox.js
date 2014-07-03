import React from 'react';
import ReactRouter from 'react-nested-router';
import AjaxMixin from 'ajax-mixin';

var Link = ReactRouter.Link;

var Inbox = React.createClass({
    render: function() {
        var mixin = new AjaxMixin();
        mixin.xhr("/api/incoming", "GET").then(function(response) {
            response.forEach(function(item) {
                console.log(item);
            });
        });
        return (
            React.DOM.div(null, 
                React.DOM.h1(null, "Inbox!"),
                React.DOM.ul(null, 
                    React.DOM.li(null, Link( {to:"final"}, "Final"))
                ),
                this.props.activeRoute
            )
        );
    }
});

export default Inbox;
