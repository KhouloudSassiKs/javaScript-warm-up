// Decide on a travel destination based on budget and weather conditions
let budget = 1000;       // Our travel budget in dollars
let weatherSunny = true; // The weather is sunny

if (budget >= 1500 && weatherSunny) {
  console.log("Let's book a beach vacation!");
} else if (budget < 1500 && weatherSunny) {
  console.log("Let's plan a camping trip in the mountains!");
} else {
  console.log("Let's stay home and save for a bigger trip next time.");
}


