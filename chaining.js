var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var spot = document.getElementById("here");


var sortedNumbers = integers.sort(function(first, second){
     return second - first;
});

// console.log("reversed sorted", sortedNumbers);




function nineteen(value){
	return value < 19;
}

function multAdd (value) {
	return (value*1.5)+1
}
// var lessers = sortedNumbers.filter(nineteen);

// console.log("under 19",lessers);

// var allless = lessers.length;
console.log("what the hell?", integers.sort(function(first, second){
     return second - first;
}).filter(nineteen).map(multAdd).reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}));


// for (var i = 0; i < allless; i++) {
// 	var changed = (lessers[i]*1.5)+1;
// 	console.log(changed)
// };



// console.log("whaa?", sortedNumbers.filter(nineteen).filter(multAdd));


// function multAdd (value) {
// 	return (value*1.5)+1;
// 	// console.log((value*1.5)+1);
// }


// for (var i = 0; i < redone.length; i++) {
// 	var mathed = [];
// 	mathed.push((redone[i]*1.5)+1);
// 	console.log("done?", mathed);
// }
var redone = sortedNumbers.filter(nineteen).map(multAdd);

// var mathed = redone.map(multAdd);

var sum = redone.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
console.log(sum);


here.innerHTML = sum;



