/**
 * Library Fine Calculator
 * 
 * This script calculates fines for delayed book returns using tiered pricing,
 * and applies penalties for multiple late returns.
 */

// ========== USER INPUT - DELAYED BOOK RETURNS ==========
// Array of objects containing details of late book returns
// Each object has: bookName and delayedDays (number of days overdue)
let delayedBooks = [
    { bookName: "JavaScript Mastery", delayedDays: 3 },
    { bookName: "Web Development Basics", delayedDays: 7 },
    { bookName: "Advanced CSS", delayedDays: 15 },
    { bookName: "Database Design", delayedDays: 4 }
];

// ========== FINE CALCULATION LOGIC ==========
// Initialize total fine and detailed fine breakdown
let totalFine = 0;
let fineDetails = [];

// ========== LOOP THROUGH EACH DELAYED BOOK ==========
// Process each delayed book return and calculate applicable fine
for (let i = 0; i < delayedBooks.length; i++) {
    // Extract delay period and initialize fine for this book
    let days = delayedBooks[i].delayedDays;
    let bookFine = 0;
    let fineRate = 0;
    
    // ========== APPLY TIERED FINE RATES ==========
    // Determine fine rate based on number of delayed days
    if (days >= 1 && days <= 5) {
        fineRate = 10;              // ₹10 per day for 1-5 days delay
        bookFine = days * fineRate;
    } else if (days >= 6 && days <= 10) {
        fineRate = 20;              // ₹20 per day for 6-10 days delay
        bookFine = days * fineRate;
    } else if (days > 10) {
        fineRate = 50;              // ₹50 per day for 11+ days delay
        bookFine = days * fineRate;
    }
    
    // Add book fine to total fine
    totalFine += bookFine;
    
    // Store fine details for each book
    fineDetails.push({
        book: delayedBooks[i].bookName,
        days: days,
        rate: fineRate,
        fine: bookFine
    });
}

// ========== COUNT DELAYED RETURNS ==========
// Determine number of delayed book returns
let numberOfDelayedBooks = delayedBooks.length;

// ========== PENALTY FOR MULTIPLE LATE RETURNS ==========
// Apply additional penalty if more than 3 books are delayed
let penalty = 0;
if (numberOfDelayedBooks > 3) {
    penalty = 200;                // ₹200 penalty for more than 3 late returns
    totalFine += penalty;         // Add penalty to total fine
}

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display detailed fine summary with book-by-book breakdown
console.log("========== LIBRARY FINE CALCULATOR ==========");
console.log(`Total Delayed Books: ${numberOfDelayedBooks}`);
console.log("------------------------------------------");

// Display fine breakdown for each book
console.log("Fine Breakdown by Book:");
for (let i = 0; i < fineDetails.length; i++) {
    console.log(`${i + 1}. ${fineDetails[i].book}`);
    console.log(`   Days Delayed: ${fineDetails[i].days}`);
    console.log(`   Fine Rate: ₹${fineDetails[i].rate}/day`);
    console.log(`   Fine Amount: ₹${fineDetails[i].fine}`);
}

console.log("------------------------------------------");

// Display total fine before penalty
console.log("Fine Summary:");
let fineBeforePenalty = totalFine - penalty;
console.log(`Total Fine (without penalty): ₹${fineBeforePenalty}`);

// Display penalty information if applicable
if (penalty > 0) {
    console.log(`⚠️ Late Return Penalty (${numberOfDelayedBooks} books > 3): ₹${penalty}`);
} else {
    console.log("Late Return Penalty: None");
}

console.log("------------------------------------------");
console.log(`🔴 TOTAL FINE DUE: ₹${totalFine}`);
console.log("==========================================");
