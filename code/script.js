const APIKEY="d80e40f0ba975ec3c90188d273a17d72";
const APIURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const SEARCH=document.querySelector(".search input");
const SEARCHBUTTON=document.querySelector(".search button");
const icon=document.querySelector(".weather_icon");
const weather=document.querySelector(".weather");
const error=document.querySelector(".error")


async function checkWeather(city){
  const result=await fetch(APIURL+city+`&appid=${APIKEY}`);

  if (result.status==404){
    error.style.display="block";
    weather.style.display="none";
  }else{
    var data=await result.json();


    document.querySelector(".city").innerText=data.name;
    document.querySelector(".humidity").innerText=data.main.humidity +"%";
    document.querySelector(".temp").innerText=Math.round(data.main.temp) +"°C";
    document.querySelector(".wind").innerText=data.wind.speed + "km/h";

    if(data.weather[0].main!=null){
      if(data.weather[0].main=="Haze"){
        icon.src="D:/AI Project/javascript+html+css/weather website/weather_app_images/images/mist.png"
      }else{
        icon.src="D:/AI Project/javascript+html+css/weather website/weather_app_images/images/"+data.weather[0].main.toLowerCase()+".png";
      }
     }

    weather.style.display="block";
    error.style.display="none";
    SEARCH.value='';
  }
  
}

SEARCHBUTTON.addEventListener("click",()=>{
  checkWeather(SEARCH.value);
})





