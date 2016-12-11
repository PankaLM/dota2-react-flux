"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var HeroStore = require('../../stores/heroStore');
var ComparisonStore = require('../../stores/comparisonStore');
var ComparisonActions = require('../../actions/comparisonActions');
var HeroList = require('./heroList');
var Input = require('../common/textInput');
var toastr = require('toastr');

var HeroPage = React.createClass({
	getInitialState: function() {
		return {
			heroes: HeroStore.getAllHeroes(),
			filter: '',
			heroesToCompare: []
		};
	},

	componentWillMount: function() {
		HeroStore.addChangeListener(this._onChange);
		ComparisonStore.addChangeListener(this._onComparisonChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		HeroStore.removeChangeListener(this._onChange);
		ComparisonStore.removeChangeListener(this._onComparisonChange);
	},
	_onComparisonChange: function() {
		var comparisonData = ComparisonStore.getComparisons();
		this.setState({
			heroesToCompare: comparisonData.heroes,
			comparisonResults: comparisonData.results
		});
	},

	_onChange: function() {
		this.setState({ heroes: HeroStore.getAllHeroes(this.state.filter) });
	},

	_filter: function(event) {
		this.setState({
			filter: event.target.value,
			heroes: HeroStore.getAllHeroes(this.state.filter) });
	},

	_addForComparison: function(hero) {
			ComparisonActions.addForComparison(hero);
	},

	_compare: function () {
		ComparisonActions.compareHeroes(this.state.heroesToCompare);
	},

	render: function() {
		return (
			<div>
				<h1>Heroes</h1>
				<Input
				name="filter"
				label="Fiter"
				value={this.state.filter}
				onChange={this._filter}/>
				<button onClick={this._compare}>Compare</button>

				<HeroList heroes={this.state.heroes} compare={this._addForComparison} heroesToCompare={this.state.heroesToCompare} />
					{this.state.comparisonResults}
			</div>
		);
	}
});

module.exports = HeroPage;
