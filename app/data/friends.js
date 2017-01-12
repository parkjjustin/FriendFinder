var friendData = [ {
	name: "Justin Park",
	photo: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg",
	scores: [ "2", "2", "2", "2", "2", "2", "2", "2", "2", "2" ]
},
{
	name: "LaShonda",
	photo: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg",
	scores: [ "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
			 
},
{
	name: "Dashiki",
	photo: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg",
	scores: [ "3", "3", "3", "3","3", "3", "3", "3", "3", "3"]
			 
},
{
	name: "Poco",
	photo: "https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg",
	scores: [ "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
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

