import React from 'react';
import ReactRouter from 'react-nested-router';

var Link = ReactRouter.Link;

var Inbox = React.createClass({
    render: function() {
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
