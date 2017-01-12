var friendData = [ {
	name: "Justin Park",
	photo: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg",
	scores: [ 5,5,5,5,5,5,5,5,5,5]
},
{
	name: "LaShonda",
	photo: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg",
	scores: [ 1,1,1,1,1,1,1,1,1,1]
},
{
	name: "Dashiki",
	photo: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg",
	scores: [ 3,3,3,3,3,3,3,3,3,3]
},
{
	name: "Poco",
	photo: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg",
	scores: [ 3,3,3,3,3,3,3,3,3,3]
}
];

module.exports = friendData;

function calculateBestMatch () {
var totalScores = [];
for(var i=0; i < friendData[friendData.length-1].scores.length; i++) {
    var latestInput = parseInt((friendData[friendData.length-1].scores[i]))
}

for(var k = 0; k < friendData.length - 1; k++) {
	var result = (friendData[k].scores)
	var total = 0;
		for (var j = 0; j < result.length; j++) {
        var calculateDifference = Math.abs(parseInt(result[j]) - latestInput)
		var totalDifference = total += calculateDifference;


        }
		totalScores.push(totalDifference)
}

		 var min = Math.min.apply( null, totalScores )
		 console.log(min)
		 var index = totalScores.indexOf(Math.min(...totalScores));
		 var bestMatch = friendData[index];
         return bestMatch;
}

calculateBestMatch();

