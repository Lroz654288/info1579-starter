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

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)

const courseModules = ['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7', 'module8', 'module9', 'module10']
const completedModules = ['module1', 'module2']

const name = 'Lucas Rozmus';
const totalModules = 11;
const isEnrolled = true;
const hoursPerWeek = 6;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
const welcomeMessage = `welcome ${name}`
// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
const totalStudyHours = totalModules * hoursPerWeek



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
const modulesComplete = prompt('Enter the number of completed modules (1-10): ');
const percentCompleteCoarse = (modulesComplete / totalModules) * 100
const percentRemaining = 100 - percentCompleteCoarse
let progressMessage = ''
switch (true){
  case percentRemaining === 0:
    progressMessage = 'Current Progress: Finished';
    break;
  case percentRemaining > 0 && percentRemaining < 24,99:
    progressMessage = 'Current Progress: Almost Finished!';
    break;
  case percentRemaining > 25 && percentRemaining < 74.99:
    progressMessage = 'Current Progress: Making Progress';
    break;
  case percentRemaining > 75 && percentRemaining < 101:
    progressMessage = 'Current Progress: Just Getting Started';
    break;
  default:
    progressMessage = 'Invalid entry';
    break;
}
let letterGrade = ""
switch (true){
  case percentCompleteCoarse > 90 && percentCompleteCoarse < 100.01:
  letterGrade = "A";
  break;
  case percentCompleteCoarse > 80 && percentCompleteCoarse < 89.99:
    letterGrade = "B";
    break;
  case percentCompleteCoarse > 70 && percentCompleteCoarse < 79.99:
    letterGrade = "C";
    break;
  case percentCompleteCoarse > 60 && percentCompleteCoarse < 69.99:
    letterGrade = "D";
    break;
  case percentCompleteCoarse > -0.01 && percentCompleteCoarse < 59.99:
    letterGrade = "F";
    break;
  default:
    letterGrade = "invalid entry"
    break;
}
let studyDay = ""
if (percentCompleteCoarse === 100) {
  studyDay = "complete"
} else {
  studyDay = prompt("what day of the week is it?: ")
}
console.log(studyDay)
let studyDayMessage = "";
switch (studyDay) {
  case "sunday":
    studyDayMessage = "rest day";
    break;
  case "monday":
    studyDayMessage = ("study for " + ((Math.round(hoursPerDay * 100))) + " minutes today");
    break;
  case "tuesday":
    studyDayMessage = ("Today is an applied programing activity day, study for " + ((Math.round(hoursPerDay * 100))) + " minutes today");
    break;
  case "wednesday":
    studyDayMessage = ("Today is a lab day, study for " + ((Math.round(hoursPerDay * 100))) + " minutes today");
    break;
  case "thursday":
    studyDayMessage = ("Today is a catch up day");
    break;
  case "friday":
    studyDayMessage = ("no metro today");
    break;
  case "saturday":
    studyDayMessage = "rest day";
    break;
  case "complete":
    studyDayMessage = "course complete";
    break;
  default:
    studyDayMessage = "invalid input";
    break;
}
// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Welcome Message", welcomeMessage);
display("My Name", name);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", (Math.round(hoursPerDay * 100)) / 100);
display("Daily Study Minutes (7 days)", (Math.round(minutesPerday * 100)) / 100);
display("Daily Study Hours (with rest day)", (Math.round(adjustedHoursPerDay * 100)) / 100);
display("Daily Study Minutes (with rest day)", (Math.round(adjustedMinutesPerDay*100)) / 100);
display("progress", progressMessage);
display("letter grade", letterGrade);
// TODO: Display your results with a % sign
display("Percent Complete", ((Math.round(percentCompleteCoarse * 100)) / 100) + '%');
display("Percent Remaining", ((Math.round(percentRemaining * 100)) / 100) + '%');
display("current day of the week", studyDay);
display("study plan", studyDayMessage);