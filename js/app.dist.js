(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(() => {
	const { series } = require('./series.json');
	const seriesDetails = $("#seriesDetails:first");
	let arr = [];
	let i = 0;
	while (i < series.length) {
		const poster = series[i].poster;
		$.getJSON("http://www.omdbapi.com/?t=" + series[i].name.toLowerCase() + "&y=&plot=short&r=json", data => {
			arr = [];
			arr.push("<a target='_blank' href='http://www.imdb.com/title/" + data.imdbID + "' class='fl w-50 w-25-l link overflow-hidden'>");
			arr.push("<div class='ba b--black-10 pa2 grow'>");
			arr.push("<div class='grow aspect-ratio--4x6' style='background: url(" + poster + ") no-repeat center center; background-size: cover;'>");
			arr.push("</div>");
			arr.push("<h4 class='tc bg-gray white'>" + data.Title + "</h4>");
			arr.push("<h2 class='tc bg-gray white'>" + data.Released + "</h2>");
			arr.push("<h3 class='tc bg-gray white'> IMDB Rating: " + data.imdbRating + "</h3>");
			arr.push("</div>");
			arr.push("</a>");
			seriesDetails.append(arr.join(''));
		});
		i++;
	}
});

},{"./series.json":2}],2:[function(require,module,exports){
module.exports={
	"series" : [
							{
								"name": "Dexter",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_SX300.jpg"
							},
							{
								"name": "Game of Thrones",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg"
							},
							{
								"name": "Friends",
								"poster": "http://stuffpoint.com/friends/image/260868-friends-friends-poster.jpg"
							},
							{
								"name": "Mr Robot",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMDE2MzI4MF5BMl5BanBnXkFtZTgwNTkxODgxOTE@._V1_SX300.jpg"
							},
							{
								"name": "How to get away with murder",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMzNDEzNTcwMV5BMl5BanBnXkFtZTgwMjc5Mjg5NjE@._V1_SX300.jpg"
							},
							{
								"name": "Stranger Things",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_SX300.jpg"
							},
							{
								"name": "Breaking Bad",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
							},
							{
								"name": "Narcos",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg"
							},
							{
								"name": "Silicon Valley",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwNTUzNzIxM15BMl5BanBnXkFtZTgwMzQ1NTk2ODE@._V1_SX300.jpg"
							},
							{
								"name": "Quantico",
								"poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NjU1NTkyMl5BMl5BanBnXkFtZTgwMzk5Mjg5NjE@._V1_SX300.jpg"
							}
						]
}

},{}]},{},[1]);
