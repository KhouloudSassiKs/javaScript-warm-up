// Function that calculates the area of a circle
function circleArea(radius, pi) {
    return pi * radius * radius; // Use the passed pi value
}

// The radius of the Sun's surface (approximate mean radius)
const sunRadius = 695700; // in kilometers
const accuratePi = 3.141592653589793;

console.log(
  "The area of the Sun's surface circle is: " +
  circleArea(sunRadius, accuratePi) +
  " square kilometers."
); // Outputs the area of the Sun's surface circle with a message
