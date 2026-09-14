//TODO: Include your multi-line comment header
/*
    Name: Lucas Rozmus
    Date: 9/14/2026
    Assignment: Applied Programing
    Quarter: 1
    Instructor: Lisa Thoendel
*/

// TODO: Import "use strict" directive
import("use strict");

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
var name = 'Lucas Rozmus';
var totalModules = 11;
var isEnrolled = true;
var hoursPerWeek = 6;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
var welcomeMessage = `welcome ${name}`
// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
var totalStudyHours = totalModules * hoursPerWeek



// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
var hoursPerDay = hoursPerWeek / 7
var minutesPerday = hoursPerDay * 60


// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
var adjustedHoursPerWeek = ((hoursPerWeek / 7) * 6)
var adjustedHoursPerDay = adjustedHoursPerWeek / 6
var adjustedMinutesPerDay = adjustedHoursPerDay * 60

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
var modulesComplete = 2
var percentCompleteCoarse = (modulesComplete / totalModules) * 100
var percentRemaining = 100 - percentCompleteCoarse
// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display(welcomeMessage);
display(name);
display(isEnrolled);
display(totalModules);
display(hoursPerDay);
display(minutesPerday);
display(adjustedHoursPerDay);
display(adjustedMinutesPerDay);

// TODO: Display your results with a % sign
display(percentCompleteCoarse);
display(percentRemaining);
