const apiKey = "b4ff8716b00eda9cbdc2b43818c65a3e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const weatherI = document.querySelector(".weatther");


async function checkWeather(city){
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();

        // console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        // weatherI.innerHTML = ' ';
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.innerHTML = '<i class="fa-solid fa-smog"></i>';
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

   

}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
