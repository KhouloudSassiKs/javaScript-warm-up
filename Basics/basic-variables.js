// Store a number in a variable and then change the value using an assignment operator
let starsCount = 9;  // Starting with 9 imaginary stars
starsCount *= 100;   // Multiply the number of stars by 100

console.log(starsCount);  // Outputs: 900

// Declare a variable named 'planet' and set its initial value
let planet = "Earth"; 

// Using an assignment operator to update the value of 'planet'
// Add "2026" to the variable using +=
planet += "2026"; 

// Log the current value to the console
console.log(planet); // Output: Earth2026


let planet = "Earth"; // Declaring a variable for our planet
console.log(planet); // Earth is our home in the cosmos

let numberOfMoons = 1; // Earth has one moon

// Equality check: Is Earth the same as Mars?
console.log("Does Earth == Mars?", planet == "Mars"); // false

// Strict equality: Does Earth have exactly one moon?
console.log("Number of Earth's moons === 1:", numberOfMoons === 1); // true

// Declaring a variable to store the number of planets in our solar system
let numberOfPlanets = "8"; // This is a string, not a number

// Use strict equality to compare numberOfPlanets to the number 8
console.log("Is the number of planets equal to 8?:", numberOfPlanets === 8); // false
console.log(Number(numberOfPlanets) === 8); // true

// Declare a variable 'planet' and assign it the name of our home planet.
let planet = "Earth";

// Define a variable 'moons' to hold the moon status of our planet, currently unknown.
let moons = null;

// Declare a variable 'galaxy' without assigning a value yet.
let galaxy;

// Compare the 'planet' using strict equality and print the result.
console.log("Comparing planet:", planet === "Earth"); // true

// Check if 'moons' is strictly equal to null.
console.log("Check if moons is null:", moons === null); // true

