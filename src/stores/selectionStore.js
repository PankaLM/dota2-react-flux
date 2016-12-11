"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var HeroesApi = require('../api/heroesApi');

var CHANGE_EVENT = 'change';

var _selection = {
  heroes: []
};

var SelectionStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getSelection: function() {
		return _selection;
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.SELECT_HERO:
			_selection.heroes.push(action.hero);
			SelectionStore.emitChange();
			break;
    case ActionTypes.RESET_SELECTION:
      _selection.heroes = [];
      SelectionStore.emitChange();
      break;
    default:
	}
});

module.exports = SelectionStore;
