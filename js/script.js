
var row = document.getElementById('row')
var searchInput = document.getElementById('input')

var daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthsInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var arrayOfDate;

async function getDate(city) {
    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9bb3e4fc393e4d4ab27100648230907&q=${city}&days=3`) 
    var res = await data.json()
    arrayOfDate = res
    console.log(arrayOfDate);
    display()
}

searchInput.addEventListener('keyup' , function(e) {
        getDate(e.target.value)
})

getDate('cairo')

// for(var i = 0 ; i < arrayOfDate.forecast.forecastday.length ; i++) {
//     if(arrayOfDate.forecast.forecastday[i].day.condition.text == 'Sunny') {
        
//     }
// }

var date = new Date()
var dateOfDays = date.getDay()
var dateOfMonths = date.getMonth()

function display() {

var cartona = `
<div class="col-md-4">
<div class="content">
    <div class="d-flex justify-content-between align-items-center bg-dark text-white p-3">
        <p>${daysInWeek[dateOfDays]}</p>
        <p>${dateOfDays + ' '+ monthsInYear[dateOfMonths]}</p>
    </div>
    <div class="content-body p-3">
        <p class="mb-3">${arrayOfDate.location.country}</p>
        <div class="d-flex justify-content-around align-items-center mb-3">
            <p class="fs-1 fw-bold">${arrayOfDate.current.temp_c}<sup>o</sup>c</p>
            <!-- <img src="${arrayOfDate.forecast.forecastday[0].day.condition.icon}" class="w-25" alt="${arrayOfDate.forecast.forecastday[0].day.condition.text}"> -->
            <i class="icon fa fa-moon fa-2xl"></i>
        </div>
        <p class="text-primary">${arrayOfDate.forecast.forecastday[0].day.condition.text}</p>
    </div>
    <div class="content-footer">
        <div class="d-flex justify-content-around align-items-center py-3">
            <div><i class="fa-solid fa-umbrella-beach"></i><span>${arrayOfDate.current.humidity}%</span></div>
            <div><i class="fa-solid fa-water"></i><span>${arrayOfDate.current.wind_kph} K/m</span></div>
            <div><i class="fa-solid fa-gauge"></i><span> ${
                arrayOfDate.current.wind_dir === "N"
                  ? "North"
                  : arrayOfDate.current.wind_dir === "S"
                  ? "South"
                  : arrayOfDate.current.wind_dir === "E"
                  ? "East"
                  : "West"
              }</span></div>
        </div>
    </div>
</div>
</div>

<div class="col-md-4">
<div class="content">
    <div class="bg-dark text-white p-3">
        <p class="text-center">${daysInWeek[dateOfDays + 1]}</p>
    </div>
    <div class="content-body p-3 text-center">
    <!-- <img src="${arrayOfDate.forecast.forecastday[1].day.condition.icon ? arrayOfDate.forecast.forecastday[1].day.condition.icon : 'https://cdn.weatherapi.com/weather/64x64/day/176.png'}"  class="w-25" alt="${arrayOfDate.forecast.forecastday[1].day.condition.text}"> -->
        <i class="icon fa fa-moon fa-2xl py-3"></i>
        <p class="fs-1 fw-bold pt-3 mb-0">${arrayOfDate.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</p>
        <p class="pb-2">${arrayOfDate.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
        <p class="text-primary py-3">${arrayOfDate.forecast.forecastday[1].day.condition.text}</p>
    </div>          
</div>
</div>

<div class="col-md-4">
<div class="content">
    <div class="bg-dark text-white p-3">
        <p class="text-center">${daysInWeek[dateOfDays + 2]}</p>
    </div>
    <div class="content-body p-3 text-center">
    <!-- <img src="${arrayOfDate.forecast.forecastday[2].day.condition.icon}"  class="w-25" alt="${arrayOfDate.forecast.forecastday[2].day.condition.text}"> -->
        <i class="icon fa fa-moon fa-2xl py-3"></i>
        <p class="fs-1 fw-bold pt-3 mb-0">${arrayOfDate.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</p>
        <p class="pb-2">${arrayOfDate.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
        <p class="text-primary py-3">${arrayOfDate.forecast.forecastday[2].day.condition.text}</p>
    </div>
</div>
</div>`

    row.innerHTML = cartona
}