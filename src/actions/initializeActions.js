"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var HeroesApi = require('../api/heroesApi');

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				heroes: HeroesApi.getHeroes()
			}
		});
	}
};

module.exports = InitializeActions;
