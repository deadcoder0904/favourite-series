$(document).ready(() => {
	const { series }= require('./series.json')
	const seriesDetails = $("#seriesDetails:first");
	let arr = [];
	let i = 0;
	while (i < series.length) {
		const poster = series[i].poster;
		$.getJSON("http://www.omdbapi.com/?t=" + series[i].name.toLowerCase() + "&y=&plot=short&r=json",(data) => {
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
