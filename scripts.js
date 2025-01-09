

const key = "0d8799eae947b86063c2f8a1b0e19d82"


async function seachcity (city) {
    const data = await fetch ("ttps://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key´)

}

function clickon () {
    const city = document.querySelector(".input-city").value
    
    seachcity(city)

}
