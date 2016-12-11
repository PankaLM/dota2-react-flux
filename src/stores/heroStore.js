"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _heroes = [];

var HeroStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllHeroes: function(filter) {
		if(filter) {
			return _.filter(_heroes, function (hero) {
				return hero.indexOf(filter) >= 0;
			});
		} else {
			return _heroes;
		}
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_heroes = action.initialData.heroes;
			HeroStore.emitChange();
			break;
		default:
	}
});

module.exports = HeroStore;
