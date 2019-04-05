const cheerio = require('cheerio')
const $ = cheerio.load('pfp.html')

var eventTitle = [];

$('.list.items .item').each(function(index, element){
	eventTitle[index] = {};
	var eventTitle = $(element).find('eds-media-card-content__title');
});

console.log(eventTitle); // Output the data in the terminal