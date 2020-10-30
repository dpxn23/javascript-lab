//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = 'Designer'
let myLocation = 'Paris'
let annualSalary = '150000'
let companyName = 'Gucci'

console.log(`You will be a ${jobTitle} in ${myLocation} , making $${annualSalary} for ${companyName}`)

let eleOne = document.querySelector(`#ex1`)
eleOne.textContent = `You will be a ${jobTitle} in ${myLocation}, making $${annualSalary} for ${companyName}.`

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let yearN = '2020'
let birthYear = '1997'
let yearsOld = yearN - birthYear

console.log(`They are ${yearsOld} years old.`)

let eleTwo = document.querySelector(`#ex2`)
eleTwo.textContent = `They are ${yearsOld} years old.`

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let age = '23'
let maxAge = '100'
let perDay =  '3'

console.log(`You will need ${(maxAge-age)*perDay} snacks to last you until the ripe old age of ${maxAge}`)

let eleThree = document.querySelector(`#ex3`)
eleThree.textContent = `You will need ${(maxAge-age)*perDay} snacks to last you until the ripe old age of ${maxAge}`

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 6
const pi = Math.PI

console.log(`The circumference is ${2 * pi * radius}`)
console.log(`The area is ${pi * radius ** 2}`)

let eleFour = document.querySelector(`#ex4`)
eleFour.textContent = `The circumference is ${2 * pi * radius}. The area is ${pi * radius ** 2}.`

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = 36
let fahrenheit = (celsius*9/5) + 32

console.log(`${celsius}°C is ${fahrenheit}°F`)

let f2 = 100
let c2 = (f2 - 32) * 5/9

console.log(`${f2}°F is ${c2}°C`)

let eleFive = document.querySelector(`#ex5`)
eleFive.textContent = `${c2}°C is ${f2}°F and ${f2}°F is ${c2}°C.`

// EXERCISE 6
// Write a function named squareNumber that will take one argument 
//(a number), square that number, and return the result. 
//It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(x) {
    var result =Math.pow(x, 2);
    return result;
}

var x = 5

var squareResult = squareNumber(x);
console.log (`The result of squaring the number  ${x} is ${squareResult}.`);

let eleSix = document.querySelector("#ex6"); 
eleSix.textContent = (`The result of squaring the number ${x} is ${squareResult}.`);

// EXERCISE 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber (x) {
    var result = x/2;
    return result; 
}

var x = 20;
var halfResult = halfNumber(x);

console.log (`Half of ${x} is ${halfResult}.`);

let eleSeven = document.querySelector("#ex7"); 
eleSeven.textContent = (`Half of ${x} is ${halfResult}.`);

// EXERCISE 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(x,y) {
    var result = (x/y)*100;
    return result;
}

var x = 5;
var y = 10;
var percentResult = percentOf(x,y);

console.log (`${x} is ${percentResult}% of ${y}.`);

let eleEight = document.querySelector("#ex8");
eleEight.textContent = (`${x} is ${percentResult}% of ${y}.`);

// EXERCISE 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle (rad) {
    let area = Math.PI * (rad ** 2)

    console.log(`The area for a circle with radius ${rad} is ${area.toFixed(2)}.`)
    return area
}

areaOfCircle(7)

let eleNine = document.querySelector(`#ex9`)
eleNine.textContent = `The area for a circle with radius 7 is ${areaOfCircle(7).toFixed(2)}.`

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function runAll (num) {
    var x = 20;
    x /= 2; //1.
    x ** 2; //2.
    Math.PI * x ** 2; //3.
    x / 100; //4.

    console.log(`Running the number "20" through all sequences gives you ${x}.`)
    return result
}

let eleTen = document.querySelector(`#ex10`)
eleTen.textContent = `Running the number "20" through all sequences gives you ${x}.`