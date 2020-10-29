//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = 'Designer'
let myLocation = 'Paris'
let annualSalary = '150000'
let companyName = 'Gucci'

console.log(`You will be a ${jobTitle} in ${myLocation} , making $${annualSalary} for ${companyName}`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let yearN = '2020'
let birthYear = '1997'
let yearsOld = yearN - birthYear

console.log(`They are ${yearsOld} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let age = '23'
let maxAge = '100'
let perDay =  '3'

console.log(`You will need ${(maxAge-age)*perDay} to last you until the ripe old age of ${maxAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 6
const pi = Math.PI

console.log(`The circumference is ${2 * pi * radius}`)
console.log(`The area is ${pi * radius ** 2}`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = 36
let fahrenheit = (celsius*9/5) + 32

console.log(`${celsius}°C is ${fahrenheit}°F`)

let f2 = 100
let c2 = (f2 - 32) * 5/9

console.log(`${f2}°F is ${c2}°C`)