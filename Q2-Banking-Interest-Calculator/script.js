/**
 * Banking Interest Calculator
 * 
 * This script calculates the final balance after compound interest is applied
 * based on account type, deposit amount, and time period.
 */

// ========== USER INPUT VARIABLES ==========
// These variables represent account details
let accountType = "Fixed Deposit";  // Account type: "Savings" or "Fixed Deposit"
let amount = 150000;                // Initial deposit amount in rupees
let years = 3;                      // Investment period in years

// ========== INTEREST RATE DETERMINATION ==========
// Initialize interest rate based on account type
let interestRate = 0;

// Determine base interest rate based on account type
if (accountType === "Savings") {
    interestRate = 4;               // Savings account: 4% annual interest
} else if (accountType === "Fixed Deposit") {
    interestRate = 6.5;             // Fixed deposit: 6.5% annual interest
}

// ========== BONUS INTEREST CALCULATION ==========
// Check if deposit amount exceeds 1,00,000 rupees
if (amount > 100000) {
    interestRate += 1;              // Add 1% bonus interest for large deposits
}

// ========== FINAL BALANCE CALCULATION ==========
// Apply compound interest formula: total = amount * Math.pow((1 + rate/100), years)
// This calculates how much the initial investment grows after the specified period
let finalBalance = amount * Math.pow((1 + interestRate / 100), years);

// Round to two decimal places for currency representation
finalBalance = Math.round(finalBalance * 100) / 100;

// ========== CALCULATE INTEREST EARNED ==========
// Determine total interest earned during the investment period
let interestEarned = finalBalance - amount;
interestEarned = Math.round(interestEarned * 100) / 100;

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display investment details and final balance in a clear format
console.log("========== BANKING INTEREST CALCULATOR ==========");
console.log(`Account Type: ${accountType}`);
console.log(`Initial Deposit: ₹${amount.toLocaleString('en-IN')}`);
console.log(`Investment Period: ${years} years`);
console.log("------------------------------------------");
console.log(`Base Interest Rate: ${accountType === "Savings" ? "4%" : "6.5%"}`);
console.log(`Bonus Applied: ${amount > 100000 ? "Yes (+1%)" : "No"}`);
console.log(`Total Interest Rate: ${interestRate}%`);
console.log("------------------------------------------");
console.log(`Interest Earned: ₹${interestEarned.toLocaleString('en-IN')}`);
console.log(`Final Balance: ₹${finalBalance.toLocaleString('en-IN')}`);
console.log("================================================");
