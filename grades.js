// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var A = 0
var B = 0
var C = 0
var D = 0
var F = 0
var lowScore = 61
var highScore = 90

//Evaluate if grade is an A, B, C, D or F
for(i = 0; i < scores.length; i++){
// A score of 50-60 is an F
	if (scores[i] > 50 && scores[i] <= 60){
		var F = F + 1
//Evaluate if grade is the lowest
		if(scores[i] < lowScore){
			lowScore = scores[i]
		}
// A score of 61-70 is a D
	}	else if (scores[i] <= 70){
		var D = D + 1
// A score of 71-80 is a C
	}	else if (scores[i] <= 80){
		var C = C + 1
// A score of 81-90 is a B
	}	else if (scores[i] <= 90){
		var B = B + 1
// A score of 91-100 is an A
	}	else if (scores[i] <= 100){
		var A = A + 1
//Evaluate if grade is highest
		if(scores[i] > highScore){
			highScore = scores[i]
		}
	}
}
console.log("There are ",A ," A's.");
console.log("There are ",B ," B's.");
console.log("There are ",C ," C's.");
console.log("There are ",D ," D's.");
console.log("There are ",F ," F's.");
console.log("Lowest grade = ",lowScore);
console.log("Highest grade = ",highScore);