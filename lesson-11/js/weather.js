const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a2f144aed8dfa0c2c117f1c30efe8bb2`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);
        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let output = "N/A";
        document.getElementById('weather').innerHTML = jsObject.weather[0].description;
        document.getElementById('current-temp').innerHTML = Math.round(t);
        if (t <= 50 && s >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            output = Math.round(f);
        };
        document.getElementById("output").innerHTML = output;
        document.getElementById('speed').innerHTML = Math.round(s);

    });
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a2f144aed8dfa0c2c117f1c30efe8bb2";
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

    });
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            const eventInfo = document.createElement('div');
            if (towns[i].name == "Preston" && currentURL.indexOf("preston.html") > 0) {
                eventInfo.setAttribute('class', 'eventInfo');
                for (let x = 0; x <= towns[i].events.length; x++) {
                    let para = document.createElement('p');
                    para.textContent = towns[i].events[x]
                    eventInfo.appendChild(para);
                }
            } else if (towns[i].name == "Soda Springs" && currentURL.indexOf('sodasprings.html') > 0) {
                eventInfo.setAttribute('class', 'eventInfo');
                for (let x = 0; x <= towns[i].events.length; x++) {
                    let para = document.createElement('p');
                    para.textContent = towns[i].events[x];
                    eventInfo.appendChild(para);
                }
            } else if (towns[i].name == "Fish Haven" && currentURL.indexOf('fishhaven.html') > 0) {
                eventInfo.setAttribute('class', 'eventInfo');
                for (let x = 0; x <= towns[i].events.length; x++) {
                    let para = document.createElement('p');
                    para.textContent = towns[i].events[x];
                    eventInfo.appendChild(para);
                }
            }
            document.getElementById('events').appendChild(eventInfo);
        }
    });

