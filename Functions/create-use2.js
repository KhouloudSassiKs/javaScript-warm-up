// Function to calculate a new weight based on different gravity
let gravityRatio = 8.9;

function calculateNewWeight(weight) {
  return weight * gravityRatio; // Apply the gravity ratio
}

// Using the function to calculate a weight of 70 units in a new environment
console.log(calculateNewWeight(470)); // Outputs the new weight
