"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var HeroesApi = require('../api/heroesApi');

var CHANGE_EVENT = 'change';

var _comparisons = {
  heroes: [],
  results: []
};

var ComparisonStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getComparisons: function() {
		return _comparisons;
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.ADD_HERO_FOR_COMPARISON:
			_comparisons.heroes.push(action.hero);
			ComparisonStore.emitChange();
			break;
    case ActionTypes.COMPARE_HEROES:
      _comparisons.results = action.results;
      ComparisonStore.emitChange();
      break;
    default:
	}
});

module.exports = ComparisonStore;
