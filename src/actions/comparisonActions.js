"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var HeroesApi = require('../api/heroesApi');
var ActionTypes = require('../constants/actionTypes');

var ComparisonActions = {
	compareHeroes: function(heroes) {
		var comparisonResults = HeroesApi.getHeroesComparisonResults(heroes);

		Dispatcher.dispatch({
			actionType: ActionTypes.COMPARE_HEROES,
			results: comparisonResults
		});
	},
	addForComparison: function(hero) {
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_HERO_FOR_COMPARISON,
			hero: hero
		});
	}
};

module.exports = ComparisonActions;
