/**
 * Restaurant Billing with Tips
 * 
 * This script calculates the complete bill including taxes and tips
 * based on food cost and dining location.
 */

// ========== USER INPUT - BILLING INFORMATION ==========
// Restaurant bill details
let baseFoodCost = 2500;          // Base food cost in rupees
let isDiningIn = true;            // Whether customer is dining in (true) or takeout (false)

// ========== GST CALCULATION (5% of base cost) ==========
// GST (Goods and Services Tax) is a mandatory tax applied to food items
let gst = (baseFoodCost * 5) / 100;

// ========== SERVICE TAX CALCULATION ==========
// Service tax is applied only for dine-in customers, not for takeout
let serviceTax = 0;

if (isDiningIn) {
    serviceTax = (baseFoodCost * 10) / 100;  // 10% service tax for dine-in
}

// ========== CALCULATE SUBTOTAL (before tip) ==========
// Subtotal = base cost + GST + service tax
let subtotal = baseFoodCost + gst + serviceTax;

// ========== TIP CALCULATION ==========
// Initialize tip amount variable
let tipAmount = 0;

// If subtotal exceeds ₹2000, recommend 8% tip on the subtotal
if (subtotal > 2000) {
    tipAmount = (subtotal * 8) / 100;
}

// ========== FINAL TOTAL CALCULATION ==========
// Final total = subtotal + tip
let finalTotal = subtotal + tipAmount;

// Round to two decimal places for currency representation
finalTotal = Math.round(finalTotal * 100) / 100;
gst = Math.round(gst * 100) / 100;
serviceTax = Math.round(serviceTax * 100) / 100;
tipAmount = Math.round(tipAmount * 100) / 100;
subtotal = Math.round(subtotal * 100) / 100;

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display complete billing breakdown in a professional format
console.log("========== RESTAURANT BILLING SUMMARY ==========");
console.log("Dining Details:");
console.log(`Service Type: ${isDiningIn ? "Dine-In" : "Takeout"}`);
console.log("------------------------------------------");

// Display base costs and taxes
console.log("Cost Breakdown:");
console.log(`Base Food Cost: ₹${baseFoodCost.toFixed(2)}`);
console.log(`GST (5%): ₹${gst.toFixed(2)}`);
console.log(`Service Tax (${isDiningIn ? "10%" : "0%"}): ₹${serviceTax.toFixed(2)}`);
console.log("------------------------------------------");

// Display subtotal and tip information
console.log("Bill Calculation:");
console.log(`Subtotal (Base + GST + Service Tax): ₹${subtotal.toFixed(2)}`);
console.log(`Recommended Tip (${subtotal > 2000 ? "8%" : "0%"}): ₹${tipAmount.toFixed(2)}`);
console.log("------------------------------------------");

// Display final amount due
console.log(`Final Total Amount: ₹${finalTotal.toFixed(2)}`);
console.log("=======================================");
