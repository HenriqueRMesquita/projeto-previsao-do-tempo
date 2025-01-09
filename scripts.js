const key = "0d8799eae947b86063c2f8a1b0e19d82"

function showdata(dados){
    document.querySelector(".city").innerHTML= "Tempo em " + dados.name
    document.querySelector(".celsius").innerHTML= Math.floor(dados.main.temp) + "°C"
    document.querySelector(".prevision-text").innerHTML= dados.weather[0].description
    document.querySelector(".umi").innerHTML= "Umidade: " +  dados.main.humidity + "%"
    document.querySelector(".prevision").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
 async function seachcity(city){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    showdata(dados)
}

function clickon () {
    const city = document.querySelector(".input-city").value
    
    seachcity(city)

}
