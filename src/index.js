var requestURL = '/src/data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();



console.log(requestURL);

var score = JSON.parse(score)
console.log(score);



// request.onload = function() {
//     var votes = request.response;
//     populateHeader(votes);
//     showHVotes(votes);
// }

// function showHVotes (jsonObj) {
//     var reactionScore = document.getElementById('reaction-score');

// }