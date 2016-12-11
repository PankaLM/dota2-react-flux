"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var HeroesApi = require('../api/heroesApi');
var ActionTypes = require('../constants/actionTypes');

var SelectionActions = {
	selectHero: function(hero) {
		Dispatcher.dispatch({
			actionType: ActionTypes.SELECT_HERO,
			hero: hero
		});
	},
	resetSelection: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.RESET_SELECTION
		});
	}
};

module.exports = SelectionActions;
