function toCelsius(e) {
    var fTemperature = e.value;
    if (fTemperature == '') {
        document.getElementById('Celsius').value = null;
    } else {
        var fahrenheitTemp = (fTemperature - 32) / 1.8;
        document.getElementById('Celsius').value = fahrenheitTemp.toFixed(2);
    }
}

function toFahrenheit(e) {
    var cTemperature = e.value;
    if (cTemperature == '') {
        document.getElementById('Fahrenheit').value = null;
    } else {
        var celsiusTemp = (cTemperature * 1.8) + 32;
        document.getElementById('Fahrenheit').value = celsiusTemp.toFixed(2);
    }
}