/**
 * Cinema Ticketing System
 * 
 * This script calculates ticket prices for a movie theatre with various
 * discount rules based on show timing, customer category, and booking quantity.
 */

// ========== USER INPUT VARIABLES ==========
// These variables represent ticket booking details
let showType = "Evening";         // Show type: "Morning" or "Evening"
let numTickets = 4;               // Number of tickets to book
let isStudent = true;             // Whether customer is a student
let isSenior = false;             // Whether customer is a senior (age > 60)
let age = 25;                     // Customer age (used for senior discount)

// ========== BASE TICKET PRICE DETERMINATION ==========
// Initialize base price based on show type
let basePrice = 0;

// Determine ticket price based on show timing
if (showType === "Morning") {
    basePrice = 120;              // Morning show: ₹120 per ticket
} else if (showType === "Evening") {
    basePrice = 180;              // Evening show: ₹180 per ticket
}

// ========== CALCULATE BASE TOTAL ==========
// Multiply base price by number of tickets
let baseTotal = basePrice * numTickets;

// ========== DISCOUNT APPLICATION ==========
// Initialize discount percentage
let discountPercentage = 0;

// Apply student discount (10% off)
if (isStudent) {
    discountPercentage = 10;      // Students get 10% discount
}

// Apply senior discount (20% off) - overrides student discount if applicable
if (age > 60) {
    discountPercentage = 20;      // Seniors (age > 60) get 20% discount
}

// ========== CALCULATE DISCOUNT AMOUNT ==========
// Compute total discount in rupees
let discountAmount = (baseTotal * discountPercentage) / 100;

// ========== CALCULATE DISCOUNTED TOTAL ==========
// Subtract discount from base total
let discountedTotal = baseTotal - discountAmount;

// ========== SERVICE FEE CALCULATION ==========
// Initialize service fee
let serviceFee = 0;

// Apply flat ₹50 service fee if booking more than 3 tickets
if (numTickets > 3) {
    serviceFee = 50;              // Service fee applies for bookings > 3 tickets
}

// ========== FINAL AMOUNT CALCULATION ==========
// Calculate final amount including service fee
let finalAmount = discountedTotal + serviceFee;

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display ticket pricing breakdown in a detailed format
console.log("========== CINEMA TICKETING SUMMARY ==========");
console.log(`Show Type: ${showType}`);
console.log(`Price per Ticket: ₹${basePrice}`);
console.log(`Number of Tickets: ${numTickets}`);
console.log(`Customer Type: ${isStudent ? "Student" : (age > 60 ? "Senior" : "General")}`);
console.log("------------------------------------------");
console.log(`Base Price (${numTickets} × ₹${basePrice}): ₹${baseTotal}`);
console.log(`Discount Applied: ${discountPercentage}%`);
console.log(`Discount Amount: -₹${discountAmount.toFixed(2)}`);
console.log(`Discounted Total: ₹${discountedTotal.toFixed(2)}`);
console.log(`Service Fee: ${serviceFee > 0 ? `₹${serviceFee}` : "None"}`);
console.log("------------------------------------------");
console.log(`Final Amount to Pay: ₹${finalAmount.toFixed(2)}`);
console.log("==========================================");
