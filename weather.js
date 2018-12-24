fetch('https://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&APPID=052f4bae1974a3dc50350d7c1c628b67').then(function (response) {
    return response.json();
})
    .then(function (myJson) {
        document.getElementById('t').innerHTML = myJson.weather[0].description;
        var img = document.createElement("img");
        img.src = 'http://openweathermap.org/img/w/'+ myJson.weather[0].icon +'.png';
        document.getElementById('u').appendChild(img);
    })
