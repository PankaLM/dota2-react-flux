"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _filteredHeroesData = {
	heroes: [],
	filter: ''
};
var HeroesStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getHeroes: function() {
		return _filteredHeroesData.heroes;
	},

	getFilteredHeroesData: function () {
		return _filteredHeroesData;
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
				_filteredHeroesData.heroes = action.initialData.heroes;
				HeroesStore.emitChange();
				break;
		case ActionTypes.FILTER_HEROES:
				_filteredHeroesData.heroes = action.payload.heroes;
				_filteredHeroesData.filter = action.payload.filter;
				HeroesStore.emitChange();
				break;
		default:
	}
});

module.exports = HeroesStore;
