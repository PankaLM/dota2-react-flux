"use strict";

var React = require('react');
var _ = require('lodash');
var HeroRow = require('./heroRow');

var HeroesList = React.createClass({
	propTypes: {
		heroes: React.PropTypes.array.isRequired,
		select: React.PropTypes.func.isRequired,
		selectedHeroes: React.PropTypes.array.isRequired
	},
	select: function(hero){
    if(!_.contains(this.props.selectedHeroes, hero)) {
      this.props.select(hero);
    }
	},
	render: function() {
		var createHeroRow = function(hero) {
			var selectedHeroStyle = _.contains(this.props.selectedHeroes, hero) ? 'bg-info' : '';
			return (
          <HeroRow hero={hero} onClick={this.select.bind(this, hero)} style={selectedHeroStyle} />
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

module.exports = HeroesList;
