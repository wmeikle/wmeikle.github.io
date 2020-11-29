function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");

}
// PANCAKES
function pancakes(){
    let today = new Date();
    if(today.getDay() == 5){
        document.getElementById("pancakes").style.display ="block";
    }
}
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate")

function windChill(tempF, speed) {
    let s = Math.pow(speed, 0.16);
    f = 35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * tempF * s);
    return f.toFixed(2)
  }