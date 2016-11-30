(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(() => {
	const { movies } = require('./movies.json');
	const movieDetails = $("#movieDetails:first");
	let arr = [];
	let i = 0;
	while (i < movies.length) {
		$.getJSON("http://www.omdbapi.com/?t=" + movies[i].toLowerCase() + "&y=&plot=short&r=json", data => {
			arr = [];
			arr.push("<a target='_blank' href='http://www.imdb.com/title/" + data.imdbID + "' class='fl w-50 w-25-l link overflow-hidden'>");
			arr.push("<div class='ba b--black-10 pa2 grow'>");
			arr.push("<div class='grow aspect-ratio--4x6 ' style='background: url(" + data.Poster + ") no-repeat center center; background-size: cover;'>");
			arr.push("</div>");
			arr.push("<h1 class='tc bg-gray white'>" + data.Released + "</h1>");
			arr.push("<h2 class='tc bg-gray white'> IMDB Rating: " + data.imdbRating + "</h2>");
			arr.push("</div>");
			arr.push("</a>");
			movieDetails.append(arr.join(''));
		});
		i++;
	}
});

},{"./movies.json":2}],2:[function(require,module,exports){
module.exports={
	"movies" : [
							"The Usual Suspects",
							"The Shawshank Redemption",
							"Se7en",
							"Fight Club",
							"Good Will Hunting",
							"The Wolf of Wall Street",
							"Pirates of the Caribbean: The Curse of the Black Pearl",
							"Pirates of the Caribbean: Dead Man's Chest",
							"Pirates of the Caribbean: At World's End",
							"Pirates of the Caribbean: On Stranger Tides",
							"Laal Rang",
							"Hum Dil De Chuke Sanam"
						]
}

},{}]},{},[1]);
