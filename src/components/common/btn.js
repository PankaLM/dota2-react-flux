"use strict";

var React = require('react');

var Btn = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
     <button onClick={this.props.onClick}>{this.props.label}</button>
    );
  }
});

module.exports = Btn;
