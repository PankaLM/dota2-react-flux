"use strict";

var heroes = require('./heroesData').heroes;
var _ = require('lodash');

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var HeroesApi = {
	getAllHeroes: function() {
		return _.keys(heroes);
	},
	getHeroesComparisonResults: function (heroesToCompare) {
		var result = [];
		_.each(heroesToCompare, function (heroToCompare){
			var heroResult = 0;
			var currentHeroData = heroes[heroToCompare];
			_.each(heroesToCompare, function(name) {
				if(name !== heroToCompare) {
					var value = _.filter(currentHeroData, function(data){
						return !!data[name];
					});
					heroResult += value[0][name];
				}
			});
			result.push({hero: heroToCompare, result: heroResult});
		});
		return result;
	}
};

module.exports = HeroesApi;
