"use strict";

var React = require('react');
var HeroRow = require('./heroRow');

var SelectedHeroes = React.createClass({
	propTypes: {
		heroes: React.PropTypes.array.isRequired
	},
	render: function() {
		var createHeroRow = function(hero) {
			return (<HeroRow hero={hero} />);
		};

		return (
			<div className="col-sm-12 col-lg-12">
				<table className="table col-sm-6 col-lg-6">
					<thead>
						<th>Selected</th>
					</thead>
					<tbody>
						{this.props.heroes.map(createHeroRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = SelectedHeroes;
