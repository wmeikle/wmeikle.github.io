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
      if (towns[i].name == "Preston" && currentURL.indexOf("preston.html") > 0 ) {
         eventInfo.setAttribute('class', 'eventInfo');
         for (let x = 0; x <= towns[i].events.length; x++) {
            let para = document.createElement('p');
            para.textContent = towns[i].events[x];
            eventInfo.appendChild(para);
         }
      }
      else if(towns[i].name == "Soda Springs" && currentURL.indexOf('sodaSprings.html') >0){
         eventInfo.setAttribute('class', 'eventInfo');
         for (let x = 0; x <= towns[i].events.length; x++) {
            let para = document.createElement('p');
            para.textContent = towns[i].events[x];
            eventInfo.appendChild(para);
         }
      }
      else if(towns[i].name == "Fish Haven" && currentURL.indexOf('fishHaven.html') > 0){
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