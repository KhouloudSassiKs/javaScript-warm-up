// Travel budget
let budget = 100;

// Trip costs
let ticketPrice = 120;
let specialServices = 30;

// Check what the budget can cover
if (budget >= ticketPrice + specialServices) {
    console.log("You can afford the ticket and the special services.");
} else if (budget >= ticketPrice) {
    console.log("You can afford the ticket, but not the special services.");
} else {
    console.log("You can’t afford the trip. Stay home and save your money.");
}
