/**
 * Random Coupon Generator
 * 
 * This script generates random discount coupons and provides reward messages
 * based on the generated number, including prime number bonus detection.
 */

// ========== HELPER FUNCTION - PRIME NUMBER CHECKER ==========
/**
 * Checks if a number is prime
 * A prime number is only divisible by 1 and itself
 * @param {number} num - The number to check
 * @returns {boolean} - True if prime, false otherwise
 */
function isPrimeNumber(num) {
    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    
    // Check if number is divisible by any number from 2 to sqrt(num)
    // If a divisor is found, number is not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;           // Found a divisor, not prime
        }
    }
    
    // No divisors found, number is prime
    return true;
}

// ========== GENERATE RANDOM COUPON NUMBER ==========
// Generate a random number between 1 and 100 (inclusive)
let couponNumber = Math.floor(Math.random() * 100) + 1;

// ========== DETERMINE DISCOUNT TIER ==========
// Initialize reward message based on coupon number ranges
let rewardMessage = "";
let discountPercentage = 0;

// Assign discount and reward message based on coupon number ranges
if (couponNumber <= 30) {
    rewardMessage = "You won a 10% discount";
    discountPercentage = 10;
} else if (couponNumber >= 31 && couponNumber <= 60) {
    rewardMessage = "You won a 20% discount";
    discountPercentage = 20;
} else if (couponNumber >= 61 && couponNumber <= 90) {
    rewardMessage = "You won a 30% discount";
    discountPercentage = 30;
} else if (couponNumber >= 91 && couponNumber <= 100) {
    rewardMessage = "You won a 50% Mega Offer!";
    discountPercentage = 50;
}

// ========== CHECK FOR PRIME NUMBER BONUS ==========
// Determine if the generated number is prime for bonus message
let isPrime = isPrimeNumber(couponNumber);

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display coupon details and reward information
console.log("========== RANDOM COUPON GENERATOR ==========");
console.log("🎉 Coupon Generated!");
console.log("------------------------------------------");

// Display coupon number and reward
console.log(`Coupon Number: ${couponNumber}`);
console.log(`Discount Tier: ${discountPercentage}%`);
console.log(`💰 ${rewardMessage}`);
console.log("------------------------------------------");

// Display prime number bonus if applicable
if (isPrime) {
    console.log("⭐ BONUS ALERT!");
    console.log(`Prime number bonus applied`);
    console.log(`(${couponNumber} is a prime number)`);
} else {
    console.log(`Note: ${couponNumber} is not a prime number`);
}

console.log("------------------------------------------");
console.log("Thank you for shopping with us!");
console.log("==========================================");
