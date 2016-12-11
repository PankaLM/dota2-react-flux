"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var HeroesStore = require('../../stores/heroesStore');
var SelectionStore = require('../../stores/selectionStore');
var SelectionActions = require('../../actions/selectionActions');
var HeroesActions = require('../../actions/heroesActions');
var HeroesList = require('./heroesList');
var SelectedHeroes = require('./selectedHeroes');
var Input = require('../common/textInput');
var Btn = require('../common/btn');

var HeroesPage = React.createClass({
	getInitialState: function() {
		return {
			heroes: HeroesStore.getHeroes(),
			filter: '',
			selectedHeroes: []
		};
	},

	componentWillMount: function() {
		HeroesStore.addChangeListener(this._onHeroesChange);
		SelectionStore.addChangeListener(this._onSelectionChange);
	},

	componentWillUnmount: function() {
		HeroesStore.removeChangeListener(this._onHeroesChange);
		SelectionStore.removeChangeListener(this._onSelectionChange);
	},

	_onSelectionChange: function() {
		var selectionData = SelectionStore.getSelection();
		this.setState({
			selectedHeroes: selectionData.heroes
		});
	},

	_onHeroesChange: function() {
		var data = HeroesStore.getFilteredHeroesData();
		this.setState({
			filter: data.filter,
			heroes: data.heroes
		});
	},

	_search: function() {
		HeroesActions.getHeroes(this.filter);
	},
	_changeInputValue: function(e) {
		this[e.target.name] = e.target.value;
	},
	_selectHero: function(hero) {
		SelectionActions.selectHero(hero);
	},

	_clearSelection: function () {
		SelectionActions.resetSelection();
	},

	render: function() {
		return (
			<div>
				<h1>Heroes</h1>
				<div className="row">
					<div className="col-sm-12 col-lg-12 col-xs-12">
						<Input
						name="filter"
						label="Filter"
						onChange={this._changeInputValue.bind(this)}/>
						<Btn onClick={this._search} label="Search"/>
						<Btn onClick={this._clearSelection} label="Reset"/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-lg-6 col-xs-6">
						<HeroesList heroes={this.state.heroes} selectedHeroes={this.state.selectedHeroes} select={this._selectHero} />
					</div>
					<div className="col-sm-6 col-lg-6 col-xs-6">
						<SelectedHeroes heroes={this.state.selectedHeroes} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = HeroesPage;
