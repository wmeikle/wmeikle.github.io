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

function windChill(){
    let t = parseFloat(document.getElementById("t").innerText);
    let s = parseFloat(document.getElementById("s").innerText);
    let ouptut = "";

    /*if(t >= 50 && s > 10){
    f = (35.74+(0.6215 * t)) - (35.75*Math.pow(s,0.16))+(0.4275*t)*(Math.pow(s,0.16));
    }*/

    (t <= 50 && s > 10) ? output = ((35.74+(0.6215 * t)) - (35.75*Math.pow(s,0.16))+(0.4275*t)*(Math.pow(s,0.16))).toFixed(2) : output = "N/A";
document.getElementById("windChill").innerHTML = output;

}