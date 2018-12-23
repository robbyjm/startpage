fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(function (response) {
    return response.json();
})
    .then(function (myJson) {
        document.getElementById('s').innerHTML = "BTC $" + myJson.bpi.USD.rate_float.toFixed(2);})