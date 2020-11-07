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

var params = new URLSearchParams(location.search);
var data = '<strong>Your Contact Information </strong><br/>';
data = data + 'First Name: ' + params.get('fname') + '<br/>';
data = data + 'Last Name: ' + params.get('lname') + '<br/>';
data = data + 'Phone: ' + params.get('phone') + '<br/>';
data = data + 'Email: ' + params.get('email') + '<br/>';

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
  }