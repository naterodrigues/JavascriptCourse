// CODING CHALLENGE 1
/*
var massMark = 78;
var heightMark = 1.69;
var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark)
var BMIJohn = massJohn / (heightJohn * heightJohn)

var markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

// IF/ELSE STATEMENTS


var firstName = 'John';
var civilStatus = 'single';
var isMarried = true;

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon');
}


// USE IF/ELSE STATEMENT TO IMPROVE ABOVE

var massMark = 78;
var heightMark = 1.69;
var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark)
var BMIJohn = massJohn / (heightJohn * heightJohn)

var markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than Johns');
} else {
    console.log ('John\'s BMI is higher than Marks');
}

// BOOLEAN LOGIC

var firstName = 'John'
var age = 16;

if (age < 13){
    console.log (firstName + ' is a boy.'); 
} else if (age >= 13 && age < 20 ) {
     console.log (firstName + ' is a teenager.');
} else {
    console.log (firstName  + ' is a man.');
}

*/

// TERNARY OPERATOR AND SWITCH STATEMENTS


var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log (drink);

var job = 'teacher';

switch(job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs nice sites.');
        break;

    default:
        console.log(firstName + ' does something else');
}

//  FALSY VALUES: Undefined, null, 0, '', NaN will be evaluated to false

