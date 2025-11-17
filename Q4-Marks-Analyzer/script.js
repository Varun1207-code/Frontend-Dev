/**
 * Marks Analyzer
 * 
 * This script analyzes student performance by calculating average marks,
 * percentage, grade assignment, and determines if the student needs to repeat.
 */

// ========== USER INPUT - STUDENT MARKS ==========
// Array containing marks for 5 subjects (out of 100)
let marks = [85, 72, 65, 55, 42];

// ========== VALIDATE INPUT ==========
// Ensure we have exactly 5 subject marks
if (marks.length !== 5) {
    console.error("Error: Please provide exactly 5 subject marks.");
} else {
    
    // ========== CALCULATE TOTAL AND AVERAGE ==========
    // Sum all marks using loop accumulation
    let totalMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];      // Add each subject mark to total
    }
    
    // Calculate average marks across all subjects
    let averageMarks = totalMarks / marks.length;
    
    // Calculate percentage (out of 500, which is 5 × 100)
    let percentage = (totalMarks / 500) * 100;
    
    // ========== DETERMINE GRADE BASED ON AVERAGE ==========
    // Initialize grade variable
    let grade = "";
    
    // Assign grade based on average marks with proper range boundaries
    if (averageMarks >= 90) {
        grade = "A+";               // 90-100: A+
    } else if (averageMarks >= 75) {
        grade = "A";                // 75-89: A
    } else if (averageMarks >= 60) {
        grade = "B";                // 60-74: B
    } else if (averageMarks >= 40) {
        grade = "C";                // 40-59: C
    } else {
        grade = "Fail";             // Below 40: Fail
    }
    
    // ========== CHECK FOR FAILED SUBJECTS ==========
    // Count how many subjects have marks below 40 (failure threshold)
    let failedSubjects = 0;
    let failedSubjectsList = [];
    
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 40) {
            failedSubjects++;       // Increment failed subject count
            failedSubjectsList.push(`Subject ${i + 1} (${marks[i]})`);
        }
    }
    
    // ========== DETERMINE REPEAT YEAR STATUS ==========
    // Student must repeat if they fail 2 or more subjects, regardless of average
    let mustRepeat = false;
    
    if (failedSubjects >= 2) {
        mustRepeat = true;          // Repeat year if 2+ subjects failed
    }
    
    // ========== OUTPUT RESULTS TO CONSOLE ==========
    // Display comprehensive analysis in a detailed format
    console.log("========== MARKS ANALYZER RESULTS ==========");
    console.log("Subject Marks: " + marks.join(", "));
    console.log("------------------------------------------");
    console.log(`Total Marks: ${totalMarks}/500`);
    console.log(`Average Marks: ${averageMarks.toFixed(2)}/100`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Grade: ${grade}`);
    console.log("------------------------------------------");
    console.log(`Failed Subjects: ${failedSubjects}`);
    if (failedSubjectsList.length > 0) {
        console.log(`Details: ${failedSubjectsList.join(", ")}`);
    }
    console.log("------------------------------------------");
    
    // Display repeat year status with clear messaging
    if (mustRepeat) {
        console.log("⚠️ STATUS: REPEAT YEAR");
        console.log(`Reason: Student failed ${failedSubjects} subject(s)`);
    } else {
        console.log("✓ STATUS: PROMOTION");
        console.log(`Student can advance to next class.`);
    }
    
    console.log("==========================================");
}
