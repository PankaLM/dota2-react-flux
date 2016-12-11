"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var HeroesApi = require('../api/heroesApi');
var ActionTypes = require('../constants/actionTypes');

var HeroesActions = {
	getHeroes: function(filter) {
		var filteredHeroes = HeroesApi.getHeroes(filter);
		Dispatcher.dispatch({
			actionType: ActionTypes.FILTER_HEROES,
			payload: {
				heroes: filteredHeroes,
				filter: filter
			}
		});
	}
};

module.exports = HeroesActions;
