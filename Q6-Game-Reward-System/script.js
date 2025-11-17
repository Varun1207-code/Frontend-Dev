/**
 * Game Reward System
 * 
 * This script calculates player rewards based on level completion,
 * performance score, mission completion, and assigns rank status.
 */

// ========== USER INPUT - PLAYER PERFORMANCE DATA ==========
// Player achievement statistics
let level = 15;                   // Current player level
let performanceScore = 75;        // Performance score (0-100)
let missionsCompleted = true;     // Whether all missions were completed

// ========== BASE COIN CALCULATION ==========
// Calculate coins earned from level and performance using the formula:
// coins = (level * 50) + (performanceScore * 10)
let coins = (level * 50) + (performanceScore * 10);

// ========== MISSION COMPLETION BONUS ==========
// If all missions were completed, double the coins earned
if (missionsCompleted) {
    coins = coins * 2;            // Double coins for mission completion
}

// ========== RANK ASSIGNMENT ==========
// Assign rank based on total coins earned
let rank = "";

if (coins > 1000) {
    rank = "Elite";               // Rank "Elite" for coins > 1000
} else {
    rank = "Regular";             // Rank "Regular" for coins ≤ 1000
}

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display player rewards and rank in a detailed format
console.log("========== GAME REWARD SYSTEM ==========");
console.log("Player Performance:");
console.log(`Level: ${level}`);
console.log(`Performance Score: ${performanceScore}/100`);
console.log(`Missions Completed: ${missionsCompleted ? "Yes" : "No"}`);
console.log("------------------------------------------");

// Display coin calculation breakdown
console.log("Coin Calculation:");
console.log(`Base Coins: (${level} × 50) + (${performanceScore} × 10) = ${(level * 50) + (performanceScore * 10)}`);

// Show bonus if missions were completed
if (missionsCompleted) {
    let baseCoins = (level * 50) + (performanceScore * 10);
    console.log(`Mission Bonus: × 2`);
    console.log(`Total Coins: ${baseCoins} × 2 = ${coins}`);
} else {
    console.log(`Total Coins: ${coins}`);
}

console.log("------------------------------------------");
console.log(`🏆 Rank Assigned: ${rank}`);
console.log(`Total Coins Earned: ${coins}`);
console.log("=========================================");
