function getWeather(){
    
    const apiKey='80fe2695a2863cc9cd2bd5a315b1c5f8';
    const city=document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const weatherresult=document.getElementById('weatherresult');
        weatherresult.innerHTML=
        `<h2>${data.name}</h2>
        <p>Temperature: ${Math.round(data.main.temp)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p> ${data.weather[0].description}</p>
        `
        document.getElementById('city').value = '';

        
    })
    .catch(e=>
    {
        console.error('Error fetching data:', e);
        const weatherresult = document.getElementById('weatherresult');
      weatherresult.innerHTML = `<p>City not found.</p>`;
        

        
    })
}