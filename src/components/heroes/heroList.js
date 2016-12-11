"use strict";

var React = require('react');
var toastr = require('toastr');
var _ = require('lodash');

var HeroList = React.createClass({
	propTypes: {
		heroes: React.PropTypes.array.isRequired,
		compare: React.PropTypes.func.isRequired,
		heroesToCompare: React.PropTypes.array.isRequired
	},
	add: function(hero){
		this.props.compare(hero);
	},
	render: function() {
		var createHeroRow = function(hero) {
			var imgSrc = "images/" + hero + ".png";
			var isForComparison = _.contains(this.props.heroesToCompare, hero);
			var selectedHeroStyle = isForComparison ? 'bg-info' : '';
			return (
				<tr key={hero} className={selectedHeroStyle}>
					<td><a onClick={this.add.bind(this, hero)}><img src={imgSrc} /> {hero}</a></td>
				</tr>
			);
		};

		return (
			<div className="col-sm-12 col-lg-12">
				<table className="table col-sm-6 col-lg-6">
					<thead>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.heroes.map(createHeroRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = HeroList;
