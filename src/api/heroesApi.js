"use strict";

var heroes = require('./heroesData').heroes;
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var HeroesApi = {
	getHeroes: function(filter) {
		var allHeroes = _.keys(heroes);
		if(filter) {
			return _.filter(allHeroes, function (heroName) {
				return heroName.indexOf(filter) >= 0;
			});
		} else {
			return allHeroes;
		}
	}
};

module.exports = HeroesApi;
