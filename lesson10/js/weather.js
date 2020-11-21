const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=79e15b681560d53f708b95aafeb82274 ";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject);
   document.getElementById('current').textContent = jsObject.weather[0].description;
   document.getElementById('currentTemp').textContent = Math.ceil(jsObject.main.temp);
   document.getElementById('humidity').textContent = jsObject.main.humidity;
   document.getElementById('wind-speed').textContent = Math.ceil(jsObject.wind.speed);
});

const forapi = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=79e15b681560d53f708b95aafeb82274";

fetch(forapi)
.then((response) => response.json())
.then((jsObject) => {
   console.log(jsObject);
     var x = 1;
     let weekDay = new Array(7);
     weekDay[0] = "Sun";
     weekDay[1] = "Mon";
     weekDay[2] = "Tues";
     weekDay[3] = "Wed";
     weekDay[4] = "Thurs";
     weekDay[5] = "Fri";
     weekDay[6] = "Sat";

     for(i = 0; i < jsObject.list.length; i++){
      var myTime = jsObject.list[i].dt_txt.substring(11);
        let date = new Date(jsObject.list[i].dt * 1000);
        let weather = weekDay[date.getDay()];
        if(myTime == '18:00:00' && x<=5 ) {
           document.getElementById('weather' + x).textContent = weather;
           document.getElementById('forecast' + x).textContent = Math.ceil(jsObject.list[i].main.temp)+ '°F';
          
           const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
           const desc = jsObject.list[i].weather[0].description;
           document.getElementById('icon' + x).setAttribute('src', imagesrc);
           document.getElementById('icon' + x).setAttribute('alt',desc);
           x++
        }

     }
})

function getImages() {
    const apiURL = "js/forecast.json"
    // "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=703bf38fa0ac6aec6fd04dd0b7e37720&units=imperial";
  
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        let day = 1
        for (let i = 0; i < jsObject.list.length; i++) {
          if (jsObject.list[i].dt_txt.includes("18:00:00")) {
            let imageUrl = jsObject.list[i].weather[0].icon;
            let dTemp = jsObject.list[i].main.temp;
            let desc = jsObject.list[i].weather[0].description;
            let imagesrc = `https://openweathermap.org/img/w/${imageUrl}.png`;
            document.getElementById(`day${day}`).setAttribute('src', imagesrc);
            document.getElementById(`day${day}`).setAttribute('alt', dTemp);
            document.getElementById(`day${day}-desc`).textContent= `${titleCase(desc)}`;
            document.getElementById(`day${day}-temp`).textContent= `${dTemp} \u2109`;
            day ++;
          }
        }
      });
  }