/**
 * Employee Bonus Distribution
 * 
 * This script calculates annual employee bonuses based on performance rating,
 * years of experience, and salary constraints.
 */

// ========== USER INPUT - EMPLOYEE DETAILS ==========
// Employee performance and compensation information
let baseSalary = 120000;          // Base annual salary in rupees
let performanceRating = 4;        // Performance rating (1-5 scale)
let yearsExperience = 7;          // Years of experience with company

// ========== DETERMINE BASE BONUS PERCENTAGE ==========
// Initialize bonus percentage based on performance rating
let bonusPercentage = 0;

// Assign bonus percentage based on performance rating
if (performanceRating === 5) {
    bonusPercentage = 20;         // Rating 5: 20% bonus
} else if (performanceRating === 4) {
    bonusPercentage = 15;         // Rating 4: 15% bonus
} else if (performanceRating === 3) {
    bonusPercentage = 10;         // Rating 3: 10% bonus
} else if (performanceRating < 3) {
    bonusPercentage = 0;          // Rating below 3: no bonus
}

// ========== EXPERIENCE BONUS ADDITION ==========
// Add 5% extra bonus for employees with more than 5 years experience
if (yearsExperience > 5) {
    bonusPercentage += 5;         // Additional 5% for experience > 5 years
}

// ========== CALCULATE BONUS AMOUNT ==========
// Calculate the bonus based on base salary and bonus percentage
let calculatedBonus = (baseSalary * bonusPercentage) / 100;

// ========== APPLY BONUS CAP ==========
// Initialize final bonus amount
let finalBonus = calculatedBonus;

// If base salary exceeds 1,00,000 rupees, cap the bonus at 25,000
if (baseSalary > 100000 && calculatedBonus > 25000) {
    finalBonus = 25000;           // Cap bonus at ₹25,000
}

// ========== CALCULATE TOTAL SALARY AFTER BONUS ==========
// Add the bonus to base salary to get total compensation
let totalSalaryAfterBonus = baseSalary + finalBonus;

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display bonus calculation and salary details in a professional format
console.log("========== EMPLOYEE BONUS DISTRIBUTION ==========");
console.log("Employee Information:");
console.log(`Base Salary: ₹${baseSalary.toLocaleString('en-IN')}`);
console.log(`Performance Rating: ${performanceRating}/5`);
console.log(`Years of Experience: ${yearsExperience} years`);
console.log("------------------------------------------");

// Display bonus calculation breakdown
console.log("Bonus Calculation:");
let ratingBonus = 0;
if (performanceRating === 5) ratingBonus = 20;
else if (performanceRating === 4) ratingBonus = 15;
else if (performanceRating === 3) ratingBonus = 10;

console.log(`Base Bonus (Rating ${performanceRating}): ${ratingBonus}%`);
console.log(`Experience Bonus (${yearsExperience} > 5 years): ${yearsExperience > 5 ? "+5%" : "0%"}`);
console.log(`Total Bonus Rate: ${bonusPercentage}%`);
console.log("------------------------------------------");

// Display calculated and final bonus amounts
console.log("Bonus Details:");
console.log(`Calculated Bonus (${bonusPercentage}% of ₹${baseSalary}): ₹${calculatedBonus.toLocaleString('en-IN')}`);

if (baseSalary > 100000 && calculatedBonus > 25000) {
    console.log(`Bonus Capped At: ₹${finalBonus.toLocaleString('en-IN')}`);
    console.log(`⚠️ Note: Bonus capped due to salary exceeding ₹100,000`);
} else {
    console.log(`Final Bonus: ₹${finalBonus.toLocaleString('en-IN')}`);
}

console.log("------------------------------------------");
console.log(`Total Annual Salary (Base + Bonus): ₹${totalSalaryAfterBonus.toLocaleString('en-IN')}`);
console.log("=======================================");
