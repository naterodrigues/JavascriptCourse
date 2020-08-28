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
//  TRUTHY VALUES: NOT falsy values
// BEST PRACTICE IS USING === IN LOGIC STATEMENTS

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

*/

var teamJohn, teamMike, teamMary;

teamJohn = (89+120+103)/3;
teamMike = (116+94+123)/3;
teamMary = (97+134+105)/3;

console.log(teamJohn,teamMike,teamMary);

if (teamJohn > teamMike && teamJohn > teamMary) {
    console.log('John\'s team is the winner with '+ teamJohn+' points!');
} else if (teamMike > teamJohn && teamMike > teamMary) {
    console.log('Mike\'s team is the winner with '+ teamMike+' points!');
} else if (teamMary > teamMike && teamMary > teamJohn) {
    console.log('Mary\'s team is the winner with '+ teamMary+' points!');
} else {
    console.log ('There was no winner, all teams drawed.');
}


console.log('Function Section');

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn,ageMike,ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1994,'Nate');


/* Function Statements and Expression */

// Function Declaration Example

// function whatDoYouDo(job,firstName) {};

// Function Expression. Expressions always result in a value.

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'; // We don't include the break when we hit return.
        case 'driver':
            return firstName + ' drives a cab in Sydney';
        case 'designer':
            return firstName + ' designs good websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));


