/**
 * E-Commerce Delivery Estimator
 * 
 * This script calculates the total delivery cost and estimated delivery time
 * based on order amount, premium membership status, and delivery address type.
 */

// ========== USER INPUT VARIABLES ==========
// These variables represent customer order details
let orderAmount = 450;          // Order amount in rupees
let isPremium = false;          // Whether customer is a premium member
let isRemote = true;            // Whether delivery address is marked as remote

// ========== DELIVERY FEE CALCULATION ==========
// Determine delivery fee based on order amount and membership status
let deliveryFee = 0;

// Check if order is below 500 rupees and customer is not premium
if (orderAmount < 500 && !isPremium) {
    deliveryFee = 50;           // Add 50 rupee delivery fee for small orders
}

// If customer is premium, delivery is always free (fee remains 0)
if (isPremium) {
    deliveryFee = 0;            // Premium members get free delivery
}

// ========== TOTAL COST CALCULATION ==========
// Calculate final total including delivery fee
let totalCost = orderAmount + deliveryFee;

// ========== DELIVERY TIME ESTIMATION ==========
// Base delivery time is 3 days
let deliveryDays = 3;

// Add 2 extra days if address is marked as remote
if (isRemote) {
    deliveryDays += 2;          // Remote addresses require 5 days total
}

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display results in a clear, professional format
console.log("========== DELIVERY ESTIMATOR RESULTS ==========");
console.log(`Order Amount: ₹${orderAmount}`);
console.log(`Premium Member: ${isPremium ? "Yes" : "No"}`);
console.log(`Delivery Address: ${isRemote ? "Remote" : "Regular"}`);
console.log("------------------------------------------");
console.log(`Delivery Fee: ₹${deliveryFee}`);
console.log(`Total Cost (Including Delivery): ₹${totalCost}`);
console.log(`Estimated Delivery Time: ${deliveryDays} days`);
console.log("==========================================");
