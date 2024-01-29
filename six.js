
const age = 25; 
const isStudent = true; 

let ticketFare;

if (age < 10) {
    ticketFare = 0; // Children (age < 10) travel for free
} else if (isStudent) {
    ticketFare = 800 * 0.5; // Students get a 50% discount
} else if (age >= 60) {
    ticketFare = 800 * 0.15; // Senior citizens (age >= 60) get a 15% discount
} else {
    ticketFare = 800; // Regular ticket fare is 800 tk
}

console.log(`Ticket Fare: ${ticketFare.toFixed(2)} tk`);
