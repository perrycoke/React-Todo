// function add (a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Anna', 'Paul'];
// var groupB = ['Tom'];
// var final = [...groupB, ...groupA];

// console.log(final)

var person = ['Andy', 37];
var personTwo = ['Jen', 29];

function Hello(name, age) {
	return 'Hi ' + name + ', you are ' + age;
}

console.log(Hello(...person));
console.log(Hello(...personTwo));

var names = ['Mike', 'Ben'];
var final = [...names, 'Kezza'];

final.forEach(function(name) {
	console.log('Hi ' + name);
});