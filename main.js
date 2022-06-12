const api ={
    key: "0b562f592e748db558a01e7fa3a69676",
    base: "https://api.openweathermap.org/data/2.5/" 
}
const searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress',setQuery );

function setQuery(evt)
{
    if (evt.keyCode === 13)
    {
        getresults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getresults(query)
{
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather)
{
    
    let city =document.querySelector('.location .city');
    city.innerText =`${weather.name},${weather.sys.country}`;

    let now =new Date() ;
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    let temp =document.querySelector('.current .temp');
    temp.innerHTML =`${Math.round(weather.main.temp)}<span>°c</span>`;
    
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let highlow =document.querySelector('.hi-low');
    highlow.innerText =`${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
   
    
    
}

function dateBuilder(d)
{
    const months =["January","February","March","April", "May" ,"June" ,"July" ,"August" ,"September" ,"October" , "November" , "December"];
    const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , " Friday" , "Saturday"]; 
  
    let day = days[d.getDay()];
    console.log(day);
    let date =d.getDate();
    let month = months[d.getMonth()];
    let year =d.getFullYear();
    console.log(year);

    return `${day} ${date} ${month} ${year}`;

}