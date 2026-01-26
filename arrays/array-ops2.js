// Array representing seat reservation status in a cinema row
let cinemaSeats = [false, true, false, true, false];

// A new person books the third seat
cinemaSeats[2] = true;

// Check the updated reservation status
console.log("Which seats are booked?", cinemaSeats);
