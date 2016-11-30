$(document).ready(() => {
	const { series }= require('./series.json')
	const seriesDetails = $("#seriesDetails:first");
	let arr = [];
	let i = 0;
	while (i < series.length) {
		$.getJSON("http://www.omdbapi.com/?t=" + series[i].toLowerCase() + "&y=&plot=short&r=json",(data) => {
			arr = [];
			arr.push("<a target='_blank' href='http://www.imdb.com/title/" + data.imdbID + "' class='fl w-50 w-25-l link overflow-hidden'>");
	    arr.push("<div class='ba b--black-10 pa2 grow'>");
	    arr.push("<div class='grow aspect-ratio--4x6 ' style='background: url(" + data.Poster + ") no-repeat center center; background-size: cover;'>");
	    arr.push("</div>");
	    arr.push("<h1 class='tc bg-gray white'>" + data.Released + "</h1>");
	    arr.push("<h2 class='tc bg-gray white'> IMDB Rating: " + data.imdbRating + "</h2>");
	    arr.push("</div>");
			arr.push("</a>");
			seriesDetails.append(arr.join(''));
		});
		i++;
	}

});
