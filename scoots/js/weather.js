const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=a2f144aed8dfa0c2c117f1c30efe8bb2&units=imperial";

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);
        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let output = "N/A";
        document.getElementById('weather').innerHTML = jsObject.weather[0].description;
        document.getElementById('current-temp').innerHTML = Math.round(t);
        document.getElementById("output").innerHTML = output;
        document.getElementById('speed').innerHTML = Math.round(s);
        document.getElementById('feels_like').innerHTML = Math.round(jsObject.current.feels_like) + "&#8457;";
        document.getElementById('humidity').innerHTML = Math.round(jsObject.current.humidity) + "&#37;";

    });

    const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=a2f144aed8dfa0c2c117f1c30efe8bb2&units=imperial";  
    fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        console.table(forecastObject);
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast);
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
            const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
            const desc = forecast[day].weather[0].description;
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        }
        document.getElementById('alert').innerHTML = jsObject.alerts.event;
        document.getElementById('alertdesc').innerHTML = jsObject.alerts.description;

    });