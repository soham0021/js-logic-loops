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
// else statement

if (5>20) {
	console.log('test returns fals, so we are pused to the else ')
}else{
	console.log('we ended up in our else statement');
}

var num = 5;
//check to see if that  vat is >10
//if it is, alert()
//else,alert('sorryyoulost'). stick the var on the end
if (num > 10) {
	alert('you won')
}else{
	alert('sorry you lose, the var is' + num);
}

// compare strings 

var mage = 'deadly';
// are these equal in type and value
if (mage === 'badass') {
	alert('not gone happned');
}else{
	console.log('Sorry,it was' + mage)
}

// else if statement
if (5>10) {
	alert('you wont\'t end up here');
}else if (5>100){
	alert('you will not end up here either')
}else{
	alert('Here we are')
}

// Creating a named funcation fuction 
function addNumbers (number1,number2,foo,bar,soham){
	var addedNumbers = number1 + number2;
	console.log('adding numbers: the result is ' + addedNumbers);
}

//invoke our funcation
addNumbers(5,5);

// creta a factuion that talkes single argument
function myName(fName){
	console.log('my name is' + fName)
}

// now invoke our function
myName('Soham');

// creat a funcation stored inside of a variable

var myRealName = function(fName) {
	console.log('me real name is' + fName)
};

myName('Patel');

// creat a funcation stored in a varible
//allow it to take "door" as an argument
// based on the value of "door", do some diffrent things

var selectDoor = function(pDoor,combo,pDoor2,pDoor3,red,green,blue) {
	var combo = red + green;
	if(pDoor === red){
		console.log('you got 5% off on your pizza')
	}else if(pDoor2 === green){
		console.log('you got 10% off on your pizza')
	}else{
		console.log('you get combined discount' + combo);
	}
}
selectDoor(5,10);

// creat an array inside of a varible 
var cartoons= [ 'Garfield','snoopy','heathcliff'];
console.log(cartoons[1]);
// find the index of an iteam in a array
var snoopyIndex = cartoons.indexOf('snoopy');
console.log(snoopyIndex); // logs 1 to the console

//get the lenth of an array
console.log(cartoons.length);

// for loop
for (var i = 0; i < 10; i++){
	console.log(i);
}

//use a for loop to iterate over an array 
var cars=['scion', 'toyota','acura'];
for(var i =0; i < cars.length; i++){
	console.log(cars[i]);
}

var frindsName=['sam my dude','dan my dude','ben my dude','ten my dude']
for (var i = 0; i < frindsName.length; i++) {
	console.log(frindsName[i]);
}