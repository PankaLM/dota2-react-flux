"use strict";

var React = require('react');
var _ = require('lodash');

var HeroRow = React.createClass({
	propTypes: {
		hero: React.PropTypes.string.isRequired,
		style: React.PropTypes.string,
		onClick: React.PropTypes.func
	},
	select: function(hero){
		this.props.select(hero);
	},
	render: function() {
		var onClickFn = this.props.onClick ? this.props.onClick.bind(this, this.props.hero) : '';
		return (
			<tr key={this.props.hero} className={this.props.style}>
				<td>
					<a onClick={onClickFn}>
						<img src={"images/" + this.props.hero + ".png"} /> {this.props.hero}
					</a>
				</td>
			</tr>
		);
	}
});

module.exports = HeroRow;
