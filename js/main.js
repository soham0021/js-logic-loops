// creat a variable with string stored inside
var lol = 'soham';
// creat a variable with a number stored inside
var number = 3;
// creat a variable with a boolen stored inside
var killit = true;
// creat a variable with an array stored inside
var champtype =['mage','figher','suport','tanks','marksman'];
// creat a variable with an object stored inside
var info = {
	kill: 10,
	death: 2,
	assaist:5,
	game:champtype
};
console.log(info);

// accese an objects property using dot notation
console.log(info.info);

// access an iteam in a array using its index
console.log(info.game[0]); // logs 'mage'

// if statements
// because this test is fals, console.log never runs
if (5>10) {
	console.log('You will never see this');
}

// because this test is true, console.log will run

if (5<=10) {
	console.log('this is so true');
}