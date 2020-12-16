const request = 'https://wmeikle.github.io/scoots/data/pricing.json';
fetch(request)
  .then((response) => response.json())
  .then((jsObject) => {
    const rentals = jsObject['rentals'];
    for (let i = 0; i < rentals.length; i++ ) {
      document.getElementById(`rhalfday${i+1}`).innerHTML = rentals[i].rhalfday;
      document.getElementById(`rfullday${i+1}`).innerHTML = rentals[i].rfullday;
      document.getElementById(`whalfday${i+1}`).innerHTML = rentals[i].whalfday;
      document.getElementById(`wfullday${i+1}`).innerHTML = rentals[i].wfullday;
    }
  });