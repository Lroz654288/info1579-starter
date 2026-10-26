//TODO: Include your multi-line comment header
/*
    Name: Lucas Rozmus
    Date: 9/14/2026
    Assignment: Applied Programing
    Quarter: 1
    Instructor: Lisa Thoendel
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW
let studyDay = ""
const getStudyPlan = (studyDay) => {
if (percentCompleteCoarse === 100) {
  studyDay = "complete"
} else {
  studyDay = prompt("what day of the week is it?: ")
}
console.log(studyDay)
switch (studyDay) {
  case "sunday":
    return "rest day";
    break;
  case "monday":
    return ("study for " + ((Math.round(hoursPerDay * 100))) + " minutes today");
    break;
  case "tuesday":
    return ("Today is an applied programing activity day, study for " + ((Math.round(hoursPerDay * 100))) + " minutes today");
    break;
  case "wednesday":
    return ("Today is a lab day, study for " + ((Math.round(hoursPerDay * 100))) + " minutes today");
    break;
  case "thursday":
    return ("Today is a catch up day");
    break;
  case "friday":
    return ("no metro today");
    break;
  case "saturday":
    return "rest day";
    break;
  case "complete":
    return "course complete";
    break;
  default:
    return "invalid input";
    break;
}
}
const displayModules = (modules) => {
  for (let i = 0; i < modules.length; i++) {
    display(`module ${i + 1}`, modules[i])
  }
}
const displayCompletedModules = (... modules) => {
  return modules.join(", ");
}
const getCourseGrade = (percentCompleteCoarse) => {
  switch (true){
  case percentCompleteCoarse > 90 && percentCompleteCoarse < 100.01:
  return "A";
  break;
  case percentCompleteCoarse > 80 && percentCompleteCoarse < 89.99:
    return "B";
    break;
  case percentCompleteCoarse > 70 && percentCompleteCoarse < 79.99:
    return "C";
    break;
  case percentCompleteCoarse > 60 && percentCompleteCoarse < 69.99:
    return "D";
    break;
  case percentCompleteCoarse > -0.01 && percentCompleteCoarse < 59.99:
    return "F";
    break;
  default:
    return "invalid entry"
    break;
}
}

function calculatePercentComplete(completed, total) {
  return ((completed / total) * 100)
}
function calculateStudyHours(modules, hourspermodule = 6) {
  return (modules * hourspermodule)
}
function getCourseProgress(percentRemaining) {
switch (true){
  case percentRemaining === 0:
    return 'Current Progress: Finished';
    break;
  case percentRemaining > 0 && percentRemaining < 24,99:
    return 'Current Progress: Almost Finished!';
    break;
  case percentRemaining > 25 && percentRemaining < 74.99:
    return 'Current Progress: Making Progress';
    break;
  case percentRemaining > 75 && percentRemaining < 101:
    return 'Current Progress: Just Getting Started';
    break;
  default:
    return 'Invalid entry';
    break;
}
}

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)

const courseModules = ['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7', 'module8', 'module9', 'module10']
const completedModules = ['module1', 'module2', 'module 3']
const completedModulesList = displayCompletedModules(...completedModules)
const name = 'Lucas Rozmus';
const totalModules = 11;
const isEnrolled = true;
const hoursPerWeek = 6;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
const welcomeMessage = `welcome ${name}`
// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
const totalStudyHours = calculateStudyHours(courseModules.length, hoursPerWeek)



// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
const hoursPerDay = hoursPerWeek / 7
const minutesPerday = hoursPerDay * 60


// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
const adjustedHoursPerWeek = ((hoursPerWeek / 7) * 6)
const adjustedHoursPerDay = adjustedHoursPerWeek / 6
const adjustedMinutesPerDay = adjustedHoursPerDay * 60

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100

const percentCompleteCoarse = calculatePercentComplete(completedModules.length, totalModules)
const percentRemaining = 100 - percentCompleteCoarse





// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Welcome Message", welcomeMessage);
display("My Name", name);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
displayModules(courseModules)
display("completed modules", completedModulesList)
display("Daily Study Hours (7 days)", (Math.round(hoursPerDay * 100)) / 100);
display("Daily Study Minutes (7 days)", (Math.round(minutesPerday * 100)) / 100);
display("Daily Study Hours (with rest day)", (Math.round(adjustedHoursPerDay * 100)) / 100);
display("Daily Study Minutes (with rest day)", (Math.round(adjustedMinutesPerDay*100)) / 100);
display("progress", getCourseProgress(percentRemaining));
display("letter grade", getCourseGrade(percentCompleteCoarse));
// TODO: Display your results with a % sign
display("Percent Complete", ((Math.round(percentCompleteCoarse * 100)) / 100) + '%');
display("Percent Remaining", ((Math.round(percentRemaining * 100)) / 100) + '%');
display("study plan", getStudyPlan(studyDay));