/**
 * Weather Alert System
 * 
 * This script evaluates weather conditions for outdoor event safety
 * and provides temperature-based clothing recommendations.
 */

// ========== USER INPUT - WEATHER DATA ==========
// Current weather conditions at the event location
let temperature = 38;             // Temperature in Celsius
let humidity = 75;                // Humidity percentage
let windSpeed = 25;               // Wind speed in km/h

// ========== EVENT APPROVAL LOGIC ==========
// Initialize approval status variable
let eventStatus = "";
let alertMessage = "";

// ========== CHECK HEAT ALERT CONDITIONS ==========
// Both high temperature AND high humidity indicate dangerous heat conditions
if (temperature > 35 && humidity > 70) {
    eventStatus = "CANCELLED";
    alertMessage = "Cancel: Heat Alert.";  // Event too hot and humid
}
// ========== CHECK COLD/WINDY ALERT CONDITIONS ==========
// If not already cancelled, check for cold or windy conditions
else if (temperature < 10 || windSpeed > 40) {
    eventStatus = "CANCELLED";
    alertMessage = "Cancel: Cold/Windy Alert.";  // Event too cold or too windy
}
// ========== DEFAULT: EVENT APPROVED ==========
else {
    eventStatus = "APPROVED";
    alertMessage = "Event Approved.";  // Weather conditions are safe
}

// ========== TEMPERATURE-BASED CLOTHING RECOMMENDATION ==========
// Initialize recommendation message
let clothingRecommendation = "";

// Provide clothing advice based on temperature ranges
if (temperature < 20) {
    clothingRecommendation = "Wear Jacket";      // Below 20°C: jackets needed
} else if (temperature >= 20 && temperature <= 30) {
    clothingRecommendation = "Comfortable";      // 20-30°C: comfortable conditions
} else if (temperature > 30) {
    clothingRecommendation = "Stay Hydrated";    // Above 30°C: need hydration
}

// ========== OUTPUT RESULTS TO CONSOLE ==========
// Display weather analysis and recommendations in a detailed format
console.log("========== WEATHER ALERT SYSTEM ==========");
console.log("Current Weather Conditions:");
console.log(`Temperature: ${temperature}°C`);
console.log(`Humidity: ${humidity}%`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log("------------------------------------------");

// Display event approval status with alert details
console.log(`Event Status: ${eventStatus}`);
console.log(`Alert: ${alertMessage}`);
console.log("------------------------------------------");

// Display temperature-based recommendation
console.log(`Clothing Recommendation: ${clothingRecommendation}`);
console.log("==========================================");
